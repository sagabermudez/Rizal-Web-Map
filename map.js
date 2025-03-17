// Initialize Map 
var map = L.map('map').setView([8.909, 117.670], 11);

// Active base map reference
var activeBaseMap = null;

// Base Maps
var baseMaps = {
    "ESRI World Imagery": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="https://www.esri.com">Esri</a>',
        maxZoom: 20
    }).addTo(map),

    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap'
    })

    //"googleSatellite" : L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
       // subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
       // attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a>'
    
};

activeBaseMap = baseMaps["ESRI World Imagery"];

// Layer control
L.control.layers(baseMaps).addTo(map);

map.on('baselayerchange', (event) => {
    activeBaseMap = event.layer;

    if (activeBaseMap === baseMaps["OpenStreetMap"]) {
        document.getElementById('map').classList.add('osm-active');
    } else {
        document.getElementById('map').classList.remove('osm-active');
    }
});

// ================== VECTOR LAYERS ==================

// POLYGON
var mmplLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'mmpl-layer',
            });
        }
    });
fetch('data/MMPL.geojson')
    .then(response => response.json())
    .then(data => mmplLayer.addData(data));

// POINTS
var mrfLayer = L.geoJSON(null, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: L.divIcon({
                className: 'mrf-layer',
                html: '<div class="custom-icon"></div>',
                iconSize: [5, 5],
                iconAnchor: [7, 7]
            })
        });
    }
});

fetch('data/MRF Locations.geojson')
    .then(response => response.json())
    .then(data => mrfLayer.addData(data));
// POINTS

// LINES  
var roadLayer = L.geoJSON(null, {  
    onEachFeature: (feature, layer) => {  
        layer.setStyle({  
            className: 'road-layer' // Assign class for CSS  
        });  
    }  
});  
  
fetch('data/Road.geojson')  
    .then(response => response.json())  
    .then(data => roadLayer.addData(data));  
// LINES  

// LINES  
var riverLayer = L.geoJSON(null, {  
    onEachFeature: (feature, layer) => {  
        layer.setStyle({  
            className: 'river-layer' // Assign class for CSS  
        });  
    }  
});  
  
fetch('data/River.geojson')  
    .then(response => response.json())  
    .then(data => riverLayer.addData(data));  
// LINES 

// Bunog Layer 
var rizalLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'rizal-layer',
            });
        }
    });
fetch('data/Barangay/Rizal Boundary.geojson')
    .then(response => response.json())
    .then(data => rizalLayer.addData(data));

// Bunog Layer 
var bunogLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'bunog-layer',
            });
        }
    });
fetch('data/Barangay/Bunog.geojson')
    .then(response => response.json())
    .then(data => bunogLayer.addData(data));

// Iraan Layer 
var iraanLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'iraan-layer',
            });
        }
    });
fetch('data/Barangay/iraan.geojson')
    .then(response => response.json())
    .then(data => iraanLayer.addData(data));

// Punta Baja Layer 
var PuntaBajaLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'puntabaja-layer',
            });
        }
    });
fetch('data/Barangay/Punta Baja.geojson')
    .then(response => response.json())
    .then(data => PuntaBajaLayer.addData(data));
// UNTIL HERE

//  
var campongulayLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'campongulay-layer',
            });
        }
    });
fetch('data/Barangay/Campong Ulay.geojson')
    .then(response => response.json())
    .then(data => campongulayLayer.addData(data));
// UNTIL HERE

// 
var ransangLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'ransang-layer',
            });
        }
    });
fetch('data/Barangay/Ransang.geojson')
    .then(response => response.json())
    .then(data => ransangLayer.addData(data));
// UNTIL HERE

//  
var candawagaLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'candawaga-layer',
            });
        }
    });
fetch('data/Barangay/Candawaga.geojson')
    .then(response => response.json())
    .then(data => candawagaLayer.addData(data));
// UNTIL HERE

// Punta Baja Layer (COPY HERE) 
var culasianLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'culasian-layer',
            });
        }
    });
