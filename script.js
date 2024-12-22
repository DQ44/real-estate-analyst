var map = L.map('map').setView([46.603354, 1.888334], 6); // Centre de la France

// Ajouter une couche OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Fonction pour charger et styliser les données GeoJSON
function loadGeoJSON(url, style, layerName) {
    var layer = new L.GeoJSON.AJAX(url, {
        style: style
    });
    layer.addTo(map);
    layer.on('click', function (e) {
        alert(layerName + ': ' + e.layer.feature.properties.nom); // Affiche le nom sur clic
    });
    return layer;
}

// Style par défaut
var defaultStyle = {
    color: "#3388ff",
    weight: 1,
    opacity: 0.65
};

// Charger les données GeoJSON
loadGeoJSON("https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions.geojson", defaultStyle, "Région");
loadGeoJSON("https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson", defaultStyle, "Département");
loadGeoJSON("https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/communes.geojson", defaultStyle, "Commune");
loadGeoJSON("https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/arrondissements.geojson", defaultStyle, "Arrondissement");
