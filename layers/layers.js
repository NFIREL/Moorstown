var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TipperaryBorder_2 = new ol.format.GeoJSON();
var features_TipperaryBorder_2 = format_TipperaryBorder_2.readFeatures(json_TipperaryBorder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipperaryBorder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipperaryBorder_2.addFeatures(features_TipperaryBorder_2);
var lyr_TipperaryBorder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipperaryBorder_2, 
                style: style_TipperaryBorder_2,
                popuplayertitle: "Tipperary Border",
                interactive: true,
                title: '<img src="styles/legend/TipperaryBorder_2.png" /> Tipperary Border'
            });
var format_1750mSiteBuffer10xRD_3 = new ol.format.GeoJSON();
var features_1750mSiteBuffer10xRD_3 = format_1750mSiteBuffer10xRD_3.readFeatures(json_1750mSiteBuffer10xRD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1750mSiteBuffer10xRD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1750mSiteBuffer10xRD_3.addFeatures(features_1750mSiteBuffer10xRD_3);
var lyr_1750mSiteBuffer10xRD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1750mSiteBuffer10xRD_3, 
                style: style_1750mSiteBuffer10xRD_3,
                popuplayertitle: "1750m Site Buffer (10x RD)",
                interactive: true,
                title: '<img src="styles/legend/1750mSiteBuffer10xRD_3.png" /> 1750m Site Buffer (10x RD)'
            });
var format_TurbineDistancestoEachother_4 = new ol.format.GeoJSON();
var features_TurbineDistancestoEachother_4 = format_TurbineDistancestoEachother_4.readFeatures(json_TurbineDistancestoEachother_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TurbineDistancestoEachother_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TurbineDistancestoEachother_4.addFeatures(features_TurbineDistancestoEachother_4);
var lyr_TurbineDistancestoEachother_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TurbineDistancestoEachother_4, 
                style: style_TurbineDistancestoEachother_4,
                popuplayertitle: "Turbine Distances to Eachother",
                interactive: true,
                title: '<img src="styles/legend/TurbineDistancestoEachother_4.png" /> Turbine Distances to Eachother'
            });
var format_TurbineDistancestoOtherFeatures_5 = new ol.format.GeoJSON();
var features_TurbineDistancestoOtherFeatures_5 = format_TurbineDistancestoOtherFeatures_5.readFeatures(json_TurbineDistancestoOtherFeatures_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TurbineDistancestoOtherFeatures_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TurbineDistancestoOtherFeatures_5.addFeatures(features_TurbineDistancestoOtherFeatures_5);
var lyr_TurbineDistancestoOtherFeatures_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TurbineDistancestoOtherFeatures_5, 
                style: style_TurbineDistancestoOtherFeatures_5,
                popuplayertitle: "Turbine Distances to Other Features",
                interactive: true,
    title: 'Turbine Distances to Other Features<br />\
    <img src="styles/legend/TurbineDistancestoOtherFeatures_5_0.png" /> Archaeology<br />\
    <img src="styles/legend/TurbineDistancestoOtherFeatures_5_1.png" /> Eircode<br />\
    <img src="styles/legend/TurbineDistancestoOtherFeatures_5_2.png" /> Natural Area<br />\
    <img src="styles/legend/TurbineDistancestoOtherFeatures_5_3.png" /> Powerline<br />\
    <img src="styles/legend/TurbineDistancestoOtherFeatures_5_4.png" /> Powerpole<br />\
    <img src="styles/legend/TurbineDistancestoOtherFeatures_5_5.png" /> River<br />\
    <img src="styles/legend/TurbineDistancestoOtherFeatures_5_6.png" /> Road<br />\
    <img src="styles/legend/TurbineDistancestoOtherFeatures_5_7.png" /> Substation<br />'
        });
var format_1TTY5081LouisRonan_6 = new ol.format.GeoJSON();
var features_1TTY5081LouisRonan_6 = format_1TTY5081LouisRonan_6.readFeatures(json_1TTY5081LouisRonan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1TTY5081LouisRonan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1TTY5081LouisRonan_6.addFeatures(features_1TTY5081LouisRonan_6);
var lyr_1TTY5081LouisRonan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1TTY5081LouisRonan_6, 
                style: style_1TTY5081LouisRonan_6,
                popuplayertitle: "1T TY5081 Louis Ronan",
                interactive: true,
                title: '<img src="styles/legend/1TTY5081LouisRonan_6.png" /> 1T TY5081 Louis Ronan'
            });
var format_1STY58758FJaneRonan_7 = new ol.format.GeoJSON();
var features_1STY58758FJaneRonan_7 = format_1STY58758FJaneRonan_7.readFeatures(json_1STY58758FJaneRonan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1STY58758FJaneRonan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1STY58758FJaneRonan_7.addFeatures(features_1STY58758FJaneRonan_7);
var lyr_1STY58758FJaneRonan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1STY58758FJaneRonan_7, 
                style: style_1STY58758FJaneRonan_7,
                popuplayertitle: "1S TY58758F Jane Ronan",
                interactive: true,
                title: '<img src="styles/legend/1STY58758FJaneRonan_7.png" /> 1S TY58758F Jane Ronan'
            });
var format_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8 = new ol.format.GeoJSON();
var features_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8 = format_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8.readFeatures(json_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8.addFeatures(features_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8);
var lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8, 
                style: style_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8,
                popuplayertitle: "1R TY38596F Deirdre Ronan, Jacqueline Ronan, John F. Ronan",
                interactive: true,
                title: '<img src="styles/legend/1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8.png" /> 1R TY38596F Deirdre Ronan, Jacqueline Ronan, John F. Ronan'
            });