fetch('data/Barangay/Culasian.geojson')
    .then(response => response.json())
    .then(data => culasianLayer.addData(data));
// UNTIL HERE

// 
var panalingaanLayer= L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'panalingaan-layer',
            });
        }
    });
fetch('data/Barangay/Panalingaan.geojson')
    .then(response => response.json())
    .then(data => panalingaanLayer.addData(data));
// UNTIL HERE

//  
var taburiLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'taburi-layer',
            });
        }
    });
fetch('data/Barangay/Taburi.geojson')
    .then(response => response.json())
    .then(data => taburiLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var latudLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
                className: 'latud-layer',
            });
        }
    });

fetch('data/Barangay/Latud.geojson')
    .then(response => response.json())
    .then(data => latudLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var canipaanLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'canipaan-layer' // Assign class for CSS
        });
    }
});

fetch('data/Barangay/Canipaan.geojson')
    .then(response => response.json())
    .then(data => canipaanLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var forestlandLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'forestland-layer' // Assign class for CSS
        });
    }
});

fetch('data/Land Classification/Forestland.geojson')
    .then(response => response.json())
    .then(data => forestlandLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var UPFLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'UPF-layer' // Assign class for CSS
        });
    }
});

fetch('data/Land Classification/UPF.geojson')
    .then(response => response.json())
    .then(data => UPFLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var AlienableandDisposableLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'AlienableandDisposable-layer' // Assign class for CSS
        });
    }
});

fetch('data/Land Classification/Alienable and Disposable.geojson')
    .then(response => response.json())
    .then(data => AlienableandDisposableLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var AssumedFLLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'AssumedFL-layer' // Assign class for CSS
        });
    }
});

fetch('data/Land Classification/AssumedFL.geojson')
    .then(response => response.json())
    .then(data => AssumedFLLayer.addData(data));
// UNTIL HERE

// ECAN ZONATION 

// (COPY HERE) 
var CUZLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'CUZ-layer' // Assign class for CSS
        });
    }
});

fetch('data/ECAN Zonation/Controlled Use Zone.geojson')
    .then(response => response.json())
    .then(data => CUZLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var CZLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'CZ-layer' // Assign class for CSS
        });
    }
});

fetch('data/ECAN Zonation/Core Zone.geojson')
    .then(response => response.json())
    .then(data => CZLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var MUZLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'MUZ-layer' // Assign class for CSS
        });
    }
});

fetch('data/ECAN Zonation/Multiple Use Zone.geojson')
    .then(response => response.json())
    .then(data => MUZLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var RUZLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'RUZ-layer' // Assign class for CSS
        });
    }
});

fetch('data/ECAN Zonation/Restricted Use Zone.geojson')
    .then(response => response.json())
    .then(data => RUZLayer.addData(data));
// UNTIL HERE

// (COPY HERE) 
var TUZLayer = L.geoJSON(null, {
    onEachFeature: (feature, layer) => {
        layer.setStyle({
            className: 'TUZ-layer' // Assign class for CSS
        });
    }
});

fetch('data/ECAN Zonation/Traditional Use Zone.geojson')
    .then(response => response.json())
    .then(data => TUZLayer.addData(data));
// UNTIL HERE

// ================== GROUPED OVERLAYS ==================
var groupedOverlays = {
    "Boundary": {
        "Municipality of Rizal" : rizalLayer,
        "Bunog": bunogLayer,
        "Iraan": iraanLayer,
        "Punta Baja": PuntaBajaLayer,
        "Campong Ulay": campongulayLayer,
        "Ransang": ransangLayer,
        "Candawaga": candawagaLayer,
        "Culasian": culasianLayer,
        "Panalingaan": panalingaanLayer,
        "Taburi": taburiLayer,
        "Latud": latudLayer,
        "Canipaan": canipaanLayer,
    },

    "ECAN Zonation": {
        "Restricted Use Zone": RUZLayer,
        "Multiple Use Zone": MUZLayer,
        "Core Zone": CZLayer,
        "Controlled Use Zone": CUZLayer,
        "Traditional Use Zone": TUZLayer
    },
    
    "Land Classification": {
        "Forestland": forestlandLayer,
        "Alienable and Disposable": AlienableandDisposableLayer,
        "Assumed Forestland": AssumedFLLayer,
        "Unclassified Public Forest": UPFLayer
    },

    "Protected Areas": {
        "Mt. Mantalingahan Protected Landscape": mmplLayer
    },

    "Other Features": {
        "River" : riverLayer,
        "Road" : roadLayer
    }
};

