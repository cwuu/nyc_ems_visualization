// All layers name
var responseTimeLayerIDs = ["severity_rpt/sev1", "severity_rpt/sev2", "severity_rpt/sev3", "severity_rpt/sev4", "severity_rpt/sev5", "severity_rpt/sev6", "severity_rpt/sev7"];
var incidentLayerIDs = [ 'location/BROOKLYN', 'location/BRONX', 'location/QUEENS', 'location/RICHMOND-STATEN-ISLAND','location/MANHATTAN', "incident/ABDPN", "incident/CARD", "incident/DIFFBR", "incident/DRUG", "incident/EDP", "incident/INJURY", "incident/SICK", "incident/UNC", "incident/UNKNOW", "date/01-01-2013", "date/01-01-2014", "date/01-01-2015", "date/01-01-2016", "date/01-01-2017", "date/03-27-2016", "date/03-31-2013", "date/04-05-2015", "date/04-16-2017", "date/04-20-2014", "date/07-04-2013", "date/07-04-2014", "date/07-04-2015", "date/07-04-2016", "date/07-04-2017", "date/11-23-2017", "date/11-24-2016", "date/11-26-2015", "date/11-27-2014", "date/11-28-2013", "date/12-24-2013", "date/12-24-2014", "date/12-24-2015", "date/12-24-2016", "date/12-24-2017"];
var cityWideLayerIDs = [];

// Show filter
function responseTimeAnalysis() {
    var x = document.getElementById("responseTimeFilter");
    var y = document.getElementById("incidentFilter");
    var z = document.getElementById("cityWideFilter");
    var a = document.getElementById("responseTimeAnalysisGraph");
    var b = document.getElementById("incidentAnalysisPic");
    var c = document.getElementById("cityWideAnalysisPic");
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        //x.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function incidentAnalysis() {
    //var x = document.getElementById("incidentFilter");
    var x = document.getElementById("responseTimeFilter");
    var y = document.getElementById("incidentFilter");
    var z = document.getElementById("cityWideFilter");
    var a = document.getElementById("responseTimeAnalysisGraph");
    var b = document.getElementById("incidentAnalysisPic");
    var c = document.getElementById("cityWideAnalysisPic");
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        //x.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function cityWideAnalysis() {
    //var x = document.getElementById("cityWideFilter");
    var x = document.getElementById("responseTimeFilter");
    var y = document.getElementById("incidentFilter");
    var z = document.getElementById("cityWideFilter");
    var a = document.getElementById("responseTimeAnalysisGraph");
    var b = document.getElementById("incidentAnalysisPic");
    var c = document.getElementById("cityWideAnalysisPic");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        //x.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }
}


// Show analysis
function responseTimeAnalysisSwitch() {
    var x = document.getElementById("responseTimeAnalysisGraph");
    //var y = document.getElementById("viz1556784068580");
    //var z = document.getElementById("viz1556784068580");
    //var a = document.getElementById("viz1556729110021");
    //var b = document.getElementById("viz1556729315326");
    if (x.style.display === "none"){ //&& y.style.display === "none" && z.style.display === "none" && a.style.display === "none" && b.style.display === "none") {
    //if (x.style.visibility === "hidden" && y.style.visibility === "hidden" && z.style.visibility === "hidden" && a.style.visibility === "hidden" && b.style.visibility === "hidden") {
        x.style.display = "block";
        //y.style.display = "block";
        //z.style.display = "block";
        //a.style.display = "block";
        //b.style.display = "block";
    } else {
        x.style.display = "none";
        //y.style.display = "none";
        //z.style.display = "none";
        //a.style.display = "none";
        //b.style.display = "none";
    }
}