var format_1QTY6133FJacquelineRonanDeirdreRonan_9 = new ol.format.GeoJSON();
var features_1QTY6133FJacquelineRonanDeirdreRonan_9 = format_1QTY6133FJacquelineRonanDeirdreRonan_9.readFeatures(json_1QTY6133FJacquelineRonanDeirdreRonan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1QTY6133FJacquelineRonanDeirdreRonan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1QTY6133FJacquelineRonanDeirdreRonan_9.addFeatures(features_1QTY6133FJacquelineRonanDeirdreRonan_9);
var lyr_1QTY6133FJacquelineRonanDeirdreRonan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1QTY6133FJacquelineRonanDeirdreRonan_9, 
                style: style_1QTY6133FJacquelineRonanDeirdreRonan_9,
                popuplayertitle: "1Q TY6133F Jacqueline Ronan, Deirdre Ronan",
                interactive: true,
                title: '<img src="styles/legend/1QTY6133FJacquelineRonanDeirdreRonan_9.png" /> 1Q TY6133F Jacqueline Ronan, Deirdre Ronan'
            });
var format_1PTY69134FLouisRonan_10 = new ol.format.GeoJSON();
var features_1PTY69134FLouisRonan_10 = format_1PTY69134FLouisRonan_10.readFeatures(json_1PTY69134FLouisRonan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1PTY69134FLouisRonan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1PTY69134FLouisRonan_10.addFeatures(features_1PTY69134FLouisRonan_10);
var lyr_1PTY69134FLouisRonan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1PTY69134FLouisRonan_10, 
                style: style_1PTY69134FLouisRonan_10,
                popuplayertitle: "1P TY69134F Louis Ronan",
                interactive: true,
                title: '<img src="styles/legend/1PTY69134FLouisRonan_10.png" /> 1P TY69134F Louis Ronan'
            });
var format_1OTY37566FLouisRonan_11 = new ol.format.GeoJSON();
var features_1OTY37566FLouisRonan_11 = format_1OTY37566FLouisRonan_11.readFeatures(json_1OTY37566FLouisRonan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1OTY37566FLouisRonan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1OTY37566FLouisRonan_11.addFeatures(features_1OTY37566FLouisRonan_11);
var lyr_1OTY37566FLouisRonan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1OTY37566FLouisRonan_11, 
                style: style_1OTY37566FLouisRonan_11,
                popuplayertitle: "1O TY37566F Louis Ronan",
                interactive: true,
                title: '<img src="styles/legend/1OTY37566FLouisRonan_11.png" /> 1O TY37566F Louis Ronan'
            });
var format_1NTY35720DavidMRonan_12 = new ol.format.GeoJSON();
var features_1NTY35720DavidMRonan_12 = format_1NTY35720DavidMRonan_12.readFeatures(json_1NTY35720DavidMRonan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1NTY35720DavidMRonan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1NTY35720DavidMRonan_12.addFeatures(features_1NTY35720DavidMRonan_12);
var lyr_1NTY35720DavidMRonan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1NTY35720DavidMRonan_12, 
                style: style_1NTY35720DavidMRonan_12,
                popuplayertitle: "1N TY35720 David M. Ronan",
                interactive: true,
                title: '<img src="styles/legend/1NTY35720DavidMRonan_12.png" /> 1N TY35720 David M. Ronan'
            });
var format_1MTY51973FJacquelineRonan_13 = new ol.format.GeoJSON();
var features_1MTY51973FJacquelineRonan_13 = format_1MTY51973FJacquelineRonan_13.readFeatures(json_1MTY51973FJacquelineRonan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1MTY51973FJacquelineRonan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1MTY51973FJacquelineRonan_13.addFeatures(features_1MTY51973FJacquelineRonan_13);
var lyr_1MTY51973FJacquelineRonan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1MTY51973FJacquelineRonan_13, 
                style: style_1MTY51973FJacquelineRonan_13,
                popuplayertitle: "1M TY51973F Jacqueline Ronan",
                interactive: true,
                title: '<img src="styles/legend/1MTY51973FJacquelineRonan_13.png" /> 1M TY51973F Jacqueline Ronan'
            });
var format_1LTY28062FGerardODonnell_14 = new ol.format.GeoJSON();
var features_1LTY28062FGerardODonnell_14 = format_1LTY28062FGerardODonnell_14.readFeatures(json_1LTY28062FGerardODonnell_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1LTY28062FGerardODonnell_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1LTY28062FGerardODonnell_14.addFeatures(features_1LTY28062FGerardODonnell_14);
var lyr_1LTY28062FGerardODonnell_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1LTY28062FGerardODonnell_14, 
                style: style_1LTY28062FGerardODonnell_14,
                popuplayertitle: "1L TY28062F Gerard O Donnell",
                interactive: true,
                title: '<img src="styles/legend/1LTY28062FGerardODonnell_14.png" /> 1L TY28062F Gerard O Donnell'
            });
var format_1KTY19477SeamusLyonsAccess_15 = new ol.format.GeoJSON();
var features_1KTY19477SeamusLyonsAccess_15 = format_1KTY19477SeamusLyonsAccess_15.readFeatures(json_1KTY19477SeamusLyonsAccess_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1KTY19477SeamusLyonsAccess_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1KTY19477SeamusLyonsAccess_15.addFeatures(features_1KTY19477SeamusLyonsAccess_15);
var lyr_1KTY19477SeamusLyonsAccess_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1KTY19477SeamusLyonsAccess_15, 
                style: style_1KTY19477SeamusLyonsAccess_15,
                popuplayertitle: "1K TY19477 Seamus Lyons (Access)",
                interactive: true,
                title: '<img src="styles/legend/1KTY19477SeamusLyonsAccess_15.png" /> 1K TY19477 Seamus Lyons (Access)'
            });
var format_1JTY5082LiamFrankQuirke_16 = new ol.format.GeoJSON();
var features_1JTY5082LiamFrankQuirke_16 = format_1JTY5082LiamFrankQuirke_16.readFeatures(json_1JTY5082LiamFrankQuirke_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1JTY5082LiamFrankQuirke_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1JTY5082LiamFrankQuirke_16.addFeatures(features_1JTY5082LiamFrankQuirke_16);
var lyr_1JTY5082LiamFrankQuirke_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1JTY5082LiamFrankQuirke_16, 
                style: style_1JTY5082LiamFrankQuirke_16,
                popuplayertitle: "1J TY5082 Liam Frank Quirke",
                interactive: true,
                title: '<img src="styles/legend/1JTY5082LiamFrankQuirke_16.png" /> 1J TY5082 Liam Frank Quirke'
            });