// ================== LAYER CONTROL IN SIDEBAR ==================
const layerControlContainer = document.getElementById('layer-control');

Object.keys(baseMaps).forEach(mapName => {
    const button = document.createElement('button');
    button.textContent = mapName;
    button.classList.add('layer-toggle', 'base-map-toggle'); 
    button.setAttribute('data-type', 'base');

    if (baseMaps[mapName] === activeBaseMap) button.classList.add('active');

    button.onclick = () => {
        if (activeBaseMap) map.removeLayer(activeBaseMap);
        activeBaseMap = baseMaps[mapName];
        activeBaseMap.addTo(map);
        highlightActiveBaseButton(button);
    };

    layerControlContainer.appendChild(button);
});

map.on('baselayerchange', (event) => {
    activeBaseMap = event.layer;
    document.getElementById('map').classList.remove('osm-active');
    if (activeBaseMap === baseMaps["OpenStreetMap"]) {
        document.getElementById('map').classList.add('osm-active');
    }
});

Object.keys(groupedOverlays).forEach(category => {
    const categoryTitle = document.createElement('h4');
    categoryTitle.textContent = category;
    categoryTitle.classList.add('category-title');
  
    const icon = document.createElement('span');
    icon.classList.add('toggle-icon');
    icon.innerHTML = '+ '; 
    categoryTitle.prepend(icon);

    const layerContainer = document.createElement('div');
    layerContainer.classList.add('layer-container', 'hidden'); 

    Object.keys(groupedOverlays[category]).forEach(layerName => {
        const button = document.createElement('button');
        button.textContent = layerName;
        button.classList.add('layer-toggle');

        button.onclick = () => {
            const layer = groupedOverlays[category][layerName];
            if (map.hasLayer(layer)) {
                map.removeLayer(layer);
                button.classList.remove('active');
            } else {
                map.addLayer(layer);
                button.classList.add('active');
            }
        };

        layerContainer.appendChild(button);
    });

    // Toggle visibility and update icon on click
    categoryTitle.addEventListener('click', () => {
        layerContainer.classList.toggle('hidden');
        icon.innerHTML = layerContainer.classList.contains('hidden') ? '+ ' : '- ';
    });

    layerControlContainer.appendChild(categoryTitle);
    layerControlContainer.appendChild(layerContainer);
});


// Highlight Active Base Layer
function highlightActiveBaseButton(activeButton) {
    document.querySelectorAll('#layer-control button[data-type="base"]').forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// ================== COORDINATES DISPLAY ==================
var coordinates = L.control({ position: 'bottomleft' });
coordinates.onAdd = () => {
    var div = L.DomUtil.create('div', 'info');
    div.id = 'coordinates';
    div.innerHTML = 'Coordinates: -';
    return div;
};
coordinates.addTo(map);

map.on('mousemove', e => {
    document.getElementById('coordinates').innerHTML = 
        `Coordinates: ${e.latlng.lat.toFixed(6)}, ${e.latlng.lng.toFixed(6)}`;
});

// ================== TOGGLE SIDEBAR ==================
document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

// Disable map interactions in sidebar
const sidebar = document.getElementById('sidebar');
L.DomEvent.disableClickPropagation(sidebar);
L.DomEvent.disableScrollPropagation(sidebar);


function toggleDisclaimer(event) {
    event.preventDefault(); 
    const disclaimer = document.getElementById('disclaimer-container');
    if (disclaimer.style.display === 'none' || disclaimer.style.display === '') {
        disclaimer.style.display = 'block';
    } else {
        disclaimer.style.display = 'none';
    }
}