function incidentAnalysisSwitch() {
    var x = document.getElementById("incidentAnalysisPic");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function cityWideAnalysisSwitch() {
    var x = document.getElementById("cityWideAnalysisPic");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function cleanMapView() {
    map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'none');
    map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'none');
    map.setLayoutProperty("temp_rpt/temp0", 'visibility', 'none');
    map.setLayoutProperty("temp_rpt/temp1", 'visibility', 'none');
    map.setLayoutProperty("daynight_rpt/sunup", 'visibility', 'none');
    map.setLayoutProperty("daynight_rpt/sundown", 'visibility', 'none');
    map.setLayoutProperty("weather_rpt/sunny", 'visibility', 'none');
    map.setLayoutProperty("weather_rpt/rainy", 'visibility', 'none');
    map.setLayoutProperty("incident_type/drug", 'visibility', 'none');
    map.setLayoutProperty("incident_type/shot", 'visibility', 'none');
    map.setLayoutProperty("location/BRONX", 'visibility', 'none');
    map.setLayoutProperty("location/BROOKLYN", 'visibility', 'none');
    map.setLayoutProperty("location/MANHATTAN", 'visibility', 'none');
    map.setLayoutProperty("location/QUEENS", 'visibility', 'none');
    map.setLayoutProperty("location/RICHMOND-STATEN-ISLAND", 'visibility', 'none');
    map.setLayoutProperty("incident/ABDPN", 'visibility', 'none');
    map.setLayoutProperty("incident/CARD", 'visibility', 'none');
    map.setLayoutProperty("incident/DIFFBR", 'visibility', 'none');
    map.setLayoutProperty("incident/DRUG", 'visibility', 'none');
    map.setLayoutProperty("incident/EDP", 'visibility', 'none');
    map.setLayoutProperty("incident/INJURY", 'visibility', 'none');
    map.setLayoutProperty("incident/SICK", 'visibility', 'none');
    map.setLayoutProperty("incident/UNC", 'visibility', 'none');
    map.setLayoutProperty("incident/UNKNOW", 'visibility', 'none');
    map.setLayoutProperty("date/01-01-2013", 'visibility', 'none');
    map.setLayoutProperty("date/03-31-2013", 'visibility', 'none');
    map.setLayoutProperty("date/07-04-2013", 'visibility', 'none');
    map.setLayoutProperty("date/11-28-2013", 'visibility', 'none');
    map.setLayoutProperty("date/12-24-2013", 'visibility', 'none');
    map.setLayoutProperty("date/01-01-2014", 'visibility', 'none');
    map.setLayoutProperty("date/04-20-2014", 'visibility', 'none');
    map.setLayoutProperty("date/07-04-2014", 'visibility', 'none');
    map.setLayoutProperty("date/11-27-2014", 'visibility', 'none');
    map.setLayoutProperty("date/12-24-2014", 'visibility', 'none');
    map.setLayoutProperty("date/01-01-2015", 'visibility', 'none');
    map.setLayoutProperty("date/04-05-2015", 'visibility', 'none');
    map.setLayoutProperty("date/07-04-2015", 'visibility', 'none');
    map.setLayoutProperty("date/11-26-2015", 'visibility', 'none');
    map.setLayoutProperty("date/12-24-2015", 'visibility', 'none');
    map.setLayoutProperty("date/01-01-2016", 'visibility', 'none');
    map.setLayoutProperty("date/03-27-2016", 'visibility', 'none');
    map.setLayoutProperty("date/07-04-2016", 'visibility', 'none');
    map.setLayoutProperty("date/11-24-2016", 'visibility', 'none');
    map.setLayoutProperty("date/12-24-2016", 'visibility', 'none');
    map.setLayoutProperty("date/01-01-2017", 'visibility', 'none');
    map.setLayoutProperty("date/04-16-2017", 'visibility', 'none');
    map.setLayoutProperty("date/07-04-2017", 'visibility', 'none');
    map.setLayoutProperty("date/11-23-2017", 'visibility', 'none');
    map.setLayoutProperty("date/12-24-2017", 'visibility', 'none');
    map.setLayoutProperty("year_rpt/2013", 'visibility', 'none');
    map.setLayoutProperty("year_rpt/2014", 'visibility', 'none');
    map.setLayoutProperty("year_rpt/2015", 'visibility', 'none');
    map.setLayoutProperty("year_rpt/2016", 'visibility', 'none');
    map.setLayoutProperty("year_rpt/2017", 'visibility', 'none');
}

