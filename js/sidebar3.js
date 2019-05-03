var divElement = document.getElementById('viz1556805909264');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='800px';vizElement.style.height='827px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);