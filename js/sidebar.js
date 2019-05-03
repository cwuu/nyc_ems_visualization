//var id = "test";

//var link = document.createElement('a');
//link.href = '#';
//link.className = 'active';
//link.textContent = id;

<<<<<<< HEAD
var layers = document.getElementById('side-bar');
layers.appendChild(link);
=======
//var layers = document.getElementById('side-bar');
//layers.appendChild(link);

var divElement = document.getElementById('viz1556717272772');
var vizElement = divElement.getElementsByTagName('object')[0];
if ( divElement.offsetWidth > 800 ) {
    vizElement.style.width='600px';vizElement.style.height='717px';
}
else if ( divElement.offsetWidth > 500 ) {
    vizElement.style.width='600px';vizElement.style.height='717px';
}
else {
    vizElement.style.width='100%';vizElement.style.height='727px';
}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
>>>>>>> UI modification