// Show map
// Response Time Analysis
function getResponseTimeAnalysisRadios() {
    var responseTimeAnalysisRadios = document.getElementsByName('responseTimeFilterRadio');
    cleanMapView();
    //"severity_rpt/sev1", "severity_rpt/sev2", "severity_rpt/sev3", "severity_rpt/sev4", "severity_rpt/sev5", "severity_rpt/sev6", "severity_rpt/sev7"
    if (responseTimeAnalysisRadios[0].checked){
        var newYearSlider = document.getElementById('newYearSlider').value;
        if (newYearSlider == 2013){
            map.setLayoutProperty("year_rpt/2013", 'visibility', 'visible');
        }
        else if (newYearSlider == 2014){
            map.setLayoutProperty("year_rpt/2014", 'visibility', 'visible');
        }
        else if (newYearSlider == 2015){
            map.setLayoutProperty("year_rpt/2015", 'visibility', 'visible');
        }
        else if (newYearSlider == 2016){
            map.setLayoutProperty("year_rpt/2016", 'visibility', 'visible');
        }
        else if (newYearSlider == 2017){
            map.setLayoutProperty("year_rpt/2017", 'visibility', 'visible');
        }
    }
    else if (responseTimeAnalysisRadios[1].checked){
        var severitySlider = document.getElementById('severitySlider').value;
        if (severitySlider == 1){
            map.setLayoutProperty("severity_rpt/sev1", 'visibility', 'visible');
        }
        else if (severitySlider == 2){
            map.setLayoutProperty("severity_rpt/sev2", 'visibility', 'visible');
        }
        else if (severitySlider == 3){
            map.setLayoutProperty("severity_rpt/sev3", 'visibility', 'visible');
        }
        else if (severitySlider == 4){
            map.setLayoutProperty("severity_rpt/sev4", 'visibility', 'visible');
        }
        else if (severitySlider == 5){
            map.setLayoutProperty("severity_rpt/sev5", 'visibility', 'visible');
        }
        else if (severitySlider == 6){
            map.setLayoutProperty("severity_rpt/sev6", 'visibility', 'visible');
        }
        else if (severitySlider == 7) {
            map.setLayoutProperty("severity_rpt/sev7", 'visibility', 'visible');
        }
    }

    else if (responseTimeAnalysisRadios[2].checked){
        //"temp_rpt/temp0", "temp_rpt/temp1"
        var tempSlider = document.getElementById('tempSlider').value;
        if (tempSlider == 0) {
            map.setLayoutProperty("temp_rpt/temp0", 'visibility', 'visible');
        }
        else if (tempSlider == 1){
            map.setLayoutProperty("temp_rpt/temp1", 'visibility', 'visible');
        }

    }
    /*
    else if (responseTimeAnalysisRadios[3].checked){
        //'daynight_rpt/sunup', 'daynight_rpt/sundown'
        //var tempSlider = document.getElementsByName('responseTimeFilterRadioTime2').value;
        //if (tempSlider == day) {
        //    map.setLayoutProperty("daynight_rpt/sunup", 'visibility', 'visible');
        //    map.setLayoutProperty("daynight_rpt/sundown", 'visibility', 'none');
        //}
        //else if (tempSlider == night){
        //    map.setLayoutProperty("daynight_rpt/sunup", 'visibility', 'none');
        //    map.setLayoutProperty("daynight_rpt/sundown", 'visibility', 'visible');
        //}
    }

    else if (responseTimeAnalysisRadios[4].checked){

        //var responseTimeAnalysisRadios2 = document.getElementsByName('responseTimeAnalysisRadios2').value;
    }*/
}

function getResponseTimeAnalysisRadios2() {
    cleanMapView();
    map.setLayoutProperty("daynight_rpt/sunup", 'visibility', 'visible');
}

function getResponseTimeAnalysisRadios3() {
    cleanMapView();
    map.setLayoutProperty("daynight_rpt/sundown", 'visibility', 'visible');
}

function getResponseTimeAnalysisRadios4() {
    cleanMapView();
    map.setLayoutProperty("weather_rpt/sunny", 'visibility', 'visible');
}

function getResponseTimeAnalysisRadios5() {
    cleanMapView();
    map.setLayoutProperty("weather_rpt/rainy", 'visibility', 'visible');
}



//function cityWideAnalysisSwitch() {
//    var x = document.getElementById("cityWideAnalysisPic");
//    if (x.style.display === "none") {
//        x.style.display = "block";
//    } else {
//        x.style.display = "none";
//    }
//}
//link.onclick = function (e) {
//    var clickedLayer = this.textContent;
//    e.preventDefault();
//    e.stopPropagation();
//
//    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
//
//    if (visibility === 'visible') {
//        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
//        this.className = '';
//    } else {
//        this.className = 'active';
//        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
//    }
//};
//


// Incident Analysis
function getIncidentAnalysisRadios1() {
    cleanMapView();
    map.setLayoutProperty("location/BRONX", 'visibility', 'visible');
}

function getIncidentAnalysisRadios2() {
    cleanMapView();
    map.setLayoutProperty("location/BROOKLYN", 'visibility', 'visible');
}

function getIncidentAnalysisRadios3() {
    cleanMapView();
    map.setLayoutProperty("location/MANHATTAN", 'visibility', 'visible');
}

function getIncidentAnalysisRadios4() {
    cleanMapView();
    map.setLayoutProperty("location/QUEENS", 'visibility', 'visible');
}

function getIncidentAnalysisRadios5() {
    cleanMapView();
    map.setLayoutProperty("location/RICHMOND-STATEN-ISLAND", 'visibility', 'visible');
}

function getIncidentAnalysisRadios6() {
    cleanMapView();
    map.setLayoutProperty("incident/ABDPN", 'visibility', 'visible');
}

function getIncidentAnalysisRadios7() {
    cleanMapView();
    map.setLayoutProperty("incident/CARD", 'visibility', 'visible');
}

function getIncidentAnalysisRadios8() {
    cleanMapView();
    map.setLayoutProperty("incident/DRUG", 'visibility', 'visible');
}

function getIncidentAnalysisRadios9() {
    cleanMapView();
    map.setLayoutProperty("incident/DIFFBR", 'visibility', 'visible');
}