var format_1ITY17039PatrickMaher_17 = new ol.format.GeoJSON();
var features_1ITY17039PatrickMaher_17 = format_1ITY17039PatrickMaher_17.readFeatures(json_1ITY17039PatrickMaher_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ITY17039PatrickMaher_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ITY17039PatrickMaher_17.addFeatures(features_1ITY17039PatrickMaher_17);
var lyr_1ITY17039PatrickMaher_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ITY17039PatrickMaher_17, 
                style: style_1ITY17039PatrickMaher_17,
                popuplayertitle: "1I TY17039 Patrick Maher",
                interactive: true,
                title: '<img src="styles/legend/1ITY17039PatrickMaher_17.png" /> 1I TY17039 Patrick Maher'
            });
var format_1HTY5080LouisRonan_18 = new ol.format.GeoJSON();
var features_1HTY5080LouisRonan_18 = format_1HTY5080LouisRonan_18.readFeatures(json_1HTY5080LouisRonan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1HTY5080LouisRonan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1HTY5080LouisRonan_18.addFeatures(features_1HTY5080LouisRonan_18);
var lyr_1HTY5080LouisRonan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1HTY5080LouisRonan_18, 
                style: style_1HTY5080LouisRonan_18,
                popuplayertitle: "1H TY5080 Louis Ronan",
                interactive: true,
                title: '<img src="styles/legend/1HTY5080LouisRonan_18.png" /> 1H TY5080 Louis Ronan'
            });
var format_1GTY21547RobertWalsh_19 = new ol.format.GeoJSON();
var features_1GTY21547RobertWalsh_19 = format_1GTY21547RobertWalsh_19.readFeatures(json_1GTY21547RobertWalsh_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1GTY21547RobertWalsh_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1GTY21547RobertWalsh_19.addFeatures(features_1GTY21547RobertWalsh_19);
var lyr_1GTY21547RobertWalsh_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1GTY21547RobertWalsh_19, 
                style: style_1GTY21547RobertWalsh_19,
                popuplayertitle: "1G TY21547 Robert Walsh",
                interactive: true,
                title: '<img src="styles/legend/1GTY21547RobertWalsh_19.png" /> 1G TY21547 Robert Walsh'
            });
var format_1FTY11666PatrickWalshAileenWalsh_20 = new ol.format.GeoJSON();
var features_1FTY11666PatrickWalshAileenWalsh_20 = format_1FTY11666PatrickWalshAileenWalsh_20.readFeatures(json_1FTY11666PatrickWalshAileenWalsh_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1FTY11666PatrickWalshAileenWalsh_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1FTY11666PatrickWalshAileenWalsh_20.addFeatures(features_1FTY11666PatrickWalshAileenWalsh_20);
var lyr_1FTY11666PatrickWalshAileenWalsh_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1FTY11666PatrickWalshAileenWalsh_20, 
                style: style_1FTY11666PatrickWalshAileenWalsh_20,
                popuplayertitle: "1F TY11666 Patrick Walsh, Aileen Walsh",
                interactive: true,
                title: '<img src="styles/legend/1FTY11666PatrickWalshAileenWalsh_20.png" /> 1F TY11666 Patrick Walsh, Aileen Walsh'
            });
var format_1ETY21679AodhKennedy_21 = new ol.format.GeoJSON();
var features_1ETY21679AodhKennedy_21 = format_1ETY21679AodhKennedy_21.readFeatures(json_1ETY21679AodhKennedy_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ETY21679AodhKennedy_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ETY21679AodhKennedy_21.addFeatures(features_1ETY21679AodhKennedy_21);
var lyr_1ETY21679AodhKennedy_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ETY21679AodhKennedy_21, 
                style: style_1ETY21679AodhKennedy_21,
                popuplayertitle: "1E TY21679 Aodh Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1ETY21679AodhKennedy_21.png" /> 1E TY21679 Aodh Kennedy'
            });
var format_1DTY5512AodhKennedy_22 = new ol.format.GeoJSON();
var features_1DTY5512AodhKennedy_22 = format_1DTY5512AodhKennedy_22.readFeatures(json_1DTY5512AodhKennedy_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1DTY5512AodhKennedy_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1DTY5512AodhKennedy_22.addFeatures(features_1DTY5512AodhKennedy_22);
var lyr_1DTY5512AodhKennedy_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1DTY5512AodhKennedy_22, 
                style: style_1DTY5512AodhKennedy_22,
                popuplayertitle: "1D TY5512 Aodh Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1DTY5512AodhKennedy_22.png" /> 1D TY5512 Aodh Kennedy'
            });
var format_1CTY5514AodhKennedy_23 = new ol.format.GeoJSON();
var features_1CTY5514AodhKennedy_23 = format_1CTY5514AodhKennedy_23.readFeatures(json_1CTY5514AodhKennedy_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1CTY5514AodhKennedy_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1CTY5514AodhKennedy_23.addFeatures(features_1CTY5514AodhKennedy_23);
var lyr_1CTY5514AodhKennedy_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1CTY5514AodhKennedy_23, 
                style: style_1CTY5514AodhKennedy_23,
                popuplayertitle: "1C TY5514 Aodh Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1CTY5514AodhKennedy_23.png" /> 1C TY5514 Aodh Kennedy'
            });
