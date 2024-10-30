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
var format_2CTY19488FShemDrowneLimited_6 = new ol.format.GeoJSON();
var features_2CTY19488FShemDrowneLimited_6 = format_2CTY19488FShemDrowneLimited_6.readFeatures(json_2CTY19488FShemDrowneLimited_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2CTY19488FShemDrowneLimited_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2CTY19488FShemDrowneLimited_6.addFeatures(features_2CTY19488FShemDrowneLimited_6);
var lyr_2CTY19488FShemDrowneLimited_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2CTY19488FShemDrowneLimited_6, 
                style: style_2CTY19488FShemDrowneLimited_6,
                popuplayertitle: "2C TY19488F Shem Drowne Limited",
                interactive: true,
                title: '<img src="styles/legend/2CTY19488FShemDrowneLimited_6.png" /> 2C TY19488F Shem Drowne Limited'
            });
var format_2BTY58716FShemDrowneLimited_7 = new ol.format.GeoJSON();
var features_2BTY58716FShemDrowneLimited_7 = format_2BTY58716FShemDrowneLimited_7.readFeatures(json_2BTY58716FShemDrowneLimited_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2BTY58716FShemDrowneLimited_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2BTY58716FShemDrowneLimited_7.addFeatures(features_2BTY58716FShemDrowneLimited_7);
var lyr_2BTY58716FShemDrowneLimited_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2BTY58716FShemDrowneLimited_7, 
                style: style_2BTY58716FShemDrowneLimited_7,
                popuplayertitle: "2B TY58716F Shem Drowne Limited",
                interactive: true,
                title: '<img src="styles/legend/2BTY58716FShemDrowneLimited_7.png" /> 2B TY58716F Shem Drowne Limited'
            });
var format_2ATY14443FShemDrowneLimited_8 = new ol.format.GeoJSON();
var features_2ATY14443FShemDrowneLimited_8 = format_2ATY14443FShemDrowneLimited_8.readFeatures(json_2ATY14443FShemDrowneLimited_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2ATY14443FShemDrowneLimited_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2ATY14443FShemDrowneLimited_8.addFeatures(features_2ATY14443FShemDrowneLimited_8);
var lyr_2ATY14443FShemDrowneLimited_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2ATY14443FShemDrowneLimited_8, 
                style: style_2ATY14443FShemDrowneLimited_8,
                popuplayertitle: "2A TY14443F Shem Drowne Limited",
                interactive: true,
                title: '<img src="styles/legend/2ATY14443FShemDrowneLimited_8.png" /> 2A TY14443F Shem Drowne Limited'
            });
var format_1ZTY19489FShemDrowneLimited_9 = new ol.format.GeoJSON();
var features_1ZTY19489FShemDrowneLimited_9 = format_1ZTY19489FShemDrowneLimited_9.readFeatures(json_1ZTY19489FShemDrowneLimited_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ZTY19489FShemDrowneLimited_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ZTY19489FShemDrowneLimited_9.addFeatures(features_1ZTY19489FShemDrowneLimited_9);
var lyr_1ZTY19489FShemDrowneLimited_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ZTY19489FShemDrowneLimited_9, 
                style: style_1ZTY19489FShemDrowneLimited_9,
                popuplayertitle: "1Z TY19489F Shem Drowne Limited",
                interactive: true,
                title: '<img src="styles/legend/1ZTY19489FShemDrowneLimited_9.png" /> 1Z TY19489F Shem Drowne Limited'
            });
var format_1YTY6134FShemDrowneLimited_10 = new ol.format.GeoJSON();
var features_1YTY6134FShemDrowneLimited_10 = format_1YTY6134FShemDrowneLimited_10.readFeatures(json_1YTY6134FShemDrowneLimited_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1YTY6134FShemDrowneLimited_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1YTY6134FShemDrowneLimited_10.addFeatures(features_1YTY6134FShemDrowneLimited_10);
var lyr_1YTY6134FShemDrowneLimited_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1YTY6134FShemDrowneLimited_10, 
                style: style_1YTY6134FShemDrowneLimited_10,
                popuplayertitle: "1Y TY6134F Shem Drowne Limited",
                interactive: true,
                title: '<img src="styles/legend/1YTY6134FShemDrowneLimited_10.png" /> 1Y TY6134F Shem Drowne Limited'
            });
var format_1XTY19490FShemDrowneLimited_11 = new ol.format.GeoJSON();
var features_1XTY19490FShemDrowneLimited_11 = format_1XTY19490FShemDrowneLimited_11.readFeatures(json_1XTY19490FShemDrowneLimited_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1XTY19490FShemDrowneLimited_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1XTY19490FShemDrowneLimited_11.addFeatures(features_1XTY19490FShemDrowneLimited_11);
var lyr_1XTY19490FShemDrowneLimited_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1XTY19490FShemDrowneLimited_11, 
                style: style_1XTY19490FShemDrowneLimited_11,
                popuplayertitle: "1X TY19490F Shem Drowne Limited",
                interactive: true,
                title: '<img src="styles/legend/1XTY19490FShemDrowneLimited_11.png" /> 1X TY19490F Shem Drowne Limited'
            });
var format_1WTY45210FShemDrowneLimited_12 = new ol.format.GeoJSON();
var features_1WTY45210FShemDrowneLimited_12 = format_1WTY45210FShemDrowneLimited_12.readFeatures(json_1WTY45210FShemDrowneLimited_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1WTY45210FShemDrowneLimited_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1WTY45210FShemDrowneLimited_12.addFeatures(features_1WTY45210FShemDrowneLimited_12);
var lyr_1WTY45210FShemDrowneLimited_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1WTY45210FShemDrowneLimited_12, 
                style: style_1WTY45210FShemDrowneLimited_12,
                popuplayertitle: "1W TY45210F Shem Drowne Limited",
                interactive: true,
                title: '<img src="styles/legend/1WTY45210FShemDrowneLimited_12.png" /> 1W TY45210F Shem Drowne Limited'
            });
var format_1VTY52569FShemDrowneLimited_13 = new ol.format.GeoJSON();
var features_1VTY52569FShemDrowneLimited_13 = format_1VTY52569FShemDrowneLimited_13.readFeatures(json_1VTY52569FShemDrowneLimited_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1VTY52569FShemDrowneLimited_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1VTY52569FShemDrowneLimited_13.addFeatures(features_1VTY52569FShemDrowneLimited_13);
var lyr_1VTY52569FShemDrowneLimited_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1VTY52569FShemDrowneLimited_13, 
                style: style_1VTY52569FShemDrowneLimited_13,
                popuplayertitle: "1V TY52569F Shem Drowne Limited",
                interactive: true,
                title: '<img src="styles/legend/1VTY52569FShemDrowneLimited_13.png" /> 1V TY52569F Shem Drowne Limited'
            });
var format_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14 = new ol.format.GeoJSON();
var features_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14 = format_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14.readFeatures(json_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14.addFeatures(features_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14);
var lyr_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14, 
                style: style_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14,
                popuplayertitle: "1U TY57105F Richard Perkins, Jonah Wragg, Gavin Wragg, Rosemary Susan Perkins",
                interactive: true,
                title: '<img src="styles/legend/1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14.png" /> 1U TY57105F Richard Perkins, Jonah Wragg, Gavin Wragg, Rosemary Susan Perkins'
            });