function getIncidentAnalysisRadios10() {
    cleanMapView();
    map.setLayoutProperty("incident/EDP", 'visibility', 'visible');
}

function getIncidentAnalysisRadios11() {
    cleanMapView();
    map.setLayoutProperty("incident/INJURY", 'visibility', 'visible');
}

function getIncidentAnalysisRadios12() {
    cleanMapView();
    map.setLayoutProperty("incident/SICK", 'visibility', 'visible');
}

function getIncidentAnalysisRadios13() {
    cleanMapView();
    map.setLayoutProperty("incident/UNC", 'visibility', 'visible');
}

function getIncidentAnalysisRadios14() {
    cleanMapView();
    map.setLayoutProperty("incident/UNKNOW", 'visibility', 'visible');
}

function getIncidentAnalysisRadios15() {
    cleanMapView();

    var yearSlider = document.getElementById('yearSlider').value;
    var dateSlider = document.getElementById('dateSlider').value;
    //alert(yearSlider)
    //alert(dateSlider)
    if (yearSlider == 2013){
        if (dateSlider == 0){
            map.setLayoutProperty("date/01-01-2013", 'visibility', 'visible');
        }
        else if (dateSlider == 1){
            map.setLayoutProperty("date/03-31-2013", 'visibility', 'visible');
        }
        else if (dateSlider == 2){
            map.setLayoutProperty("date/07-04-2013", 'visibility', 'visible');
        }
        else if (dateSlider == 3){
            map.setLayoutProperty("date/11-28-2013", 'visibility', 'visible');
        }
        else if (dateSlider == 4){
            map.setLayoutProperty("date/12-24-2013", 'visibility', 'visible');
        }
    }
    else if (yearSlider == 2014){
        if (dateSlider == 0){
            map.setLayoutProperty("date/01-01-2014", 'visibility', 'visible');
        }
        else if (dateSlider == 1){
            map.setLayoutProperty("date/04-20-2014", 'visibility', 'visible');
        }
        else if (dateSlider == 2){
            map.setLayoutProperty("date/07-04-2014", 'visibility', 'visible');
        }
        else if (dateSlider == 3){
            map.setLayoutProperty("date/11-27-2014", 'visibility', 'visible');
        }
        else if (dateSlider == 4){
            map.setLayoutProperty("date/12-24-2014", 'visibility', 'visible');
        }
    }
    else if (yearSlider == 2015){
        if (dateSlider == 0){
            map.setLayoutProperty("date/01-01-2015", 'visibility', 'visible');
        }
        else if (dateSlider == 1){
            map.setLayoutProperty("date/04-05-2015", 'visibility', 'visible');
        }
        else if (dateSlider == 2){
            map.setLayoutProperty("date/07-04-2015", 'visibility', 'visible');
        }
        else if (dateSlider == 3){
            map.setLayoutProperty("date/11-26-2015", 'visibility', 'visible');
        }
        else if (dateSlider == 4){
            map.setLayoutProperty("date/12-24-2015", 'visibility', 'visible');
        }
    }
    else if (yearSlider == 2016){
        if (dateSlider == 0){
            map.setLayoutProperty("date/01-01-2016", 'visibility', 'visible');
        }
        else if (dateSlider == 1){
            map.setLayoutProperty("date/03-27-2016", 'visibility', 'visible');
        }
        else if (dateSlider == 2){
            map.setLayoutProperty("date/07-04-2016", 'visibility', 'visible');
        }
        else if (dateSlider == 3){
            map.setLayoutProperty("date/11-24-2016", 'visibility', 'visible');
        }
        else if (dateSlider == 4){
            map.setLayoutProperty("date/12-24-2016", 'visibility', 'visible');
        }
    }
    else if (yearSlider == 2017){
        if (dateSlider == 0){
            map.setLayoutProperty("date/01-01-2017", 'visibility', 'visible');
        }
        else if (dateSlider == 1){
            map.setLayoutProperty("date/04-16-2017", 'visibility', 'visible');
        }
        else if (dateSlider == 2){
            map.setLayoutProperty("date/07-04-2017", 'visibility', 'visible');
        }
        else if (dateSlider == 3){
            map.setLayoutProperty("date/11-23-2017", 'visibility', 'visible');
        }
        else if (dateSlider == 4){
            map.setLayoutProperty("date/12-24-2017", 'visibility', 'visible');
        }
    }
}


// City Wide Analysis
function getCityWideAnalysisRadios1() {
    cleanMapView();
    //alert("here");
    map.setLayoutProperty("incident_type/shot", 'visibility', 'visible');
}

function getCityWideAnalysisRadios2() {
    cleanMapView();
    //alert("here2");
    map.setLayoutProperty("incident_type/drug", 'visibility', 'visible');
    //alert("here3");
}