var format_1BTY39291FElizabethKennedy_24 = new ol.format.GeoJSON();
var features_1BTY39291FElizabethKennedy_24 = format_1BTY39291FElizabethKennedy_24.readFeatures(json_1BTY39291FElizabethKennedy_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1BTY39291FElizabethKennedy_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1BTY39291FElizabethKennedy_24.addFeatures(features_1BTY39291FElizabethKennedy_24);
var lyr_1BTY39291FElizabethKennedy_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1BTY39291FElizabethKennedy_24, 
                style: style_1BTY39291FElizabethKennedy_24,
                popuplayertitle: "1B TY39291F Elizabeth Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1BTY39291FElizabethKennedy_24.png" /> 1B TY39291F Elizabeth Kennedy'
            });
var format_1ATY5519ElizabethKennedy_25 = new ol.format.GeoJSON();
var features_1ATY5519ElizabethKennedy_25 = format_1ATY5519ElizabethKennedy_25.readFeatures(json_1ATY5519ElizabethKennedy_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ATY5519ElizabethKennedy_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ATY5519ElizabethKennedy_25.addFeatures(features_1ATY5519ElizabethKennedy_25);
var lyr_1ATY5519ElizabethKennedy_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ATY5519ElizabethKennedy_25, 
                style: style_1ATY5519ElizabethKennedy_25,
                popuplayertitle: "1A TY5519 Elizabeth Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1ATY5519ElizabethKennedy_25.png" /> 1A TY5519 Elizabeth Kennedy'
            });
var format_LoopSubstation5AcresAdditional25Acres_26 = new ol.format.GeoJSON();
var features_LoopSubstation5AcresAdditional25Acres_26 = format_LoopSubstation5AcresAdditional25Acres_26.readFeatures(json_LoopSubstation5AcresAdditional25Acres_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopSubstation5AcresAdditional25Acres_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopSubstation5AcresAdditional25Acres_26.addFeatures(features_LoopSubstation5AcresAdditional25Acres_26);
var lyr_LoopSubstation5AcresAdditional25Acres_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopSubstation5AcresAdditional25Acres_26, 
                style: style_LoopSubstation5AcresAdditional25Acres_26,
                popuplayertitle: "Loop Substation (5 Acres) + Additional 2.5 Acres",
                interactive: true,
    title: 'Loop Substation (5 Acres) + Additional 2.5 Acres<br />\
    <img src="styles/legend/LoopSubstation5AcresAdditional25Acres_26_0.png" /> 2.5 Acres<br />\
    <img src="styles/legend/LoopSubstation5AcresAdditional25Acres_26_1.png" /> 5 Acres<br />'
        });
var format_ResidentialMixed800mCommercial500mHousingCurtilage_27 = new ol.format.GeoJSON();
var features_ResidentialMixed800mCommercial500mHousingCurtilage_27 = format_ResidentialMixed800mCommercial500mHousingCurtilage_27.readFeatures(json_ResidentialMixed800mCommercial500mHousingCurtilage_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialMixed800mCommercial500mHousingCurtilage_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialMixed800mCommercial500mHousingCurtilage_27.addFeatures(features_ResidentialMixed800mCommercial500mHousingCurtilage_27);
var lyr_ResidentialMixed800mCommercial500mHousingCurtilage_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialMixed800mCommercial500mHousingCurtilage_27, 
                style: style_ResidentialMixed800mCommercial500mHousingCurtilage_27,
                popuplayertitle: "Residential + Mixed 800m, Commercial 500m (Housing Curtilage)",
                interactive: true,
                title: '<img src="styles/legend/ResidentialMixed800mCommercial500mHousingCurtilage_27.png" /> Residential + Mixed 800m, Commercial 500m (Housing Curtilage)'
            });
var format_HousingCurtillage800mBuffer_28 = new ol.format.GeoJSON();
var features_HousingCurtillage800mBuffer_28 = format_HousingCurtillage800mBuffer_28.readFeatures(json_HousingCurtillage800mBuffer_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HousingCurtillage800mBuffer_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HousingCurtillage800mBuffer_28.addFeatures(features_HousingCurtillage800mBuffer_28);
var lyr_HousingCurtillage800mBuffer_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HousingCurtillage800mBuffer_28, 
                style: style_HousingCurtillage800mBuffer_28,
                popuplayertitle: "Housing Curtillage 800m Buffer",
                interactive: true,
                title: '<img src="styles/legend/HousingCurtillage800mBuffer_28.png" /> Housing Curtillage 800m Buffer'
            });
var format_NaturalDesignatedAreasMergedTogetherTipperary_29 = new ol.format.GeoJSON();
var features_NaturalDesignatedAreasMergedTogetherTipperary_29 = format_NaturalDesignatedAreasMergedTogetherTipperary_29.readFeatures(json_NaturalDesignatedAreasMergedTogetherTipperary_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NaturalDesignatedAreasMergedTogetherTipperary_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalDesignatedAreasMergedTogetherTipperary_29.addFeatures(features_NaturalDesignatedAreasMergedTogetherTipperary_29);
var lyr_NaturalDesignatedAreasMergedTogetherTipperary_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalDesignatedAreasMergedTogetherTipperary_29, 
                style: style_NaturalDesignatedAreasMergedTogetherTipperary_29,
                popuplayertitle: "Natural Designated Areas Merged Together Tipperary",
                interactive: true,
                title: '<img src="styles/legend/NaturalDesignatedAreasMergedTogetherTipperary_29.png" /> Natural Designated Areas Merged Together Tipperary'
            });
var format_RiversTipperary_30 = new ol.format.GeoJSON();
var features_RiversTipperary_30 = format_RiversTipperary_30.readFeatures(json_RiversTipperary_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversTipperary_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversTipperary_30.addFeatures(features_RiversTipperary_30);
var lyr_RiversTipperary_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversTipperary_30, 
                style: style_RiversTipperary_30,
                popuplayertitle: "Rivers Tipperary",
                interactive: true,
                title: '<img src="styles/legend/RiversTipperary_30.png" /> Rivers Tipperary'
            });
