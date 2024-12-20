{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // 1. Initialiser la carte\
var map = L.map('map').setView([46.603354, 1.888334], 6); // Centr\'e9 sur la France\
\
// Ajouter une couche OpenStreetMap\
L.tileLayer('https://\{s\}.tile.openstreetmap.org/\{z\}/\{x\}/\{y\}.png', \{\
    maxZoom: 18,\
    attribution: '&copy; OpenStreetMap contributors'\
\}).addTo(map);\
\
// 2. Charger les r\'e9gions depuis le fichier GeoJSON\
fetch('regions.geojson') // Charger le fichier local\
    .then(response => response.json())\
    .then(data => \{\
        L.geoJSON(data, \{\
            onEachFeature: function (feature, layer) \{\
                // Ajouter un popup avec le nom de la r\'e9gion\
                layer.bindPopup("R\'e9gion : " + feature.properties.nom);\
                layer.on('click', function () \{\
                    alert("Vous avez s\'e9lectionn\'e9 : " + feature.properties.nom);\
                \});\
            \}\
        \}).addTo(map);\
    \});\
\
// 3. Ajouter une fonctionnalit\'e9 pour calculer une zone isochrone\
function calculerIsochrone(lat, lon, temps) \{\
    const apiKey = "5b3ce3597851110001cf62484800ff269fe242d8a4988be3895ad808"; // Remplace avec ta cl\'e9 OpenRouteService\
    const url = "https://api.openrouteservice.org/v2/isochrones/driving-car";\
\
    const body = \{\
        locations: [[lon, lat]], // Position de d\'e9part\
        range: [temps] // Temps en secondes (ex: 3600 pour 1 heure)\
    \};\
\
    fetch(url, \{\
        method: "POST",\
        headers: \{\
            "Authorization": apiKey,\
            "Content-Type": "application/json"\
        \},\
        body: JSON.stringify(body)\
    \})\
    .then(response => response.json())\
    .then(data => \{\
        // Ajouter la zone isochrone sur la carte\
        L.geoJSON(data).addTo(map);\
        alert("Zone isochrone ajout\'e9e !");\
    \})\
    .catch(error => console.error("Erreur API :", error));\
\}\
\
// Exemple : Calculer une zone \'e0 1 heure autour de Paris (latitude, longitude)\
calculerIsochrone(48.8566, 2.3522, 3600); // Paris \'e0 1 heure de voiture\
}
