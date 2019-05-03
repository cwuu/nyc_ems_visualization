mapboxgl.accessToken = 'pk.eyJ1IjoiYnByaW50eiIsImEiOiJjanNwdGc0aG4xMTl4NDNteDRhNWhkNGlsIn0.yLDYI6nTeNudImzuG5JUfw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 11,
    center: [-73.9654, 40.7829]
});

/*{
    "type": "Feature",
    "properties": {
        "Shape_Area": 20163283.874400001,
        "Shape_Leng": 20624.692316500001,
        "PO_NAME": "Jackson Heights",
        "CTY_FIPS": "081",
        "ST_FIPS": "36",
        "postalCode": "11372",
        "@id": "http:\/\/nyc.pediacities.com\/Resource\/PostalCode\/11372",
        "borough": "Queens",
        "ranking_value": 5.322357723658535,
        "BLDGpostalCode": 0.0,
        "STATE": "NY",
        "OBJECTID": 1.0
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [ [ [ -73.869424572841737, 40.749156870967873 ], [ -73.895071432408557, 40.74646547081214 ], [ -73.896187378678192, 40.748509425180863 ], [ -73.895839541851387, 40.748546875706005 ], [ -73.895252427743955, 40.748306609450232 ], [ -73.896540410855593, 40.750541998143575 ], [ -73.895798686138278, 40.750619721332605 ], [ -73.89652230661433, 40.754388796109019 ], [ -73.87221855882477, 40.756943248067465 ], [ -73.87167992356791, 40.753987174396023 ], [ -73.87207046513889, 40.753862007052042 ], [ -73.869424572841737, 40.749156870967873 ] ] ]
    }},*/