var format_ArchaeologyTipperary_31 = new ol.format.GeoJSON();
var features_ArchaeologyTipperary_31 = format_ArchaeologyTipperary_31.readFeatures(json_ArchaeologyTipperary_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArchaeologyTipperary_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArchaeologyTipperary_31.addFeatures(features_ArchaeologyTipperary_31);
var lyr_ArchaeologyTipperary_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArchaeologyTipperary_31, 
                style: style_ArchaeologyTipperary_31,
                popuplayertitle: "Archaeology Tipperary",
                interactive: true,
                title: '<img src="styles/legend/ArchaeologyTipperary_31.png" /> Archaeology Tipperary'
            });
var format_PowerLinesTipperary_32 = new ol.format.GeoJSON();
var features_PowerLinesTipperary_32 = format_PowerLinesTipperary_32.readFeatures(json_PowerLinesTipperary_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerLinesTipperary_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerLinesTipperary_32.addFeatures(features_PowerLinesTipperary_32);
var lyr_PowerLinesTipperary_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerLinesTipperary_32, 
                style: style_PowerLinesTipperary_32,
                popuplayertitle: "Power Lines Tipperary",
                interactive: true,
                title: '<img src="styles/legend/PowerLinesTipperary_32.png" /> Power Lines Tipperary'
            });
var format_PowerPolesTipperary_33 = new ol.format.GeoJSON();
var features_PowerPolesTipperary_33 = format_PowerPolesTipperary_33.readFeatures(json_PowerPolesTipperary_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerPolesTipperary_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerPolesTipperary_33.addFeatures(features_PowerPolesTipperary_33);
var lyr_PowerPolesTipperary_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerPolesTipperary_33, 
                style: style_PowerPolesTipperary_33,
                popuplayertitle: "Power Poles Tipperary",
                interactive: true,
                title: '<img src="styles/legend/PowerPolesTipperary_33.png" /> Power Poles Tipperary'
            });
var format_10mRoadBuffer_34 = new ol.format.GeoJSON();
var features_10mRoadBuffer_34 = format_10mRoadBuffer_34.readFeatures(json_10mRoadBuffer_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10mRoadBuffer_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10mRoadBuffer_34.addFeatures(features_10mRoadBuffer_34);
var lyr_10mRoadBuffer_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10mRoadBuffer_34, 
                style: style_10mRoadBuffer_34,
                popuplayertitle: "10m Road Buffer",
                interactive: true,
                title: '<img src="styles/legend/10mRoadBuffer_34.png" /> 10m Road Buffer'
            });
var format_Roads_35 = new ol.format.GeoJSON();
var features_Roads_35 = format_Roads_35.readFeatures(json_Roads_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_35.addFeatures(features_Roads_35);
var lyr_Roads_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_35, 
                style: style_Roads_35,
                popuplayertitle: "Roads",
                interactive: true,
                title: '<img src="styles/legend/Roads_35.png" /> Roads'
            });
var format_875mOversail_36 = new ol.format.GeoJSON();
var features_875mOversail_36 = format_875mOversail_36.readFeatures(json_875mOversail_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_875mOversail_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_875mOversail_36.addFeatures(features_875mOversail_36);
var lyr_875mOversail_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_875mOversail_36, 
                style: style_875mOversail_36,
                popuplayertitle: "87.5m Oversail",
                interactive: true,
                title: '<img src="styles/legend/875mOversail_36.png" /> 87.5m Oversail'
            });
var format_IndicativeTurbineLocations25x35Ellipses_37 = new ol.format.GeoJSON();
var features_IndicativeTurbineLocations25x35Ellipses_37 = format_IndicativeTurbineLocations25x35Ellipses_37.readFeatures(json_IndicativeTurbineLocations25x35Ellipses_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicativeTurbineLocations25x35Ellipses_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicativeTurbineLocations25x35Ellipses_37.addFeatures(features_IndicativeTurbineLocations25x35Ellipses_37);
var lyr_IndicativeTurbineLocations25x35Ellipses_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndicativeTurbineLocations25x35Ellipses_37, 
                style: style_IndicativeTurbineLocations25x35Ellipses_37,
                popuplayertitle: "Indicative Turbine Locations 2.5 x 3.5 Ellipses",
                interactive: true,
                title: '<img src="styles/legend/IndicativeTurbineLocations25x35Ellipses_37.png" /> Indicative Turbine Locations 2.5 x 3.5 Ellipses'
            });
var format_IndicativeTurbineLocations_38 = new ol.format.GeoJSON();
var features_IndicativeTurbineLocations_38 = format_IndicativeTurbineLocations_38.readFeatures(json_IndicativeTurbineLocations_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicativeTurbineLocations_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicativeTurbineLocations_38.addFeatures(features_IndicativeTurbineLocations_38);
var lyr_IndicativeTurbineLocations_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndicativeTurbineLocations_38, 
                style: style_IndicativeTurbineLocations_38,
                popuplayertitle: "Indicative Turbine Locations",
                interactive: true,
                title: '<img src="styles/legend/IndicativeTurbineLocations_38.png" /> Indicative Turbine Locations'
            });
var group_SiteDetails = new ol.layer.Group({
                                layers: [lyr_10mRoadBuffer_34,lyr_Roads_35,lyr_875mOversail_36,lyr_IndicativeTurbineLocations25x35Ellipses_37,lyr_IndicativeTurbineLocations_38,],
                                fold: "open",
                                title: "Site Details"});
var group_EnvironmentalDesignations = new ol.layer.Group({
                                layers: [lyr_ResidentialMixed800mCommercial500mHousingCurtilage_27,lyr_HousingCurtillage800mBuffer_28,lyr_NaturalDesignatedAreasMergedTogetherTipperary_29,lyr_RiversTipperary_30,lyr_ArchaeologyTipperary_31,lyr_PowerLinesTipperary_32,lyr_PowerPolesTipperary_33,],
                                fold: "open",
                                title: "Environmental Designations"});