var format_1TTY5081LouisRonan_15 = new ol.format.GeoJSON();
var features_1TTY5081LouisRonan_15 = format_1TTY5081LouisRonan_15.readFeatures(json_1TTY5081LouisRonan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1TTY5081LouisRonan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1TTY5081LouisRonan_15.addFeatures(features_1TTY5081LouisRonan_15);
var lyr_1TTY5081LouisRonan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1TTY5081LouisRonan_15, 
                style: style_1TTY5081LouisRonan_15,
                popuplayertitle: "1T TY5081 Louis Ronan",
                interactive: true,
                title: '<img src="styles/legend/1TTY5081LouisRonan_15.png" /> 1T TY5081 Louis Ronan'
            });
var format_1STY58758FJaneRonan_16 = new ol.format.GeoJSON();
var features_1STY58758FJaneRonan_16 = format_1STY58758FJaneRonan_16.readFeatures(json_1STY58758FJaneRonan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1STY58758FJaneRonan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1STY58758FJaneRonan_16.addFeatures(features_1STY58758FJaneRonan_16);
var lyr_1STY58758FJaneRonan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1STY58758FJaneRonan_16, 
                style: style_1STY58758FJaneRonan_16,
                popuplayertitle: "1S TY58758F Jane Ronan",
                interactive: true,
                title: '<img src="styles/legend/1STY58758FJaneRonan_16.png" /> 1S TY58758F Jane Ronan'
            });
var format_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17 = new ol.format.GeoJSON();
var features_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17 = format_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17.readFeatures(json_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17.addFeatures(features_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17);
var lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17, 
                style: style_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17,
                popuplayertitle: "1R TY38596F Deirdre Ronan, Jacqueline Ronan, John F. Ronan",
                interactive: true,
                title: '<img src="styles/legend/1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17.png" /> 1R TY38596F Deirdre Ronan, Jacqueline Ronan, John F. Ronan'
            });
var format_1QTY6133FJacquelineRonanDeirdreRonan_18 = new ol.format.GeoJSON();
var features_1QTY6133FJacquelineRonanDeirdreRonan_18 = format_1QTY6133FJacquelineRonanDeirdreRonan_18.readFeatures(json_1QTY6133FJacquelineRonanDeirdreRonan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1QTY6133FJacquelineRonanDeirdreRonan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1QTY6133FJacquelineRonanDeirdreRonan_18.addFeatures(features_1QTY6133FJacquelineRonanDeirdreRonan_18);
var lyr_1QTY6133FJacquelineRonanDeirdreRonan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1QTY6133FJacquelineRonanDeirdreRonan_18, 
                style: style_1QTY6133FJacquelineRonanDeirdreRonan_18,
                popuplayertitle: "1Q TY6133F Jacqueline Ronan, Deirdre Ronan",
                interactive: true,
                title: '<img src="styles/legend/1QTY6133FJacquelineRonanDeirdreRonan_18.png" /> 1Q TY6133F Jacqueline Ronan, Deirdre Ronan'
            });
var format_1PTY69134FLouisRonan_19 = new ol.format.GeoJSON();
var features_1PTY69134FLouisRonan_19 = format_1PTY69134FLouisRonan_19.readFeatures(json_1PTY69134FLouisRonan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1PTY69134FLouisRonan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1PTY69134FLouisRonan_19.addFeatures(features_1PTY69134FLouisRonan_19);
var lyr_1PTY69134FLouisRonan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1PTY69134FLouisRonan_19, 
                style: style_1PTY69134FLouisRonan_19,
                popuplayertitle: "1P TY69134F Louis Ronan",
                interactive: true,
                title: '<img src="styles/legend/1PTY69134FLouisRonan_19.png" /> 1P TY69134F Louis Ronan'
            });
var format_1OTY37566FLouisRonan_20 = new ol.format.GeoJSON();
var features_1OTY37566FLouisRonan_20 = format_1OTY37566FLouisRonan_20.readFeatures(json_1OTY37566FLouisRonan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1OTY37566FLouisRonan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1OTY37566FLouisRonan_20.addFeatures(features_1OTY37566FLouisRonan_20);
var lyr_1OTY37566FLouisRonan_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1OTY37566FLouisRonan_20, 
                style: style_1OTY37566FLouisRonan_20,
                popuplayertitle: "1O TY37566F Louis Ronan",
                interactive: true,
                title: '<img src="styles/legend/1OTY37566FLouisRonan_20.png" /> 1O TY37566F Louis Ronan'
            });
var format_1NTY35720DavidMRonan_21 = new ol.format.GeoJSON();
var features_1NTY35720DavidMRonan_21 = format_1NTY35720DavidMRonan_21.readFeatures(json_1NTY35720DavidMRonan_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1NTY35720DavidMRonan_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1NTY35720DavidMRonan_21.addFeatures(features_1NTY35720DavidMRonan_21);
var lyr_1NTY35720DavidMRonan_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1NTY35720DavidMRonan_21, 
                style: style_1NTY35720DavidMRonan_21,
                popuplayertitle: "1N TY35720 David M. Ronan",
                interactive: true,
                title: '<img src="styles/legend/1NTY35720DavidMRonan_21.png" /> 1N TY35720 David M. Ronan'
            });
var format_1MTY51973FJacquelineRonan_22 = new ol.format.GeoJSON();
var features_1MTY51973FJacquelineRonan_22 = format_1MTY51973FJacquelineRonan_22.readFeatures(json_1MTY51973FJacquelineRonan_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1MTY51973FJacquelineRonan_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1MTY51973FJacquelineRonan_22.addFeatures(features_1MTY51973FJacquelineRonan_22);
var lyr_1MTY51973FJacquelineRonan_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1MTY51973FJacquelineRonan_22, 
                style: style_1MTY51973FJacquelineRonan_22,
                popuplayertitle: "1M TY51973F Jacqueline Ronan",
                interactive: true,
                title: '<img src="styles/legend/1MTY51973FJacquelineRonan_22.png" /> 1M TY51973F Jacqueline Ronan'
            });
var format_1LTY28062FGerardODonnell_23 = new ol.format.GeoJSON();
var features_1LTY28062FGerardODonnell_23 = format_1LTY28062FGerardODonnell_23.readFeatures(json_1LTY28062FGerardODonnell_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1LTY28062FGerardODonnell_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1LTY28062FGerardODonnell_23.addFeatures(features_1LTY28062FGerardODonnell_23);
var lyr_1LTY28062FGerardODonnell_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1LTY28062FGerardODonnell_23, 
                style: style_1LTY28062FGerardODonnell_23,
                popuplayertitle: "1L TY28062F Gerard O Donnell",
                interactive: true,
                title: '<img src="styles/legend/1LTY28062FGerardODonnell_23.png" /> 1L TY28062F Gerard O Donnell'
            });
var format_1KTY19477SeamusLyonsAccess_24 = new ol.format.GeoJSON();
var features_1KTY19477SeamusLyonsAccess_24 = format_1KTY19477SeamusLyonsAccess_24.readFeatures(json_1KTY19477SeamusLyonsAccess_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1KTY19477SeamusLyonsAccess_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1KTY19477SeamusLyonsAccess_24.addFeatures(features_1KTY19477SeamusLyonsAccess_24);
var lyr_1KTY19477SeamusLyonsAccess_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1KTY19477SeamusLyonsAccess_24, 
                style: style_1KTY19477SeamusLyonsAccess_24,
                popuplayertitle: "1K TY19477 Seamus Lyons (Access)",
                interactive: true,
                title: '<img src="styles/legend/1KTY19477SeamusLyonsAccess_24.png" /> 1K TY19477 Seamus Lyons (Access)'
            });