map.on('load', function () {
    map.addLayer({
        'id': 'test1',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/nyczips.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': '#881e00',
            'fill-opacity': 0.75

        }
    });

    //=============================================================================
    // Response Time Analysis
    //=============================================================================
    //
    //  data/year_rpt
    //
    map.addLayer({
        'id': 'year_rpt/2013',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/year_rpt/2013.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                7.054, 'rgba(0,136,104,0.5)',
                7.248, 'rgba(251,174,35,0.5)',
                7.296, 'rgba(92,149,73,0.5)',
                7.423, 'rgba(203,195,50,0.5)',
                7.67, 'rgba(196,49,36,0.5)',


            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'year_rpt/2014',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/year_rpt/2014.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                7.0509, 'rgba(0,136,104,0.49956053303)',
                8.295, 'rgba(92,149,73,0.6369243421)',
                8.464, 'rgba(251,174,35,0.66777041942)',
                8.629, 'rgba(203,195,50,0.66246800485)',
                10.528, 'rgba(196,49,36,0.87262059973)',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'year_rpt/2015',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/year_rpt/2015.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                7.339, 'rgba(0,136,104,0.54040260844)',
                8.345, 'rgba(92,149,73,0.78083881578)',
                8.413, 'rgba(251,174,35,0.66073399558)',
                9.863, 'rgba(203,195,50,0.82870806951)',
                10.675, 'rgba(196,49,36,0.89178617992)',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'year_rpt/2016',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/year_rpt/2016.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                7.006, 'rgba(0,136,104,0.49319535015)',
                7.717, 'rgba(92,149,73,0.55770285087)',
                8.478, 'rgba(251,174,35,0.66970198675)',
                8.786, 'rgba(196,49,36,0.64550195567)',
                9.335, 'rgba(203,195,50,0.75757779873)',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'year_rpt/2017',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/year_rpt/2017.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                6.378, 'rgba(0,136,104,0.40416784802)',
                7.189, 'rgba(92,149,73,0.48533442982)',
                8.289, 'rgba(251,174,35,0.64362582781)',
                8.608, 'rgba(196,49,36,0.62229465449)',
                9.13, 'rgba(203,195,50,0.72996093223)',

            ],
            'fill-opacity': 0.5
        }
    });

    //
    //  data/severity_rpt
    //  "severity_rpt/sev1", "severity_rpt/sev2", "severity_rpt/sev3", "severity_rpt/sev4", "severity_rpt/sev5", "severity_rpt/sev6", "severity_rpt/sev7"

    map.addLayer({
        'id': 'severity_rpt/sev1',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/severity_rpt/sev1_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'severity_rpt/sev2',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/severity_rpt/sev2_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'severity_rpt/sev3',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/severity_rpt/sev3_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'severity_rpt/sev4',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/severity_rpt/sev4_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'severity_rpt/sev5',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/severity_rpt/sev5_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'severity_rpt/sev6',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/severity_rpt/sev6_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'severity_rpt/sev7',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/severity_rpt/sev7_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    //
    //  data/temp_rpt
    // "temp_rpt/temp0", "temp_rpt/temp1"
    map.addLayer({
        'id': 'temp_rpt/temp0',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/temp_rpt/temp0.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                6, '#5d9fcf',
                7, '#d8d7ca',
                8, '#f3a233',
                9, '#eb6033',
                10, '#b23f24',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'temp_rpt/temp1',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/temp_rpt/temp1.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                6, '#5d9fcf',
                7, '#d8d7ca',
                8, '#f3a233',
                9, '#eb6033',
                10, '#b23f24',
            ],
            'fill-opacity': 0.5
        }
    });


    //
    //  data/daynight_rpt
    //  'daynight_rpt/sunup', 'daynight_rpt/sundown'
    map.addLayer({
        'id': 'daynight_rpt/sunup',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/daynight_rpt/sunup_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'daynight_rpt/sundown',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/daynight_rpt/sundown_zip.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'average_response'],
                1, '#4b9d85',
                200, '#5b9f6a',
                400, '#92b34b',
                600, '#f1c331',
                800, '#f29f3b',
                1000, '#cf664a',
            ],
            'fill-opacity': 0.5
        }
    });

    //
    //  data/weather_rpt
    //  "weather_rpt/sunny", "weather_rpt/rainy"
    map.addLayer({
        'id': 'weather_rpt/sunny',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/weather_rpt/sunny.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                7, '#d0c727',
                10, '#81806e',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'weather_rpt/rainy',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/weather_rpt/rainy.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                7, '#d0c727',
                10, '#81806e',
            ],
            'fill-opacity': 0.5
        }
    });

    //=============================================================================
    // Incident Analysis
    //=============================================================================

    //
    //  data/location
    // "location/BROOKLYN", "location/BRONX", "location/QUEENS", "location/RICHMOND-STATEN-ISLAND", "location/MANHATTAN"
    map.addLayer({
        'id': 'location/BROOKLYN',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/location/BROOKLYN.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'location/BRONX',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/location/BRONX.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'location/QUEENS',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/location/QUEENS.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'location/RICHMOND-STATEN-ISLAND',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/location/RICHMOND-STATEN-ISLAND.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'location/MANHATTAN',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/location/MANHATTAN.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });


    //
    // data/incident
    // "incident/ABDPN", "incident/CARD", "incident/DIFFBR", "incident/DRUG", "incident/EDP", "incident/INJURY", "incident/SICK", "incident/UNC", "incident/UNKNOW"
    map.addLayer({
        'id': 'incident/ABDPN',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/ABDPN.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'incident/CARD',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/CARD.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'incident/DIFFBR',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/DIFFBR.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'incident/DRUG',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/DRUG.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'incident/EDP',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/EDP.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'incident/INJURY',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/INJURY.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'incident/SICK',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/SICK.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'incident/UNC',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/UNC.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'incident/UNKNOW',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/incident/UNKNOW.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    //
    // data/date
    // "date/01-01-2013", "date/01-01-2014", "date/01-01-2015", "date/01-01-2016", "date/01-01-2017", "date/03-27-2016", "date/03-31-2013", "date/04-05-2015", "date/04-16-2017", "date/04-20-2014", "date/07-04-2013", "date/07-04-2014", "date/07-04-2015", "date/07-04-2016", "date/07-04-2017", "date/11-23-2017", "date/11-24-2016", "date/11-26-2015", "date/11-27-2014", "date/11-28-2013", "date/12-24-2013", "date/12-24-2014", "date/12-24-2015", "date/12-24-2016", "date/12-24-2017"
    map.addLayer({
        'id': 'date/01-01-2013',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/01-01-2013.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/01-01-2014',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/01-01-2014.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/01-01-2015',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/01-01-2015.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/01-01-2016',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/01-01-2016.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/01-01-2017',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/01-01-2017.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/03-27-2016',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/03-27-2016.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/03-31-2013',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/03-31-2013.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/04-05-2015',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/04-05-2015.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/04-16-2017',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/04-16-2017.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/04-20-2014',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/04-20-2014.geojson'
        },"layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/07-04-2013',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/07-04-2013.geojson'
        },"layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/07-04-2014',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/07-04-2014.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/07-04-2015',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/07-04-2015.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/07-04-2016',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/07-04-2016.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/07-04-2017',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/07-04-2017.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/11-23-2017',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/11-23-2017.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/11-24-2016',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/11-24-2016.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/11-26-2015',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/11-26-2015.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/11-27-2014',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/11-27-2014.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/11-28-2013',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/11-28-2013.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/12-24-2013',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/12-24-2013.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/12-24-2014',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/12-24-2014.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/12-24-2015',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/12-24-2015.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/12-24-2016',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/12-24-2016.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });

    map.addLayer({
        'id': 'date/12-24-2017',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/date/12-24-2017.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 25,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using a match expression
            // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'FINAL_CALL_TYPE'],
                'ASTHMB', '#ec7890',
                'MVAINJ', '#d9d324',
                'RESPIR', '#31af0d',
                'UNKNOW', '#c2391b',
                'CARD', '#3326a9',
                'ABDPN', '#c68b45',
                'UNC', '#776e72',
                'DRUG', '#c96bea',
                'EDP', '#ebb8f1',
                'DIFFBR', '#134b69',
                'INJURY', '#2f2368',
                'SICK', '#a24ffe',
                /* other */ '#ccc'
            ]
        }
    });


    //=============================================================================
    // City-Wide Analysis
    //=============================================================================

    //
    // data/incident_type
    // "incident_type/drug", "incident_type/shot"
    map.addLayer({
        'id': 'incident_type/drug',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/incident_type/drug.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                30, '#C8C8C8',
                60, '#A8A8A8',
                90, '#888888',
                110, '#707070',
                140, '#585858',
                170, '#383838',
                200, '#181818',
                230, '#000000',
            ],
            'fill-opacity': 0.5
        }
    });

    map.addLayer({
        'id': 'incident_type/shot',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/incident_type/shot.geojson'
        },
        "layout": {
            "visibility": "none"
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'ranking_value'],
                0, '#5d9fcf',
                2, '#d8d7ca',
                4, '#f3a233',
                6, '#eb6033',
                8, '#b23f24',
            ],
            'fill-opacity': 0.5
        }
    });


    // map.addLayer({
    //     id: 'city_wide_analysis-heat',
    //     type: 'heatmap',
    //     source: 'City-Wide Analysis',
    //     paint: {
    //         'heatmap-radius': 40,
    //         'heatmap-color': [
    //             'interpolate',
    //             ['linear'],
    //             ['heatmap-density'],
    //             0, 'rgba(0,62,153,0)',
    //             0.2, 'rgba(38,107,153,0.13)',
    //             0.4, 'rgba(38,107,153,0.43)',
    //             0.6, 'rgba(207,132,40,0.63)',
    //             0.8, 'rgb(153,53,66)'
    //         ],
    //         "heatmap-weight": {
    //             "type": "identity",
    //             "property": "point_count"
    //         },
    //         'heatmap-intensity': 0.1
    //     }
    // });

    // map.addLayer({
    //     id: 'city_wide_analysis-heat',
    //     type: 'heatmap',
    //     source: 'City-Wide Analysis',
    //     maxzoom: 20,
    //     paint: {
    //         // increase weight as diameter breast height increases
    //         'heatmap-weight': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [1, 0],
    //                 [10, 1]
    //             ]
    //         },
    //         // increase intensity as zoom level increases
    //         // 'heatmap-intensity': {
    //         //     stops: [
    //         //         [11, 1],
    //         //         [15, 3]
    //         //     ]
    //         // },
    //         // assign color values be applied to points depending on their density
    //         'heatmap-color': [
    //             'interpolate',
    //             ['linear'],
    //             ['heatmap-density'],
    //             0, 'rgba(236,222,239,0)',
    //             0.2, 'rgba(153,13,11,0.16)',
    //             0.4, 'rgba(153,13,11,0.43)',
    //             0.6, 'rgba(153,13,11,0.63)',
    //             0.8, 'rgb(153,0,40)'
    //         ],
    //         // increase radius as zoom increases
    //         'heatmap-radius': {
    //             stops: [
    //                 [11, 15],
    //                 [15, 20]
    //             ]
    //         },
    //         // decrease opacity to transition into the circle layer
    //         'heatmap-opacity': {
    //             default: 1,
    //             stops: [
    //                 [14, 1],
    //                 [15, 0]
    //             ]
    //         },
    //     }
    // }, 'waterway-label');

    // map.addLayer({
    //     id: 'city_wide_analysis-point',
    //     type: 'circle',
    //     source: 'City-Wide Analysis',
    //     minzoom: 14,
    //     paint: {
    //         // increase the radius of the circle as the zoom level and dbh value increases
    //         'circle-radius': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [{ zoom: 15, value: 1 }, 5],
    //                 [{ zoom: 15, value: 10 }, 10],
    //                 [{ zoom: 22, value: 1 }, 20],
    //                 [{ zoom: 22, value: 10 }, 50],
    //             ]
    //         },
    //         'circle-color': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [0, 'rgba(236,222,239,0)'],
    //                 [2, 'rgb(236,222,239)'],
    //                 [4, 'rgb(208,209,230)'],
    //                 [6, 'rgb(166,189,219)'],
    //                 [8, 'rgb(103,169,207)'],
    //                 [9, 'rgb(28,144,153)'],
    //                 [10, 'rgb(1,108,89)']
    //             ]
    //         },
    //         'circle-stroke-color': 'white',
    //         'circle-stroke-width': 1,
    //         'circle-opacity': {
    //             stops: [
    //                 [14, 0],
    //                 [15, 1]
    //             ]
    //         }
    //     }
    // }, 'waterway-label');
    //
    //
    //
    // map.addSource('CIncident Analysis', {
    //     type: 'geojson',
    //     data: 'data/ems.geojson'
    // });
    //
    // map.addLayer({
    //     id: 'incident-analysis-heat',
    //     type: 'heatmap',
    //     source: 'Incident Analysis',
    //     maxzoom: 15,
    //     paint: {
    //         // increase weight as diameter breast height increases
    //         'heatmap-weight': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [1, 0],
    //                 [10, 1]
    //             ]
    //         },
    //         // increase intensity as zoom level increases
    //         'heatmap-intensity': {
    //             stops: [
    //                 [11, 1],
    //                 [15, 3]
    //             ]
    //         },
    //         // assign color values be applied to points depending on their density
    //         'heatmap-color': [
    //             'interpolate',
    //             ['linear'],
    //             ['heatmap-density'],
    //             0, 'rgba(236,222,239,0)',
    //             0.2, 'rgba(0,62,153,0.16)',
    //             0.4, 'rgba(0,62,153,0.43)',
    //             0.6, 'rgba(0,62,153,0.63)',
    //             0.8, 'rgb(0,62,153)'
    //         ],
    //         // increase radius as zoom increases
    //         'heatmap-radius': {
    //             stops: [
    //                 [11, 15],
    //                 [15, 20]
    //             ]
    //         },
    //         // decrease opacity to transition into the circle layer
    //         'heatmap-opacity': {
    //             default: 1,
    //             stops: [
    //                 [14, 1],
    //                 [15, 0]
    //             ]
    //         },
    //     }
    // }, 'waterway-label');
    //
    // map.addLayer({
    //     id: 'incident-analysis-point',
    //     type: 'circle',
    //     source: 'Incident Analysis',
    //     minzoom: 14,
    //     paint: {
    //         // increase the radius of the circle as the zoom level and dbh value increases
    //         'circle-radius': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [{ zoom: 15, value: 1 }, 5],
    //                 [{ zoom: 15, value: 10 }, 10],
    //                 [{ zoom: 22, value: 1 }, 20],
    //                 [{ zoom: 22, value: 10 }, 50],
    //             ]
    //         },
    //         'circle-color': {
    //             property: 'FINAL_SEVERITY_LEVEL_CODE',
    //             type: 'exponential',
    //             stops: [
    //                 [0, 'rgba(236,222,239,0)'],
    //                 [2, 'rgb(236,222,239)'],
    //                 [4, 'rgb(208,209,230)'],
    //                 [6, 'rgb(166,189,219)'],
    //                 [8, 'rgb(103,169,207)'],
    //                 [9, 'rgb(28,144,153)'],
    //                 [10, 'rgb(1,108,89)']
    //             ]
    //         },
    //         'circle-stroke-color': 'white',
    //         'circle-stroke-width': 1,
    //         'circle-opacity': {
    //             stops: [
    //                 [14, 0],
    //                 [15, 1]
    //             ]
    //         }
    //     }
    // }, 'waterway-label');
});