var group_Land = new ol.layer.Group({
                                layers: [lyr_1TTY5081LouisRonan_6,lyr_1STY58758FJaneRonan_7,lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8,lyr_1QTY6133FJacquelineRonanDeirdreRonan_9,lyr_1PTY69134FLouisRonan_10,lyr_1OTY37566FLouisRonan_11,lyr_1NTY35720DavidMRonan_12,lyr_1MTY51973FJacquelineRonan_13,lyr_1LTY28062FGerardODonnell_14,lyr_1KTY19477SeamusLyonsAccess_15,lyr_1JTY5082LiamFrankQuirke_16,lyr_1ITY17039PatrickMaher_17,lyr_1HTY5080LouisRonan_18,lyr_1GTY21547RobertWalsh_19,lyr_1FTY11666PatrickWalshAileenWalsh_20,lyr_1ETY21679AodhKennedy_21,lyr_1DTY5512AodhKennedy_22,lyr_1CTY5514AodhKennedy_23,lyr_1BTY39291FElizabethKennedy_24,lyr_1ATY5519ElizabethKennedy_25,lyr_LoopSubstation5AcresAdditional25Acres_26,],
                                fold: "open",
                                title: "Land"});
var group_ExtraMeasurements = new ol.layer.Group({
                                layers: [lyr_TurbineDistancestoEachother_4,lyr_TurbineDistancestoOtherFeatures_5,],
                                fold: "open",
                                title: "Extra Measurements"});