var format_1JTY5082LiamFrankQuirke_25 = new ol.format.GeoJSON();
var features_1JTY5082LiamFrankQuirke_25 = format_1JTY5082LiamFrankQuirke_25.readFeatures(json_1JTY5082LiamFrankQuirke_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1JTY5082LiamFrankQuirke_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1JTY5082LiamFrankQuirke_25.addFeatures(features_1JTY5082LiamFrankQuirke_25);
var lyr_1JTY5082LiamFrankQuirke_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1JTY5082LiamFrankQuirke_25, 
                style: style_1JTY5082LiamFrankQuirke_25,
                popuplayertitle: "1J TY5082 Liam Frank Quirke",
                interactive: true,
                title: '<img src="styles/legend/1JTY5082LiamFrankQuirke_25.png" /> 1J TY5082 Liam Frank Quirke'
            });
var format_1ITY17039PatrickMaher_26 = new ol.format.GeoJSON();
var features_1ITY17039PatrickMaher_26 = format_1ITY17039PatrickMaher_26.readFeatures(json_1ITY17039PatrickMaher_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ITY17039PatrickMaher_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ITY17039PatrickMaher_26.addFeatures(features_1ITY17039PatrickMaher_26);
var lyr_1ITY17039PatrickMaher_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ITY17039PatrickMaher_26, 
                style: style_1ITY17039PatrickMaher_26,
                popuplayertitle: "1I TY17039 Patrick Maher",
                interactive: true,
                title: '<img src="styles/legend/1ITY17039PatrickMaher_26.png" /> 1I TY17039 Patrick Maher'
            });
var format_1HTY5080LouisRonan_27 = new ol.format.GeoJSON();
var features_1HTY5080LouisRonan_27 = format_1HTY5080LouisRonan_27.readFeatures(json_1HTY5080LouisRonan_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1HTY5080LouisRonan_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1HTY5080LouisRonan_27.addFeatures(features_1HTY5080LouisRonan_27);
var lyr_1HTY5080LouisRonan_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1HTY5080LouisRonan_27, 
                style: style_1HTY5080LouisRonan_27,
                popuplayertitle: "1H TY5080 Louis Ronan",
                interactive: true,
                title: '<img src="styles/legend/1HTY5080LouisRonan_27.png" /> 1H TY5080 Louis Ronan'
            });
var format_1GTY21547RobertWalsh_28 = new ol.format.GeoJSON();
var features_1GTY21547RobertWalsh_28 = format_1GTY21547RobertWalsh_28.readFeatures(json_1GTY21547RobertWalsh_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1GTY21547RobertWalsh_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1GTY21547RobertWalsh_28.addFeatures(features_1GTY21547RobertWalsh_28);
var lyr_1GTY21547RobertWalsh_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1GTY21547RobertWalsh_28, 
                style: style_1GTY21547RobertWalsh_28,
                popuplayertitle: "1G TY21547 Robert Walsh",
                interactive: true,
                title: '<img src="styles/legend/1GTY21547RobertWalsh_28.png" /> 1G TY21547 Robert Walsh'
            });
var format_1FTY11666PatrickWalshAileenWalsh_29 = new ol.format.GeoJSON();
var features_1FTY11666PatrickWalshAileenWalsh_29 = format_1FTY11666PatrickWalshAileenWalsh_29.readFeatures(json_1FTY11666PatrickWalshAileenWalsh_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1FTY11666PatrickWalshAileenWalsh_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1FTY11666PatrickWalshAileenWalsh_29.addFeatures(features_1FTY11666PatrickWalshAileenWalsh_29);
var lyr_1FTY11666PatrickWalshAileenWalsh_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1FTY11666PatrickWalshAileenWalsh_29, 
                style: style_1FTY11666PatrickWalshAileenWalsh_29,
                popuplayertitle: "1F TY11666 Patrick Walsh, Aileen Walsh",
                interactive: true,
                title: '<img src="styles/legend/1FTY11666PatrickWalshAileenWalsh_29.png" /> 1F TY11666 Patrick Walsh, Aileen Walsh'
            });
var format_1ETY21679AodhKennedy_30 = new ol.format.GeoJSON();
var features_1ETY21679AodhKennedy_30 = format_1ETY21679AodhKennedy_30.readFeatures(json_1ETY21679AodhKennedy_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ETY21679AodhKennedy_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ETY21679AodhKennedy_30.addFeatures(features_1ETY21679AodhKennedy_30);
var lyr_1ETY21679AodhKennedy_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ETY21679AodhKennedy_30, 
                style: style_1ETY21679AodhKennedy_30,
                popuplayertitle: "1E TY21679 Aodh Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1ETY21679AodhKennedy_30.png" /> 1E TY21679 Aodh Kennedy'
            });
var format_1DTY5512AodhKennedy_31 = new ol.format.GeoJSON();
var features_1DTY5512AodhKennedy_31 = format_1DTY5512AodhKennedy_31.readFeatures(json_1DTY5512AodhKennedy_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1DTY5512AodhKennedy_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1DTY5512AodhKennedy_31.addFeatures(features_1DTY5512AodhKennedy_31);
var lyr_1DTY5512AodhKennedy_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1DTY5512AodhKennedy_31, 
                style: style_1DTY5512AodhKennedy_31,
                popuplayertitle: "1D TY5512 Aodh Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1DTY5512AodhKennedy_31.png" /> 1D TY5512 Aodh Kennedy'
            });
var format_1CTY5514AodhKennedy_32 = new ol.format.GeoJSON();
var features_1CTY5514AodhKennedy_32 = format_1CTY5514AodhKennedy_32.readFeatures(json_1CTY5514AodhKennedy_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1CTY5514AodhKennedy_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1CTY5514AodhKennedy_32.addFeatures(features_1CTY5514AodhKennedy_32);
var lyr_1CTY5514AodhKennedy_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1CTY5514AodhKennedy_32, 
                style: style_1CTY5514AodhKennedy_32,
                popuplayertitle: "1C TY5514 Aodh Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1CTY5514AodhKennedy_32.png" /> 1C TY5514 Aodh Kennedy'
            });
var format_1BTY39291FElizabethKennedy_33 = new ol.format.GeoJSON();
var features_1BTY39291FElizabethKennedy_33 = format_1BTY39291FElizabethKennedy_33.readFeatures(json_1BTY39291FElizabethKennedy_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1BTY39291FElizabethKennedy_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1BTY39291FElizabethKennedy_33.addFeatures(features_1BTY39291FElizabethKennedy_33);
var lyr_1BTY39291FElizabethKennedy_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1BTY39291FElizabethKennedy_33, 
                style: style_1BTY39291FElizabethKennedy_33,
                popuplayertitle: "1B TY39291F Elizabeth Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1BTY39291FElizabethKennedy_33.png" /> 1B TY39291F Elizabeth Kennedy'
            });
