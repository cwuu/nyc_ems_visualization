"""
File:
sunsetsunup.py

Description:
This code contains two no-frills functions for scraping the sunup/sunset times
for NYC by day from timeanddate.com.

Sample:
        SUNUP_DATETIME       SUNDO_DATETIME
1  2013-01-02 07:20:00  2013-01-02 16:40:00
2  2013-01-03 07:20:00  2013-01-03 16:41:00
"""
from bs4 import BeautifulSoup as bs
from urllib.request import urlopen
import pandas as pd
from random import randint
from time import sleep

def pull_site_html(some_url):
    """Pull website html, return bs obj."""
    url_conn = urlopen(some_url)
    site_html = url_conn.read()
    url_conn.close()
    return bs(site_html, 'html.parser')

def get_sunup_sundown(year, month):
    """pull daily sunup/down from https://www.timeanddate.com/, return df"""
    url="https://www.timeanddate.com/sun/usa/new-york?month={}&year={}".format(
        month, year)
    site = pull_site_html(url)

    temp_tbl = pd.read_html(site.prettify(), header=None)[0]
    df = temp_tbl.iloc[0:, 0:4].dropna()           # get rid of disclaimer row
    df.columns = ["DAYOFMONTH", "SUNRISE", "SUNSET", "DAYLENGTH"]

    df["DATE"] = year + "-" + month + "-" + df["DAYOFMONTH"]
    df["sunup"] = df["SUNRISE"].str[:7]            # strip out just times
    df["sundown"] = df["SUNSET"].str[:7]

    df['sunup_time'] = [pd.to_datetime(d).strftime("%H:%M") for d in df.sunup]
    df['sundo_time'] = [pd.to_datetime(d).strftime("%H:%M") for d in
                        df.sundown]

    df = df.assign(sunup_t=df["DATE"] + " " + df['sunup_time'])
    df = df.assign(sundo_t=df["DATE"] + " " + df['sundo_time'])
    df["SUNUP_DATETIME"] = pd.to_datetime(df.sunup_t)
    df["SUNDO_DATETIME"] = pd.to_datetime(df.sundo_t)
    df["DATE"] = pd.to_datetime(df["DATE"])
    df = df[["DATE", "SUNUP_DATETIME", "SUNDO_DATETIME"]]
    return df

# combine files
file_yrs = ["2013", "2014", "2015", "2016", "2017"]
file_mnth = range(1,13)

df_list = list()
for yr in file_yrs:
    for m in file_mnth:
        combo = get_sunup_sundown(yr, str(m))
        df_list.append(combo)
        sleep(randint(1, 5))

sunupdown = pd.concat(df_list)
sunupdown.to_csv(".\FP\sunupdown.csv")