var group_MoorstownRenewableEnergyProject = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_ESRISatellite_1,lyr_TipperaryBorder_2,lyr_1750mSiteBuffer10xRD_3,],
                                fold: "open",
                                title: "Moorstown Renewable Energy Project"});

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_TipperaryBorder_2.setVisible(true);lyr_1750mSiteBuffer10xRD_3.setVisible(true);lyr_TurbineDistancestoEachother_4.setVisible(true);lyr_TurbineDistancestoOtherFeatures_5.setVisible(true);lyr_1TTY5081LouisRonan_6.setVisible(true);lyr_1STY58758FJaneRonan_7.setVisible(true);lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8.setVisible(true);lyr_1QTY6133FJacquelineRonanDeirdreRonan_9.setVisible(true);lyr_1PTY69134FLouisRonan_10.setVisible(true);lyr_1OTY37566FLouisRonan_11.setVisible(true);lyr_1NTY35720DavidMRonan_12.setVisible(true);lyr_1MTY51973FJacquelineRonan_13.setVisible(true);lyr_1LTY28062FGerardODonnell_14.setVisible(true);lyr_1KTY19477SeamusLyonsAccess_15.setVisible(true);lyr_1JTY5082LiamFrankQuirke_16.setVisible(true);lyr_1ITY17039PatrickMaher_17.setVisible(true);lyr_1HTY5080LouisRonan_18.setVisible(true);lyr_1GTY21547RobertWalsh_19.setVisible(true);lyr_1FTY11666PatrickWalshAileenWalsh_20.setVisible(true);lyr_1ETY21679AodhKennedy_21.setVisible(true);lyr_1DTY5512AodhKennedy_22.setVisible(true);lyr_1CTY5514AodhKennedy_23.setVisible(true);lyr_1BTY39291FElizabethKennedy_24.setVisible(true);lyr_1ATY5519ElizabethKennedy_25.setVisible(true);lyr_LoopSubstation5AcresAdditional25Acres_26.setVisible(true);lyr_ResidentialMixed800mCommercial500mHousingCurtilage_27.setVisible(true);lyr_HousingCurtillage800mBuffer_28.setVisible(true);lyr_NaturalDesignatedAreasMergedTogetherTipperary_29.setVisible(true);lyr_RiversTipperary_30.setVisible(true);lyr_ArchaeologyTipperary_31.setVisible(true);lyr_PowerLinesTipperary_32.setVisible(true);lyr_PowerPolesTipperary_33.setVisible(true);lyr_10mRoadBuffer_34.setVisible(true);lyr_Roads_35.setVisible(true);lyr_875mOversail_36.setVisible(true);lyr_IndicativeTurbineLocations25x35Ellipses_37.setVisible(true);lyr_IndicativeTurbineLocations_38.setVisible(true);
var layersList = [group_MoorstownRenewableEnergyProject,group_ExtraMeasurements,group_Land,group_EnvironmentalDesignations,group_SiteDetails];
lyr_TipperaryBorder_2.set('fieldAliases', {'COUNTY': 'COUNTY', });
lyr_1750mSiteBuffer10xRD_3.set('fieldAliases', {});
lyr_TurbineDistancestoEachother_4.set('fieldAliases', {'Line Dista': 'Line Distance', });
lyr_TurbineDistancestoOtherFeatures_5.set('fieldAliases', {'Turbine_ID': 'Turbine_ID', 'Feature_Ty': 'Feature_Ty', 'Distance_m': 'Distance_m', 'Shape_Leng': 'Shape_Leng', });
lyr_1TTY5081LouisRonan_6.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1STY58758FJaneRonan_7.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1QTY6133FJacquelineRonanDeirdreRonan_9.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1PTY69134FLouisRonan_10.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1OTY37566FLouisRonan_11.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1NTY35720DavidMRonan_12.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1MTY51973FJacquelineRonan_13.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1LTY28062FGerardODonnell_14.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1KTY19477SeamusLyonsAccess_15.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1JTY5082LiamFrankQuirke_16.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1ITY17039PatrickMaher_17.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1HTY5080LouisRonan_18.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1GTY21547RobertWalsh_19.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1FTY11666PatrickWalshAileenWalsh_20.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1ETY21679AodhKennedy_21.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', 'versionId': 'versionId', });
lyr_1DTY5512AodhKennedy_22.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1CTY5514AodhKennedy_23.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1BTY39291FElizabethKennedy_24.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1ATY5519ElizabethKennedy_25.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_LoopSubstation5AcresAdditional25Acres_26.set('fieldAliases', {'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_ResidentialMixed800mCommercial500mHousingCurtilage_27.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HousingCurtillage800mBuffer_28.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NaturalDesignatedAreasMergedTogetherTipperary_29.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITE_NAME': 'SITE_NAME', 'COUNTY': 'COUNTY', 'VERSION': 'VERSION', 'HA': 'HA', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'Shape_Leng': 'Shape_Leng', 'URL': 'URL', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'GlobalID': 'GlobalID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_RiversTipperary_30.set('fieldAliases', {'EU_CD': 'EU_CD', 'NAME': 'NAME', 'MS_CD': 'MS_CD', 'REGION_CD': 'REGION_CD', 'INS_WHEN': 'INS_WHEN', 'INS_BY': 'INS_BY', 'BASIN_CD': 'BASIN_CD', 'LAT': 'LAT', 'LON': 'LON', 'LENGTHKM': 'LENGTHKM', 'SUB_CD': 'SUB_CD', 'DateChange': 'DateChange', 'Change': 'Change', 'GEOLOGY': 'GEOLOGY', 'AreaKm2': 'AreaKm2', 'AreaHectar': 'AreaHectar', 'Slope': 'Slope', 'Altitude': 'Altitude', 'WaterManag': 'WaterManag', 'EdenEntity': 'EdenEntity', 'Easting': 'Easting', 'Northing': 'Northing', 'LocalAutho': 'LocalAutho', 'SYSTEM': 'SYSTEM', 'TYPE': 'TYPE', 'ALT_CAT': 'ALT_CAT', 'SIZE_CAT': 'SIZE_CAT', 'DIST_CD': 'DIST_CD', 'ProtectedA': 'ProtectedA', 'WiseRefere': 'WiseRefere', 'HydroArea': 'HydroArea', 'StnDefinin': 'StnDefinin', });
lyr_ArchaeologyTipperary_31.set('fieldAliases', {'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'CLASS_CODE', 'SMRS': 'SMRS', 'COUNTY': 'COUNTY', 'TOWNLAND': 'TOWNLAND', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_C': 'MONUMENT_C', 'FIRST_EDIT': 'FIRST_EDIT', 'LATEST_EDI': 'LATEST_EDI', 'WEBSITE_LI': 'WEBSITE_LI', 'WEB_NOTES': 'WEB_NOTES', });
lyr_PowerLinesTipperary_32.set('fieldAliases', {'power': 'power', 'voltage': 'voltage', 'operator': 'operator', 'name': 'name', 'substation': 'substation', });
lyr_PowerPolesTipperary_33.set('fieldAliases', {'power': 'power', 'was_voltag': 'was_voltag', 'telecom': 'telecom', });
lyr_10mRoadBuffer_34.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Roads_35.set('fieldAliases', {'highway': 'highway', 'Shape_Leng': 'Shape_Leng', });
lyr_875mOversail_36.set('fieldAliases', {'BUFF_DIST': 'BUFF_DIST', 'Shape_Area': 'Shape_Area', });
lyr_IndicativeTurbineLocations25x35Ellipses_37.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RotDiam': 'RotDiam', 'Direct': 'Direct', 'WFactor': 'WFactor', 'LFactor': 'LFactor', 'Width': 'Width', 'Length': 'Length', });
lyr_IndicativeTurbineLocations_38.set('fieldAliases', {'Name': 'Name', });
lyr_TipperaryBorder_2.set('fieldImages', {'COUNTY': 'TextEdit', });
lyr_1750mSiteBuffer10xRD_3.set('fieldImages', {});
lyr_TurbineDistancestoEachother_4.set('fieldImages', {'Line Dista': 'TextEdit', });
lyr_TurbineDistancestoOtherFeatures_5.set('fieldImages', {'Turbine_ID': 'TextEdit', 'Feature_Ty': 'TextEdit', 'Distance_m': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_1TTY5081LouisRonan_6.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1STY58758FJaneRonan_7.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1QTY6133FJacquelineRonanDeirdreRonan_9.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1PTY69134FLouisRonan_10.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1OTY37566FLouisRonan_11.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1NTY35720DavidMRonan_12.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1MTY51973FJacquelineRonan_13.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1LTY28062FGerardODonnell_14.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1KTY19477SeamusLyonsAccess_15.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1JTY5082LiamFrankQuirke_16.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1ITY17039PatrickMaher_17.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1HTY5080LouisRonan_18.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1GTY21547RobertWalsh_19.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1FTY11666PatrickWalshAileenWalsh_20.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1ETY21679AodhKennedy_21.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', });
lyr_1DTY5512AodhKennedy_22.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1CTY5514AodhKennedy_23.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1BTY39291FElizabethKennedy_24.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1ATY5519ElizabethKennedy_25.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_LoopSubstation5AcresAdditional25Acres_26.set('fieldImages', {'Name': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ResidentialMixed800mCommercial500mHousingCurtilage_27.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HousingCurtillage800mBuffer_28.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NaturalDesignatedAreasMergedTogetherTipperary_29.set('fieldImages', {'SITECODE': 'TextEdit', 'SITE_NAME': 'TextEdit', 'COUNTY': 'TextEdit', 'VERSION': 'TextEdit', 'HA': 'TextEdit', 'Source_CRS': 'TextEdit', 'SourcScale': 'TextEdit', 'Shape_Leng': 'TextEdit', 'URL': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RiversTipperary_30.set('fieldImages', {'EU_CD': 'TextEdit', 'NAME': 'TextEdit', 'MS_CD': 'TextEdit', 'REGION_CD': 'TextEdit', 'INS_WHEN': 'DateTime', 'INS_BY': 'TextEdit', 'BASIN_CD': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'LENGTHKM': 'TextEdit', 'SUB_CD': 'TextEdit', 'DateChange': 'DateTime', 'Change': 'TextEdit', 'GEOLOGY': 'TextEdit', 'AreaKm2': 'TextEdit', 'AreaHectar': 'TextEdit', 'Slope': 'TextEdit', 'Altitude': 'TextEdit', 'WaterManag': 'TextEdit', 'EdenEntity': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'LocalAutho': 'TextEdit', 'SYSTEM': 'TextEdit', 'TYPE': 'TextEdit', 'ALT_CAT': 'TextEdit', 'SIZE_CAT': 'TextEdit', 'DIST_CD': 'TextEdit', 'ProtectedA': 'TextEdit', 'WiseRefere': 'TextEdit', 'HydroArea': 'TextEdit', 'StnDefinin': 'TextEdit', });
lyr_ArchaeologyTipperary_31.set('fieldImages', {'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_C': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', });
lyr_PowerLinesTipperary_32.set('fieldImages', {'power': 'TextEdit', 'voltage': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'substation': 'TextEdit', });
lyr_PowerPolesTipperary_33.set('fieldImages', {'power': 'TextEdit', 'was_voltag': 'TextEdit', 'telecom': 'TextEdit', });
lyr_10mRoadBuffer_34.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Roads_35.set('fieldImages', {'highway': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_875mOversail_36.set('fieldImages', {'BUFF_DIST': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IndicativeTurbineLocations25x35Ellipses_37.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RotDiam': 'TextEdit', 'Direct': 'TextEdit', 'WFactor': 'TextEdit', 'LFactor': 'TextEdit', 'Width': 'TextEdit', 'Length': 'TextEdit', });
lyr_IndicativeTurbineLocations_38.set('fieldImages', {'Name': 'TextEdit', });
lyr_TipperaryBorder_2.set('fieldLabels', {'COUNTY': 'no label', });
lyr_1750mSiteBuffer10xRD_3.set('fieldLabels', {});
lyr_TurbineDistancestoEachother_4.set('fieldLabels', {'Line Dista': 'header label - always visible', });
lyr_TurbineDistancestoOtherFeatures_5.set('fieldLabels', {'Turbine_ID': 'no label', 'Feature_Ty': 'no label', 'Distance_m': 'header label - always visible', 'Shape_Leng': 'no label', });
lyr_1TTY5081LouisRonan_6.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1STY58758FJaneRonan_7.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_8.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1QTY6133FJacquelineRonanDeirdreRonan_9.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1PTY69134FLouisRonan_10.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1OTY37566FLouisRonan_11.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1NTY35720DavidMRonan_12.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1MTY51973FJacquelineRonan_13.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1LTY28062FGerardODonnell_14.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1KTY19477SeamusLyonsAccess_15.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1JTY5082LiamFrankQuirke_16.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1ITY17039PatrickMaher_17.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1HTY5080LouisRonan_18.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1GTY21547RobertWalsh_19.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1FTY11666PatrickWalshAileenWalsh_20.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1ETY21679AodhKennedy_21.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', 'versionId': 'no label', });
lyr_1DTY5512AodhKennedy_22.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1CTY5514AodhKennedy_23.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1BTY39291FElizabethKennedy_24.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1ATY5519ElizabethKennedy_25.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_LoopSubstation5AcresAdditional25Acres_26.set('fieldLabels', {'Name': 'inline label - always visible', 'Shape_Area': 'no label', });
lyr_ResidentialMixed800mCommercial500mHousingCurtilage_27.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_HousingCurtillage800mBuffer_28.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_NaturalDesignatedAreasMergedTogetherTipperary_29.set('fieldLabels', {'SITECODE': 'no label', 'SITE_NAME': 'no label', 'COUNTY': 'no label', 'VERSION': 'no label', 'HA': 'no label', 'Source_CRS': 'no label', 'SourcScale': 'no label', 'Shape_Leng': 'no label', 'URL': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'GlobalID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_RiversTipperary_30.set('fieldLabels', {'EU_CD': 'no label', 'NAME': 'no label', 'MS_CD': 'no label', 'REGION_CD': 'no label', 'INS_WHEN': 'no label', 'INS_BY': 'no label', 'BASIN_CD': 'no label', 'LAT': 'no label', 'LON': 'no label', 'LENGTHKM': 'no label', 'SUB_CD': 'no label', 'DateChange': 'no label', 'Change': 'no label', 'GEOLOGY': 'no label', 'AreaKm2': 'no label', 'AreaHectar': 'no label', 'Slope': 'no label', 'Altitude': 'no label', 'WaterManag': 'no label', 'EdenEntity': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'LocalAutho': 'no label', 'SYSTEM': 'no label', 'TYPE': 'no label', 'ALT_CAT': 'no label', 'SIZE_CAT': 'no label', 'DIST_CD': 'no label', 'ProtectedA': 'no label', 'WiseRefere': 'no label', 'HydroArea': 'no label', 'StnDefinin': 'no label', });
lyr_ArchaeologyTipperary_31.set('fieldLabels', {'ENTITY_ID': 'no label', 'CLASS_CODE': 'no label', 'SMRS': 'no label', 'COUNTY': 'no label', 'TOWNLAND': 'no label', 'ZONE_ID': 'no label', 'ITM_E': 'no label', 'ITM_N': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'MONUMENT_C': 'no label', 'FIRST_EDIT': 'no label', 'LATEST_EDI': 'no label', 'WEBSITE_LI': 'no label', 'WEB_NOTES': 'no label', });
lyr_PowerLinesTipperary_32.set('fieldLabels', {'power': 'no label', 'voltage': 'no label', 'operator': 'no label', 'name': 'no label', 'substation': 'no label', });
lyr_PowerPolesTipperary_33.set('fieldLabels', {'power': 'no label', 'was_voltag': 'no label', 'telecom': 'no label', });
lyr_10mRoadBuffer_34.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Roads_35.set('fieldLabels', {'highway': 'no label', 'Shape_Leng': 'no label', });
lyr_875mOversail_36.set('fieldLabels', {'BUFF_DIST': 'no label', 'Shape_Area': 'no label', });
lyr_IndicativeTurbineLocations25x35Ellipses_37.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'RotDiam': 'no label', 'Direct': 'no label', 'WFactor': 'no label', 'LFactor': 'no label', 'Width': 'no label', 'Length': 'no label', });
lyr_IndicativeTurbineLocations_38.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_IndicativeTurbineLocations_38.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});