var format_1ATY5519ElizabethKennedy_34 = new ol.format.GeoJSON();
var features_1ATY5519ElizabethKennedy_34 = format_1ATY5519ElizabethKennedy_34.readFeatures(json_1ATY5519ElizabethKennedy_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ATY5519ElizabethKennedy_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ATY5519ElizabethKennedy_34.addFeatures(features_1ATY5519ElizabethKennedy_34);
var lyr_1ATY5519ElizabethKennedy_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ATY5519ElizabethKennedy_34, 
                style: style_1ATY5519ElizabethKennedy_34,
                popuplayertitle: "1A TY5519 Elizabeth Kennedy",
                interactive: true,
                title: '<img src="styles/legend/1ATY5519ElizabethKennedy_34.png" /> 1A TY5519 Elizabeth Kennedy'
            });
var format_LoopSubstation5AcresAdditional25Acres_35 = new ol.format.GeoJSON();
var features_LoopSubstation5AcresAdditional25Acres_35 = format_LoopSubstation5AcresAdditional25Acres_35.readFeatures(json_LoopSubstation5AcresAdditional25Acres_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoopSubstation5AcresAdditional25Acres_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoopSubstation5AcresAdditional25Acres_35.addFeatures(features_LoopSubstation5AcresAdditional25Acres_35);
var lyr_LoopSubstation5AcresAdditional25Acres_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoopSubstation5AcresAdditional25Acres_35, 
                style: style_LoopSubstation5AcresAdditional25Acres_35,
                popuplayertitle: "Loop Substation (5 Acres) + Additional 2.5 Acres",
                interactive: true,
    title: 'Loop Substation (5 Acres) + Additional 2.5 Acres<br />\
    <img src="styles/legend/LoopSubstation5AcresAdditional25Acres_35_0.png" /> 2.5 Acres<br />\
    <img src="styles/legend/LoopSubstation5AcresAdditional25Acres_35_1.png" /> 5 Acres<br />'
        });
var format_ResidentialMixed800mCommercial500mHousingCurtilage_36 = new ol.format.GeoJSON();
var features_ResidentialMixed800mCommercial500mHousingCurtilage_36 = format_ResidentialMixed800mCommercial500mHousingCurtilage_36.readFeatures(json_ResidentialMixed800mCommercial500mHousingCurtilage_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialMixed800mCommercial500mHousingCurtilage_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialMixed800mCommercial500mHousingCurtilage_36.addFeatures(features_ResidentialMixed800mCommercial500mHousingCurtilage_36);
var lyr_ResidentialMixed800mCommercial500mHousingCurtilage_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialMixed800mCommercial500mHousingCurtilage_36, 
                style: style_ResidentialMixed800mCommercial500mHousingCurtilage_36,
                popuplayertitle: "Residential + Mixed 800m, Commercial 500m (Housing Curtilage)",
                interactive: true,
                title: '<img src="styles/legend/ResidentialMixed800mCommercial500mHousingCurtilage_36.png" /> Residential + Mixed 800m, Commercial 500m (Housing Curtilage)'
            });
var format_HousingCurtillage800mBuffer_37 = new ol.format.GeoJSON();
var features_HousingCurtillage800mBuffer_37 = format_HousingCurtillage800mBuffer_37.readFeatures(json_HousingCurtillage800mBuffer_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HousingCurtillage800mBuffer_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HousingCurtillage800mBuffer_37.addFeatures(features_HousingCurtillage800mBuffer_37);
var lyr_HousingCurtillage800mBuffer_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HousingCurtillage800mBuffer_37, 
                style: style_HousingCurtillage800mBuffer_37,
                popuplayertitle: "Housing Curtillage 800m Buffer",
                interactive: true,
                title: '<img src="styles/legend/HousingCurtillage800mBuffer_37.png" /> Housing Curtillage 800m Buffer'
            });
var format_NaturalDesignatedAreasMergedTogetherTipperary_38 = new ol.format.GeoJSON();
var features_NaturalDesignatedAreasMergedTogetherTipperary_38 = format_NaturalDesignatedAreasMergedTogetherTipperary_38.readFeatures(json_NaturalDesignatedAreasMergedTogetherTipperary_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NaturalDesignatedAreasMergedTogetherTipperary_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalDesignatedAreasMergedTogetherTipperary_38.addFeatures(features_NaturalDesignatedAreasMergedTogetherTipperary_38);
var lyr_NaturalDesignatedAreasMergedTogetherTipperary_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalDesignatedAreasMergedTogetherTipperary_38, 
                style: style_NaturalDesignatedAreasMergedTogetherTipperary_38,
                popuplayertitle: "Natural Designated Areas Merged Together Tipperary",
                interactive: true,
                title: '<img src="styles/legend/NaturalDesignatedAreasMergedTogetherTipperary_38.png" /> Natural Designated Areas Merged Together Tipperary'
            });
var format_RiversTipperary_39 = new ol.format.GeoJSON();
var features_RiversTipperary_39 = format_RiversTipperary_39.readFeatures(json_RiversTipperary_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversTipperary_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversTipperary_39.addFeatures(features_RiversTipperary_39);
var lyr_RiversTipperary_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversTipperary_39, 
                style: style_RiversTipperary_39,
                popuplayertitle: "Rivers Tipperary",
                interactive: true,
                title: '<img src="styles/legend/RiversTipperary_39.png" /> Rivers Tipperary'
            });
var format_ArchaeologyTipperary_40 = new ol.format.GeoJSON();
var features_ArchaeologyTipperary_40 = format_ArchaeologyTipperary_40.readFeatures(json_ArchaeologyTipperary_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArchaeologyTipperary_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArchaeologyTipperary_40.addFeatures(features_ArchaeologyTipperary_40);
var lyr_ArchaeologyTipperary_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArchaeologyTipperary_40, 
                style: style_ArchaeologyTipperary_40,
                popuplayertitle: "Archaeology Tipperary",
                interactive: true,
                title: '<img src="styles/legend/ArchaeologyTipperary_40.png" /> Archaeology Tipperary'
            });
var format_PowerLinesTipperary_41 = new ol.format.GeoJSON();
var features_PowerLinesTipperary_41 = format_PowerLinesTipperary_41.readFeatures(json_PowerLinesTipperary_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerLinesTipperary_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerLinesTipperary_41.addFeatures(features_PowerLinesTipperary_41);
var lyr_PowerLinesTipperary_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerLinesTipperary_41, 
                style: style_PowerLinesTipperary_41,
                popuplayertitle: "Power Lines Tipperary",
                interactive: true,
                title: '<img src="styles/legend/PowerLinesTipperary_41.png" /> Power Lines Tipperary'
            });
var format_PowerPolesTipperary_42 = new ol.format.GeoJSON();
var features_PowerPolesTipperary_42 = format_PowerPolesTipperary_42.readFeatures(json_PowerPolesTipperary_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerPolesTipperary_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerPolesTipperary_42.addFeatures(features_PowerPolesTipperary_42);
var lyr_PowerPolesTipperary_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerPolesTipperary_42, 
                style: style_PowerPolesTipperary_42,
                popuplayertitle: "Power Poles Tipperary",
                interactive: true,
                title: '<img src="styles/legend/PowerPolesTipperary_42.png" /> Power Poles Tipperary'
            });
var format_10mRoadBuffer_43 = new ol.format.GeoJSON();
var features_10mRoadBuffer_43 = format_10mRoadBuffer_43.readFeatures(json_10mRoadBuffer_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10mRoadBuffer_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10mRoadBuffer_43.addFeatures(features_10mRoadBuffer_43);
var lyr_10mRoadBuffer_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10mRoadBuffer_43, 
                style: style_10mRoadBuffer_43,
                popuplayertitle: "10m Road Buffer",
                interactive: true,
                title: '<img src="styles/legend/10mRoadBuffer_43.png" /> 10m Road Buffer'
            });
