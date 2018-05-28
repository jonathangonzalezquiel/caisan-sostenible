var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Mapa_Base_0 = new ol.format.GeoJSON();
var features_Mapa_Base_0 = format_Mapa_Base_0.readFeatures(json_Mapa_Base_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapa_Base_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mapa_Base_0.addFeatures(features_Mapa_Base_0);var lyr_Mapa_Base_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mapa_Base_0, 
                style: style_Mapa_Base_0,
                title: '<img src="styles/legend/Mapa_Base_0.png" /> Mapa_Base'
            });

lyr_Mapa_Base_0.setVisible(true);
var layersList = [baseLayer,lyr_Mapa_Base_0];
lyr_Mapa_Base_0.set('fieldAliases', {'PANAMA': 'PANAMA', });
lyr_Mapa_Base_0.set('fieldImages', {'PANAMA': 'TextEdit', });
lyr_Mapa_Base_0.set('fieldLabels', {'PANAMA': 'no label', });
lyr_Mapa_Base_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});