var format_Roads_44 = new ol.format.GeoJSON();
var features_Roads_44 = format_Roads_44.readFeatures(json_Roads_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_44.addFeatures(features_Roads_44);
var lyr_Roads_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_44, 
                style: style_Roads_44,
                popuplayertitle: "Roads",
                interactive: true,
                title: '<img src="styles/legend/Roads_44.png" /> Roads'
            });
var format_875mOversail_45 = new ol.format.GeoJSON();
var features_875mOversail_45 = format_875mOversail_45.readFeatures(json_875mOversail_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_875mOversail_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_875mOversail_45.addFeatures(features_875mOversail_45);
var lyr_875mOversail_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_875mOversail_45, 
                style: style_875mOversail_45,
                popuplayertitle: "87.5m Oversail",
                interactive: true,
                title: '<img src="styles/legend/875mOversail_45.png" /> 87.5m Oversail'
            });
var format_IndicativeTurbineLocations25x35Ellipses_46 = new ol.format.GeoJSON();
var features_IndicativeTurbineLocations25x35Ellipses_46 = format_IndicativeTurbineLocations25x35Ellipses_46.readFeatures(json_IndicativeTurbineLocations25x35Ellipses_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicativeTurbineLocations25x35Ellipses_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicativeTurbineLocations25x35Ellipses_46.addFeatures(features_IndicativeTurbineLocations25x35Ellipses_46);
var lyr_IndicativeTurbineLocations25x35Ellipses_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndicativeTurbineLocations25x35Ellipses_46, 
                style: style_IndicativeTurbineLocations25x35Ellipses_46,
                popuplayertitle: "Indicative Turbine Locations 2.5 x 3.5 Ellipses",
                interactive: true,
                title: '<img src="styles/legend/IndicativeTurbineLocations25x35Ellipses_46.png" /> Indicative Turbine Locations 2.5 x 3.5 Ellipses'
            });
var format_IndicativeTurbineLocations_47 = new ol.format.GeoJSON();
var features_IndicativeTurbineLocations_47 = format_IndicativeTurbineLocations_47.readFeatures(json_IndicativeTurbineLocations_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicativeTurbineLocations_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicativeTurbineLocations_47.addFeatures(features_IndicativeTurbineLocations_47);
var lyr_IndicativeTurbineLocations_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndicativeTurbineLocations_47, 
                style: style_IndicativeTurbineLocations_47,
                popuplayertitle: "Indicative Turbine Locations",
                interactive: true,
                title: '<img src="styles/legend/IndicativeTurbineLocations_47.png" /> Indicative Turbine Locations'
            });
var format_EircodesCreating800m_48 = new ol.format.GeoJSON();
var features_EircodesCreating800m_48 = format_EircodesCreating800m_48.readFeatures(json_EircodesCreating800m_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EircodesCreating800m_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EircodesCreating800m_48.addFeatures(features_EircodesCreating800m_48);
var lyr_EircodesCreating800m_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EircodesCreating800m_48, 
                style: style_EircodesCreating800m_48,
                popuplayertitle: "Eircodes Creating 800m",
                interactive: true,
    title: 'Eircodes Creating 800m<br />\
    <img src="styles/legend/EircodesCreating800m_48_0.png" /> Mixed Address<br />\
    <img src="styles/legend/EircodesCreating800m_48_1.png" /> Non Residential Address<br />\
    <img src="styles/legend/EircodesCreating800m_48_2.png" /> Residential Address<br />'
        });
var group_SiteDetails = new ol.layer.Group({
                                layers: [lyr_10mRoadBuffer_43,lyr_Roads_44,lyr_875mOversail_45,lyr_IndicativeTurbineLocations25x35Ellipses_46,lyr_IndicativeTurbineLocations_47,lyr_EircodesCreating800m_48,],
                                fold: "open",
                                title: "Site Details"});
var group_EnvironmentalDesignations = new ol.layer.Group({
                                layers: [lyr_ResidentialMixed800mCommercial500mHousingCurtilage_36,lyr_HousingCurtillage800mBuffer_37,lyr_NaturalDesignatedAreasMergedTogetherTipperary_38,lyr_RiversTipperary_39,lyr_ArchaeologyTipperary_40,lyr_PowerLinesTipperary_41,lyr_PowerPolesTipperary_42,],
                                fold: "open",
                                title: "Environmental Designations"});
var group_Land = new ol.layer.Group({
                                layers: [lyr_2CTY19488FShemDrowneLimited_6,lyr_2BTY58716FShemDrowneLimited_7,lyr_2ATY14443FShemDrowneLimited_8,lyr_1ZTY19489FShemDrowneLimited_9,lyr_1YTY6134FShemDrowneLimited_10,lyr_1XTY19490FShemDrowneLimited_11,lyr_1WTY45210FShemDrowneLimited_12,lyr_1VTY52569FShemDrowneLimited_13,lyr_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14,lyr_1TTY5081LouisRonan_15,lyr_1STY58758FJaneRonan_16,lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17,lyr_1QTY6133FJacquelineRonanDeirdreRonan_18,lyr_1PTY69134FLouisRonan_19,lyr_1OTY37566FLouisRonan_20,lyr_1NTY35720DavidMRonan_21,lyr_1MTY51973FJacquelineRonan_22,lyr_1LTY28062FGerardODonnell_23,lyr_1KTY19477SeamusLyonsAccess_24,lyr_1JTY5082LiamFrankQuirke_25,lyr_1ITY17039PatrickMaher_26,lyr_1HTY5080LouisRonan_27,lyr_1GTY21547RobertWalsh_28,lyr_1FTY11666PatrickWalshAileenWalsh_29,lyr_1ETY21679AodhKennedy_30,lyr_1DTY5512AodhKennedy_31,lyr_1CTY5514AodhKennedy_32,lyr_1BTY39291FElizabethKennedy_33,lyr_1ATY5519ElizabethKennedy_34,lyr_LoopSubstation5AcresAdditional25Acres_35,],
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

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_TipperaryBorder_2.setVisible(true);lyr_1750mSiteBuffer10xRD_3.setVisible(true);lyr_TurbineDistancestoEachother_4.setVisible(true);lyr_TurbineDistancestoOtherFeatures_5.setVisible(true);lyr_2CTY19488FShemDrowneLimited_6.setVisible(true);lyr_2BTY58716FShemDrowneLimited_7.setVisible(true);lyr_2ATY14443FShemDrowneLimited_8.setVisible(true);lyr_1ZTY19489FShemDrowneLimited_9.setVisible(true);lyr_1YTY6134FShemDrowneLimited_10.setVisible(true);lyr_1XTY19490FShemDrowneLimited_11.setVisible(true);lyr_1WTY45210FShemDrowneLimited_12.setVisible(true);lyr_1VTY52569FShemDrowneLimited_13.setVisible(true);lyr_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14.setVisible(true);lyr_1TTY5081LouisRonan_15.setVisible(true);lyr_1STY58758FJaneRonan_16.setVisible(true);lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17.setVisible(true);lyr_1QTY6133FJacquelineRonanDeirdreRonan_18.setVisible(true);lyr_1PTY69134FLouisRonan_19.setVisible(true);lyr_1OTY37566FLouisRonan_20.setVisible(true);lyr_1NTY35720DavidMRonan_21.setVisible(true);lyr_1MTY51973FJacquelineRonan_22.setVisible(true);lyr_1LTY28062FGerardODonnell_23.setVisible(true);lyr_1KTY19477SeamusLyonsAccess_24.setVisible(true);lyr_1JTY5082LiamFrankQuirke_25.setVisible(true);lyr_1ITY17039PatrickMaher_26.setVisible(true);lyr_1HTY5080LouisRonan_27.setVisible(true);lyr_1GTY21547RobertWalsh_28.setVisible(true);lyr_1FTY11666PatrickWalshAileenWalsh_29.setVisible(true);lyr_1ETY21679AodhKennedy_30.setVisible(true);lyr_1DTY5512AodhKennedy_31.setVisible(true);lyr_1CTY5514AodhKennedy_32.setVisible(true);lyr_1BTY39291FElizabethKennedy_33.setVisible(true);lyr_1ATY5519ElizabethKennedy_34.setVisible(true);lyr_LoopSubstation5AcresAdditional25Acres_35.setVisible(true);lyr_ResidentialMixed800mCommercial500mHousingCurtilage_36.setVisible(true);lyr_HousingCurtillage800mBuffer_37.setVisible(true);lyr_NaturalDesignatedAreasMergedTogetherTipperary_38.setVisible(true);lyr_RiversTipperary_39.setVisible(true);lyr_ArchaeologyTipperary_40.setVisible(true);lyr_PowerLinesTipperary_41.setVisible(true);lyr_PowerPolesTipperary_42.setVisible(true);lyr_10mRoadBuffer_43.setVisible(true);lyr_Roads_44.setVisible(true);lyr_875mOversail_45.setVisible(true);lyr_IndicativeTurbineLocations25x35Ellipses_46.setVisible(true);lyr_IndicativeTurbineLocations_47.setVisible(true);lyr_EircodesCreating800m_48.setVisible(true);
var layersList = [group_MoorstownRenewableEnergyProject,group_ExtraMeasurements,group_Land,group_EnvironmentalDesignations,group_SiteDetails];
lyr_TipperaryBorder_2.set('fieldAliases', {'COUNTY': 'COUNTY', });
lyr_1750mSiteBuffer10xRD_3.set('fieldAliases', {});
lyr_TurbineDistancestoEachother_4.set('fieldAliases', {'Line Dista': 'Line Distance', });
lyr_TurbineDistancestoOtherFeatures_5.set('fieldAliases', {'Turbine_ID': 'Turbine_ID', 'Feature_Ty': 'Feature_Ty', 'Distance_m': 'Distance_m', 'Shape_Leng': 'Shape_Leng', });
lyr_2CTY19488FShemDrowneLimited_6.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'validFrom': 'validFrom', 'validTo': 'validTo', });
lyr_2BTY58716FShemDrowneLimited_7.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'validFrom': 'validFrom', 'validTo': 'validTo', });
lyr_2ATY14443FShemDrowneLimited_8.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'validFrom': 'validFrom', 'validTo': 'validTo', });
lyr_1ZTY19489FShemDrowneLimited_9.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'validFrom': 'validFrom', 'validTo': 'validTo', });
lyr_1YTY6134FShemDrowneLimited_10.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'validFrom': 'validFrom', 'validTo': 'validTo', });
lyr_1XTY19490FShemDrowneLimited_11.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'validFrom': 'validFrom', 'validTo': 'validTo', });
lyr_1WTY45210FShemDrowneLimited_12.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'validFrom': 'validFrom', 'validTo': 'validTo', });
lyr_1VTY52569FShemDrowneLimited_13.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'label': 'label', 'nationalCa': 'nationalCa', 'validFrom': 'validFrom', 'validTo': 'validTo', });
lyr_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1TTY5081LouisRonan_15.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1STY58758FJaneRonan_16.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1QTY6133FJacquelineRonanDeirdreRonan_18.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1PTY69134FLouisRonan_19.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1OTY37566FLouisRonan_20.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1NTY35720DavidMRonan_21.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1MTY51973FJacquelineRonan_22.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1LTY28062FGerardODonnell_23.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1KTY19477SeamusLyonsAccess_24.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1JTY5082LiamFrankQuirke_25.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1ITY17039PatrickMaher_26.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1HTY5080LouisRonan_27.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1GTY21547RobertWalsh_28.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1FTY11666PatrickWalshAileenWalsh_29.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1ETY21679AodhKennedy_30.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', 'versionId': 'versionId', });
lyr_1DTY5512AodhKennedy_31.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1CTY5514AodhKennedy_32.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1BTY39291FElizabethKennedy_33.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_1ATY5519ElizabethKennedy_34.set('fieldAliases', {'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'namespace': 'namespace', });
lyr_LoopSubstation5AcresAdditional25Acres_35.set('fieldAliases', {'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_ResidentialMixed800mCommercial500mHousingCurtilage_36.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HousingCurtillage800mBuffer_37.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NaturalDesignatedAreasMergedTogetherTipperary_38.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITE_NAME': 'SITE_NAME', 'COUNTY': 'COUNTY', 'VERSION': 'VERSION', 'HA': 'HA', 'Source_CRS': 'Source_CRS', 'SourcScale': 'SourcScale', 'Shape_Leng': 'Shape_Leng', 'URL': 'URL', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'GlobalID': 'GlobalID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_RiversTipperary_39.set('fieldAliases', {'EU_CD': 'EU_CD', 'NAME': 'NAME', 'MS_CD': 'MS_CD', 'REGION_CD': 'REGION_CD', 'INS_WHEN': 'INS_WHEN', 'INS_BY': 'INS_BY', 'BASIN_CD': 'BASIN_CD', 'LAT': 'LAT', 'LON': 'LON', 'LENGTHKM': 'LENGTHKM', 'SUB_CD': 'SUB_CD', 'DateChange': 'DateChange', 'Change': 'Change', 'GEOLOGY': 'GEOLOGY', 'AreaKm2': 'AreaKm2', 'AreaHectar': 'AreaHectar', 'Slope': 'Slope', 'Altitude': 'Altitude', 'WaterManag': 'WaterManag', 'EdenEntity': 'EdenEntity', 'Easting': 'Easting', 'Northing': 'Northing', 'LocalAutho': 'LocalAutho', 'SYSTEM': 'SYSTEM', 'TYPE': 'TYPE', 'ALT_CAT': 'ALT_CAT', 'SIZE_CAT': 'SIZE_CAT', 'DIST_CD': 'DIST_CD', 'ProtectedA': 'ProtectedA', 'WiseRefere': 'WiseRefere', 'HydroArea': 'HydroArea', 'StnDefinin': 'StnDefinin', });
lyr_ArchaeologyTipperary_40.set('fieldAliases', {'ENTITY_ID': 'ENTITY_ID', 'CLASS_CODE': 'CLASS_CODE', 'SMRS': 'SMRS', 'COUNTY': 'COUNTY', 'TOWNLAND': 'TOWNLAND', 'ZONE_ID': 'ZONE_ID', 'ITM_E': 'ITM_E', 'ITM_N': 'ITM_N', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MONUMENT_C': 'MONUMENT_C', 'FIRST_EDIT': 'FIRST_EDIT', 'LATEST_EDI': 'LATEST_EDI', 'WEBSITE_LI': 'WEBSITE_LI', 'WEB_NOTES': 'WEB_NOTES', });
lyr_PowerLinesTipperary_41.set('fieldAliases', {'power': 'power', 'voltage': 'voltage', 'operator': 'operator', 'name': 'name', 'substation': 'substation', });
lyr_PowerPolesTipperary_42.set('fieldAliases', {'power': 'power', 'was_voltag': 'was_voltag', 'telecom': 'telecom', });
lyr_10mRoadBuffer_43.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Roads_44.set('fieldAliases', {'highway': 'highway', 'Shape_Leng': 'Shape_Leng', });
lyr_875mOversail_45.set('fieldAliases', {'BUFF_DIST': 'BUFF_DIST', 'Shape_Area': 'Shape_Area', });
lyr_IndicativeTurbineLocations25x35Ellipses_46.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RotDiam': 'RotDiam', 'Direct': 'Direct', 'WFactor': 'WFactor', 'LFactor': 'LFactor', 'Width': 'Width', 'Length': 'Length', });
lyr_IndicativeTurbineLocations_47.set('fieldAliases', {'Name': 'Name', });
lyr_EircodesCreating800m_48.set('fieldAliases', {'EIRCODE': 'EIRCODE', 'ADDR_LINE1': 'ADDR_LINE1', 'ADDR_LIN_1': 'ADDR_LIN_1', 'ADDR_LIN_2': 'ADDR_LIN_2', 'ADDR_LIN_3': 'ADDR_LIN_3', 'ADDR_LIN_4': 'ADDR_LIN_4', 'ADDR_LIN_5': 'ADDR_LIN_5', 'ADDRESS_TY': 'ADDRESS_TY', 'NEAR_DIST': 'NEAR_DIST', 'Folio': 'Folio', 'Name': 'Name', });
lyr_TipperaryBorder_2.set('fieldImages', {'COUNTY': 'TextEdit', });
lyr_1750mSiteBuffer10xRD_3.set('fieldImages', {});
lyr_TurbineDistancestoEachother_4.set('fieldImages', {'Line Dista': 'TextEdit', });
lyr_TurbineDistancestoOtherFeatures_5.set('fieldImages', {'Turbine_ID': 'TextEdit', 'Feature_Ty': 'TextEdit', 'Distance_m': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_2CTY19488FShemDrowneLimited_6.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'validFrom': 'TextEdit', 'validTo': 'Range', });
lyr_2BTY58716FShemDrowneLimited_7.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'validFrom': 'TextEdit', 'validTo': 'Range', });
lyr_2ATY14443FShemDrowneLimited_8.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'validFrom': 'TextEdit', 'validTo': 'Range', });
lyr_1ZTY19489FShemDrowneLimited_9.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'validFrom': 'TextEdit', 'validTo': 'Range', });
lyr_1YTY6134FShemDrowneLimited_10.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'validFrom': 'TextEdit', 'validTo': 'Range', });
lyr_1XTY19490FShemDrowneLimited_11.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'validFrom': 'TextEdit', 'validTo': 'Range', });
lyr_1WTY45210FShemDrowneLimited_12.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'validFrom': 'TextEdit', 'validTo': 'Range', });
lyr_1VTY52569FShemDrowneLimited_13.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'validFrom': 'TextEdit', 'validTo': 'Range', });
lyr_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1TTY5081LouisRonan_15.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1STY58758FJaneRonan_16.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1QTY6133FJacquelineRonanDeirdreRonan_18.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1PTY69134FLouisRonan_19.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1OTY37566FLouisRonan_20.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1NTY35720DavidMRonan_21.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1MTY51973FJacquelineRonan_22.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1LTY28062FGerardODonnell_23.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1KTY19477SeamusLyonsAccess_24.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1JTY5082LiamFrankQuirke_25.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1ITY17039PatrickMaher_26.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1HTY5080LouisRonan_27.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1GTY21547RobertWalsh_28.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1FTY11666PatrickWalshAileenWalsh_29.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1ETY21679AodhKennedy_30.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', });
lyr_1DTY5512AodhKennedy_31.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1CTY5514AodhKennedy_32.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1BTY39291FElizabethKennedy_33.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_1ATY5519ElizabethKennedy_34.set('fieldImages', {'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'namespace': 'TextEdit', });
lyr_LoopSubstation5AcresAdditional25Acres_35.set('fieldImages', {'Name': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ResidentialMixed800mCommercial500mHousingCurtilage_36.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HousingCurtillage800mBuffer_37.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NaturalDesignatedAreasMergedTogetherTipperary_38.set('fieldImages', {'SITECODE': 'TextEdit', 'SITE_NAME': 'TextEdit', 'COUNTY': 'TextEdit', 'VERSION': 'TextEdit', 'HA': 'TextEdit', 'Source_CRS': 'TextEdit', 'SourcScale': 'TextEdit', 'Shape_Leng': 'TextEdit', 'URL': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RiversTipperary_39.set('fieldImages', {'EU_CD': 'TextEdit', 'NAME': 'TextEdit', 'MS_CD': 'TextEdit', 'REGION_CD': 'TextEdit', 'INS_WHEN': 'DateTime', 'INS_BY': 'TextEdit', 'BASIN_CD': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'LENGTHKM': 'TextEdit', 'SUB_CD': 'TextEdit', 'DateChange': 'DateTime', 'Change': 'TextEdit', 'GEOLOGY': 'TextEdit', 'AreaKm2': 'TextEdit', 'AreaHectar': 'TextEdit', 'Slope': 'TextEdit', 'Altitude': 'TextEdit', 'WaterManag': 'TextEdit', 'EdenEntity': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'LocalAutho': 'TextEdit', 'SYSTEM': 'TextEdit', 'TYPE': 'TextEdit', 'ALT_CAT': 'TextEdit', 'SIZE_CAT': 'TextEdit', 'DIST_CD': 'TextEdit', 'ProtectedA': 'TextEdit', 'WiseRefere': 'TextEdit', 'HydroArea': 'TextEdit', 'StnDefinin': 'TextEdit', });
lyr_ArchaeologyTipperary_40.set('fieldImages', {'ENTITY_ID': 'TextEdit', 'CLASS_CODE': 'TextEdit', 'SMRS': 'TextEdit', 'COUNTY': 'TextEdit', 'TOWNLAND': 'TextEdit', 'ZONE_ID': 'TextEdit', 'ITM_E': 'TextEdit', 'ITM_N': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MONUMENT_C': 'TextEdit', 'FIRST_EDIT': 'TextEdit', 'LATEST_EDI': 'TextEdit', 'WEBSITE_LI': 'TextEdit', 'WEB_NOTES': 'TextEdit', });
lyr_PowerLinesTipperary_41.set('fieldImages', {'power': 'TextEdit', 'voltage': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'substation': 'TextEdit', });
lyr_PowerPolesTipperary_42.set('fieldImages', {'power': 'TextEdit', 'was_voltag': 'TextEdit', 'telecom': 'TextEdit', });
lyr_10mRoadBuffer_43.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Roads_44.set('fieldImages', {'highway': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_875mOversail_45.set('fieldImages', {'BUFF_DIST': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IndicativeTurbineLocations25x35Ellipses_46.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RotDiam': 'TextEdit', 'Direct': 'TextEdit', 'WFactor': 'TextEdit', 'LFactor': 'TextEdit', 'Width': 'TextEdit', 'Length': 'TextEdit', });
lyr_IndicativeTurbineLocations_47.set('fieldImages', {'Name': 'TextEdit', });
lyr_EircodesCreating800m_48.set('fieldImages', {'EIRCODE': 'TextEdit', 'ADDR_LINE1': 'TextEdit', 'ADDR_LIN_1': 'TextEdit', 'ADDR_LIN_2': 'TextEdit', 'ADDR_LIN_3': 'TextEdit', 'ADDR_LIN_4': 'TextEdit', 'ADDR_LIN_5': 'TextEdit', 'ADDRESS_TY': 'TextEdit', 'NEAR_DIST': 'TextEdit', 'Folio': 'TextEdit', 'Name': 'TextEdit', });
lyr_TipperaryBorder_2.set('fieldLabels', {'COUNTY': 'no label', });
lyr_1750mSiteBuffer10xRD_3.set('fieldLabels', {});
lyr_TurbineDistancestoEachother_4.set('fieldLabels', {'Line Dista': 'header label - always visible', });
lyr_TurbineDistancestoOtherFeatures_5.set('fieldLabels', {'Turbine_ID': 'no label', 'Feature_Ty': 'no label', 'Distance_m': 'header label - always visible', 'Shape_Leng': 'no label', });
lyr_2CTY19488FShemDrowneLimited_6.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'validFrom': 'no label', 'validTo': 'no label', });
lyr_2BTY58716FShemDrowneLimited_7.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'validFrom': 'no label', 'validTo': 'no label', });
lyr_2ATY14443FShemDrowneLimited_8.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'validFrom': 'no label', 'validTo': 'no label', });
lyr_1ZTY19489FShemDrowneLimited_9.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'validFrom': 'no label', 'validTo': 'no label', });
lyr_1YTY6134FShemDrowneLimited_10.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'validFrom': 'no label', 'validTo': 'no label', });
lyr_1XTY19490FShemDrowneLimited_11.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'validFrom': 'no label', 'validTo': 'no label', });
lyr_1WTY45210FShemDrowneLimited_12.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'validFrom': 'no label', 'validTo': 'no label', });
lyr_1VTY52569FShemDrowneLimited_13.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'validFrom': 'no label', 'validTo': 'no label', });
lyr_1UTY57105FRichardPerkinsJonahWraggGavinWraggRosemarySusanPerkins_14.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'no label', });
lyr_1TTY5081LouisRonan_15.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1STY58758FJaneRonan_16.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1RTY38596FDeirdreRonanJacquelineRonanJohnFRonan_17.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1QTY6133FJacquelineRonanDeirdreRonan_18.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1PTY69134FLouisRonan_19.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1OTY37566FLouisRonan_20.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1NTY35720DavidMRonan_21.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1MTY51973FJacquelineRonan_22.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1LTY28062FGerardODonnell_23.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1KTY19477SeamusLyonsAccess_24.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1JTY5082LiamFrankQuirke_25.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1ITY17039PatrickMaher_26.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1HTY5080LouisRonan_27.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1GTY21547RobertWalsh_28.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1FTY11666PatrickWalshAileenWalsh_29.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1ETY21679AodhKennedy_30.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', 'versionId': 'no label', });
lyr_1DTY5512AodhKennedy_31.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1CTY5514AodhKennedy_32.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1BTY39291FElizabethKennedy_33.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_1ATY5519ElizabethKennedy_34.set('fieldLabels', {'areaValue': 'no label', 'areaValue_': 'no label', 'namespace': 'inline label - always visible', });
lyr_LoopSubstation5AcresAdditional25Acres_35.set('fieldLabels', {'Name': 'inline label - always visible', 'Shape_Area': 'no label', });
lyr_ResidentialMixed800mCommercial500mHousingCurtilage_36.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_HousingCurtillage800mBuffer_37.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_NaturalDesignatedAreasMergedTogetherTipperary_38.set('fieldLabels', {'SITECODE': 'no label', 'SITE_NAME': 'no label', 'COUNTY': 'no label', 'VERSION': 'no label', 'HA': 'no label', 'Source_CRS': 'no label', 'SourcScale': 'no label', 'Shape_Leng': 'no label', 'URL': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'GlobalID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_RiversTipperary_39.set('fieldLabels', {'EU_CD': 'no label', 'NAME': 'no label', 'MS_CD': 'no label', 'REGION_CD': 'no label', 'INS_WHEN': 'no label', 'INS_BY': 'no label', 'BASIN_CD': 'no label', 'LAT': 'no label', 'LON': 'no label', 'LENGTHKM': 'no label', 'SUB_CD': 'no label', 'DateChange': 'no label', 'Change': 'no label', 'GEOLOGY': 'no label', 'AreaKm2': 'no label', 'AreaHectar': 'no label', 'Slope': 'no label', 'Altitude': 'no label', 'WaterManag': 'no label', 'EdenEntity': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'LocalAutho': 'no label', 'SYSTEM': 'no label', 'TYPE': 'no label', 'ALT_CAT': 'no label', 'SIZE_CAT': 'no label', 'DIST_CD': 'no label', 'ProtectedA': 'no label', 'WiseRefere': 'no label', 'HydroArea': 'no label', 'StnDefinin': 'no label', });
lyr_ArchaeologyTipperary_40.set('fieldLabels', {'ENTITY_ID': 'no label', 'CLASS_CODE': 'no label', 'SMRS': 'no label', 'COUNTY': 'no label', 'TOWNLAND': 'no label', 'ZONE_ID': 'no label', 'ITM_E': 'no label', 'ITM_N': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'MONUMENT_C': 'no label', 'FIRST_EDIT': 'no label', 'LATEST_EDI': 'no label', 'WEBSITE_LI': 'no label', 'WEB_NOTES': 'no label', });
lyr_PowerLinesTipperary_41.set('fieldLabels', {'power': 'no label', 'voltage': 'no label', 'operator': 'no label', 'name': 'no label', 'substation': 'no label', });
lyr_PowerPolesTipperary_42.set('fieldLabels', {'power': 'no label', 'was_voltag': 'no label', 'telecom': 'no label', });
lyr_10mRoadBuffer_43.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Roads_44.set('fieldLabels', {'highway': 'no label', 'Shape_Leng': 'no label', });
lyr_875mOversail_45.set('fieldLabels', {'BUFF_DIST': 'no label', 'Shape_Area': 'no label', });
lyr_IndicativeTurbineLocations25x35Ellipses_46.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'RotDiam': 'no label', 'Direct': 'no label', 'WFactor': 'no label', 'LFactor': 'no label', 'Width': 'no label', 'Length': 'no label', });
lyr_IndicativeTurbineLocations_47.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_EircodesCreating800m_48.set('fieldLabels', {'EIRCODE': 'no label', 'ADDR_LINE1': 'no label', 'ADDR_LIN_1': 'no label', 'ADDR_LIN_2': 'no label', 'ADDR_LIN_3': 'no label', 'ADDR_LIN_4': 'no label', 'ADDR_LIN_5': 'no label', 'ADDRESS_TY': 'no label', 'NEAR_DIST': 'no label', 'Folio': 'no label', 'Name': 'no label', });
lyr_EircodesCreating800m_48.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});