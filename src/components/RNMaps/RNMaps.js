import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Mapview, { AnimatedRegion, MarkerAnimated, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { LocationMarker } from './LocationMarker';
import { OriginMaker } from './OriginMaker';
import { useTheme } from '@react-navigation/native';
import { StatusBarHeight } from '../StatusBar';
import { close_background, close_icon, compass_icon, route_pin } from '../../assets/icons';

const screen = Dimensions.get('window');
const RNMaps = () => {
    const { colors } = useTheme();
    const MapRef = useRef();
    const MarkerRef = useRef();


    useEffect(() => {

    }, []);

    function decodePolyline(encoded) {
        if (!encoded) {
            return [];
        }
        var poly = [];
        var index = 0, len = encoded?.length;
        var lat = 0, lng = 0;

        while (index < len) {
            var b, shift = 0, result = 0;

            do {
                b = encoded.charCodeAt(index++) - 63;
                result = result | ((b & 0x1f) << shift);
                shift += 5;
            } while (b >= 0x20);

            var dlat = (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            lat += dlat;

            shift = 0;
            result = 0;

            do {
                b = encoded.charCodeAt(index++) - 63;
                result = result | ((b & 0x1f) << shift);
                shift += 5;
            } while (b >= 0x20);

            var dlng = (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            lng += dlng;

            var p = {
                latitude: lat / 1e5,
                longitude: lng / 1e5,
            };
            poly.push(p);
        }
        return poly;
    }

    return (
        <View style={{ flex: 1, }}>
            <Mapview
                style={{ ...StyleSheet.absoluteFillObject }}
                // initialRegion={{
                //     latitude: 17.453835,
                //     longitude: 78.38268859999999,
                //     latitudeDelta: 17.453835,
                //     longitudeDelta: 78.38268859999999,
                // }}
                initialCamera={{
                    center: {
                        latitude: 17.453835,
                        longitude: 78.38268859999999,
                    },
                    pitch: 45,
                    heading: 90,
                    altitude: 1000,
                    zoom: 10,
                }}
                mapType='standard'
                annotations={20}
                ref={MapRef}
                // provider={PROVIDER_GOOGLE}
                compassStyle={{
                    bottom: 20,
                    right: 30
                }}
                showsTraffic={false}
                showsCompass={false}
                // onLayout={(data) => { }}
                // onMapReady={(data) => { }}
                showsMyLocationButton={true}
                showsUserLocation={true}
                followsUserLocation={true}
                userLocationPriority={'high'}
                loadingEnabled={true}
                minZoomLevel={15}
                maxZoomLevel={50}
                zoom={15}
                onPress={() => {
                    // MapRef?.current?.snapTo(1);
                    // MarkerRef?.current?.snapTo(2);
                }}
            >
                {results?.map((value, index) => (
                    <LocationMarker key={index} data={value} coordinate={{ latitude: value?.geometry?.location?.lat, longitude: value?.geometry?.location?.lng }} />
                ))}

                {/* <Polyline
                    coordinates={decodePolyline('sloiBsul}Mm@EcAc@mCMGfBI|ASlDMfD?tACf@KLOLMJ`@}Hb@eKoESeBM_BKR{@gEw@UEKABQmB?m@??s@@{A')}
                    strokeWidth={10}
                    strokeColor={'#bc00636b'}
                    lineCap={'square'}
                />
                <OriginMaker MarkerRef={MarkerRef} coordinate={{ latitude: 17.45114, longitude: 78.3857 }} /> */}
            </Mapview>

            {/* <View style={{ position: 'absolute', width: '100%', paddingHorizontal: 20, top: StatusBarHeight }}>
                <View style={{ height: 73, backgroundColor: colors?.primary, borderRadius: (73 / 2), justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                    <View style={{ width: 56, height: 56, borderRadius: (56 / 2), backgroundColor: colors?.white, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={compass_icon} resizeMode='contain' style={{ width: 24, height: 24 }} />
                    </View>
                    <View style={{ paddingHorizontal: 15 }}>
                        <Text numberOfLines={1} style={{ color: colors?.white, fontSize: 20, fontFamily: 'Jost-SemiBold' }}>To Trantow Courts Street</Text>
                        <Text numberOfLines={1} style={{ color: colors?.secondary, fontSize: 14, fontFamily: 'Jost-Medium' }}>500m</Text>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
                <View style={{ height: 102, backgroundColor: colors?.primary, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                    <Image source={route_pin} resizeMode='contain' style={{ width: 56, height: 56 }} />
                    <View style={{ paddingHorizontal: 15 }}>
                        <Text numberOfLines={1} style={{ color: colors?.white, fontSize: 20, fontFamily: 'Jost-SemiBold' }}>San Manolia Parking</Text>
                        <Text numberOfLines={1} style={{ color: colors?.secondary, fontSize: 14, fontFamily: 'Jost-Medium' }}>9569, Trantow Courts</Text>
                    </View>
                    <View style={{ flexGrow: 1 }} />
                    <Pressable>
                        <ImageBackground source={close_background} style={{ width: 56, height: 56, borderRadius: (56 / 2), backgroundColor: colors?.white, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={close_icon} resizeMode='contain' style={{ width: 15, height: 15 }} />
                        </ImageBackground>
                    </Pressable>
                </View>
            </View> */}
        </View>
    )
}

export default RNMaps

const results = [
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.453835,
                "lng": 78.38268859999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4551181302915,
                    "lng": 78.38415843029151
                },
                "southwest": {
                    "lat": 17.4524201697085,
                    "lng": 78.3814604697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "MYLES SELF DRIVE - parking, Hyderabad, Telangana",
        "photos": [
            {
                "height": 2610,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107617324815049388550\">gautam m</a>"
                ],
                "photo_reference": "AUacShggcoGErC_OAAHJKDFeab_QVbwmQ0ayHwxda4qg3vrnlnuLgmPM_fFg2EMpjm4Ed2Tdp2Ti9G7_l9JAHruJzZwQkn5NogX4pBnO1uzyRFRTjDgSRW9-04yNBS0KPV5lykfCaoaReVihfA02BCP8Apuv372QMUYeRRBZ7ysJFvlYiuuN",
                "width": 4640
            }
        ],
        "place_id": "ChIJX3yUX9iTyzsRwlELyTELBSE",
        "plus_code": {
            "compound_code": "F93M+G3 Khanammet, Telangana, India",
            "global_code": "7J9WF93M+G3"
        },
        "rating": 3.3,
        "reference": "ChIJX3yUX9iTyzsRwlELyTELBSE",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 15,
        "vicinity": "1-2/1/24/A/1,7,plot no 17, Hitech City Main Road, Surya Enclave, Khanammet"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4550809,
                "lng": 78.38172659999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4564409302915,
                    "lng": 78.3830914802915
                },
                "southwest": {
                    "lat": 17.4537429697085,
                    "lng": 78.38039351970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Parking",
        "place_id": "ChIJCYnhS9iTyzsRIGs8HYw6qfA",
        "plus_code": {
            "compound_code": "F94J+2M Khanammet, Telangana, India",
            "global_code": "7J9WF94J+2M"
        },
        "rating": 4.6,
        "reference": "ChIJCYnhS9iTyzsRIGs8HYw6qfA",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 5,
        "vicinity": "1-2/1/24/A/1,7,plot no 17, Hitech City Main Road, Khanammet"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4363438,
                "lng": 78.38201289999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4375978802915,
                    "lng": 78.3832736302915
                },
                "southwest": {
                    "lat": 17.4348999197085,
                    "lng": 78.38057566970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Deloitte NCP Parking",
        "place_id": "ChIJRQE5-OKTyzsR1SGA461SaAk",
        "plus_code": {
            "compound_code": "C9PJ+GR Madhapur, Hyderabad, Telangana, India",
            "global_code": "7J9WC9PJ+GR"
        },
        "rating": 5,
        "reference": "ChIJRQE5-OKTyzsR1SGA461SaAk",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2,
        "vicinity": "20, Inorbit Mall Road, Mindspace, Vittal Rao Nagar, Madhapur"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4474932,
                "lng": 78.36320769999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4489032802915,
                    "lng": 78.36465893029151
                },
                "southwest": {
                    "lat": 17.44620531970849,
                    "lng": 78.36196096970851
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Radisson Parking Lot",
        "photos": [
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109173672537100605818\">anubhav nagal</a>"
                ],
                "photo_reference": "AUacShgs6YvCoDshBjFi1ZVQ3S1wlxfe1I0AIGSqiMo_JltXT6ifMJGuzgTWnfOQJNybq9SE2YeIh4n8tfjL3YEYzaCYKjA6EksFX_UcmHRbBQpzKina116BCrc9EonMQnhSZ1Dt61FObcLm6_993Dzvu-JOsUyT7UWskelnxPXp1aXkMu48",
                "width": 3036
            }
        ],
        "place_id": "ChIJO4xx8cCTyzsRxJ3b5z4AJSU",
        "rating": 4,
        "reference": "ChIJO4xx8cCTyzsRxJ3b5z4AJSU",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 139,
        "vicinity": "C9W7+X7W, Anjaiah Nagar, Gachibowli"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.46657189999999,
                "lng": 78.36758979999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4678901302915,
                    "lng": 78.3688313802915
                },
                "southwest": {
                    "lat": 17.46519216970849,
                    "lng": 78.36613341970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Parking",
        "place_id": "ChIJ02KppsyTyzsRGBn4LcqnCoU",
        "plus_code": {
            "compound_code": "F989+J2 Hyderabad, Telangana, India",
            "global_code": "7J9WF989+J2"
        },
        "rating": 3,
        "reference": "ChIJ02KppsyTyzsRGBn4LcqnCoU",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1,
        "vicinity": "1, Gachibowli - Miyapur Road, Hanuman Nagar, Shilpa Hills, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4483369,
                "lng": 78.3840713
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4496877302915,
                    "lng": 78.38543548029152
                },
                "southwest": {
                    "lat": 17.4469897697085,
                    "lng": 78.3827375197085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Galleria Mall Exit",
        "place_id": "ChIJg-ofmZGTyzsRO8zw_xABsbY",
        "reference": "ChIJg-ofmZGTyzsRO8zw_xABsbY",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "C9XM+8JP, Jaihind Enclave, Madhapur, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4537996,
                "lng": 78.38370189999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4552287802915,
                    "lng": 78.3849721802915
                },
                "southwest": {
                    "lat": 17.4525308197085,
                    "lng": 78.38227421970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Car Parking Zone",
        "place_id": "ChIJgTPad4WTyzsRnqfXGSBCMcg",
        "plus_code": {
            "compound_code": "F93M+GF Hyderabad, Telangana, India",
            "global_code": "7J9WF93M+GF"
        },
        "reference": "ChIJgTPad4WTyzsRnqfXGSBCMcg",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "HIGH SCHOOL, MERIDIAN SCHOOL-1, Siddhi Vinayak Nagar, Madhapur, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4474255,
                "lng": 78.3856863
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4487126802915,
                    "lng": 78.3870314302915
                },
                "southwest": {
                    "lat": 17.4460147197085,
                    "lng": 78.38433346970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Nisum Technologies Parking",
        "place_id": "ChIJ-ceCR2CRyzsR92eewzU2SRE",
        "rating": 4.3,
        "reference": "ChIJ-ceCR2CRyzsR92eewzU2SRE",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 3,
        "vicinity": "C9WP+X7F, Image Gardens Road, VIP Hills, Jaihind Enclave, Madhapur"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4476255,
                "lng": 78.3845608
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4489845802915,
                    "lng": 78.38589358029151
                },
                "southwest": {
                    "lat": 17.44628661970849,
                    "lng": 78.38319561970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Gallera mall entry",
        "place_id": "ChIJF2d8CdqRyzsRrWF3bi04F0o",
        "reference": "ChIJF2d8CdqRyzsRrWF3bi04F0o",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "C9XM+3R3, Jaihind Enclave, Madhapur, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4504034,
                "lng": 78.3818088
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4517907802915,
                    "lng": 78.38321723029151
                },
                "southwest": {
                    "lat": 17.4490928197085,
                    "lng": 78.3805192697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Parking place",
        "place_id": "ChIJjf6S8wqTyzsRnY1Z5CC4LuQ",
        "plus_code": {
            "compound_code": "F92J+5P Hyderabad, Telangana, India",
            "global_code": "7J9WF92J+5P"
        },
        "reference": "ChIJjf6S8wqTyzsRnY1Z5CC4LuQ",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Bus Stop, Hitech City Road, Jaihind Enclave, HITEC City, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4513661,
                "lng": 78.38166629999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4526454302915,
                    "lng": 78.3829392302915
                },
                "southwest": {
                    "lat": 17.4499474697085,
                    "lng": 78.38024126970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Mehfil Parking",
        "photos": [
            {
                "height": 4096,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112764446237086375318\">Pavan Reddy</a>"
                ],
                "photo_reference": "AUacShibXDjE7fgME5PeacdxC6nr9H2s6YA90Xb0ljlE6B6DAaCQGJOHluD6Ft_wW943om6oVZqSXkXfIvtUc0MYQn9-d67ns1eRqvto_4mtJd2M84N3YkkvXiGMvikWVnmQydfTjPSgdFIr7CNJ-oTp_gboEkzOjuZ5pqzEEu0eP1yLuKHY",
                "width": 3072
            }
        ],
        "place_id": "ChIJ5diO8S2TyzsRQbjt0H4AtVM",
        "rating": 5,
        "reference": "ChIJ5diO8S2TyzsRQbjt0H4AtVM",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1,
        "vicinity": "F92J+GMV, Hitech City Road, Jaihind Enclave, Madhapur, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4483699,
                "lng": 78.3891227
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4496838802915,
                    "lng": 78.39046063029151
                },
                "southwest": {
                    "lat": 17.4469859197085,
                    "lng": 78.38776266970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Trendz enclave",
        "place_id": "ChIJdb5z2OKRyzsRHxkqcOFQh4k",
        "plus_code": {
            "compound_code": "C9XQ+8J Madhapur, Hyderabad, Telangana, India",
            "global_code": "7J9WC9XQ+8J"
        },
        "rating": 5,
        "reference": "ChIJdb5z2OKRyzsRHxkqcOFQh4k",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2,
        "vicinity": "Sri Sai Arcade, 191, VIP Hills, Silicon Valley, Madhapur"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.452243,
                "lng": 78.38085409999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4535227302915,
                    "lng": 78.3821212302915
                },
                "southwest": {
                    "lat": 17.4508247697085,
                    "lng": 78.37942326970848
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Parking Garage",
        "place_id": "ChIJU6sFI9mTyzsRq98F96gCNAs",
        "reference": "ChIJU6sFI9mTyzsRq98F96gCNAs",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "F92J+V8X, Surya Enclave, Madhapur"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4508112,
                "lng": 78.380641
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4521485302915,
                    "lng": 78.38199983029149
                },
                "southwest": {
                    "lat": 17.4494505697085,
                    "lng": 78.37930186970848
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Cyber towers exit",
        "place_id": "ChIJ27uCfGKTyzsRxPk3IVBCOuU",
        "reference": "ChIJ27uCfGKTyzsRxPk3IVBCOuU",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "F92J+87C, Patrika Nagar, HITEC City, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.446198,
                "lng": 78.38487889999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4475741302915,
                    "lng": 78.3862659302915
                },
                "southwest": {
                    "lat": 17.4448761697085,
                    "lng": 78.38356796970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Ratnadeep Parking",
        "place_id": "ChIJpzZjpIaRyzsR3J1Ar8PskA8",
        "reference": "ChIJpzZjpIaRyzsR3J1Ar8PskA8",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "C9WM+GW9, Hitech City Road, Silicon Valley, HITEC City, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4504296,
                "lng": 78.38047039999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4517824802915,
                    "lng": 78.38178148029149
                },
                "southwest": {
                    "lat": 17.4490845197085,
                    "lng": 78.37908351970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Parking place",
        "place_id": "ChIJG9NifTeTyzsRxg9C2Jns6j0",
        "plus_code": {
            "compound_code": "F92J+55 Hyderabad, Telangana, India",
            "global_code": "7J9WF92J+55"
        },
        "reference": "ChIJG9NifTeTyzsRxg9C2Jns6j0",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Fint Solution, Cyber Towers, Patrika Nagar, HITEC City, Hyderabad"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.45607,
                "lng": 78.3837303
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4573927802915,
                    "lng": 78.3851588302915
                },
                "southwest": {
                    "lat": 17.45469481970849,
                    "lng": 78.3824608697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Car care",
        "place_id": "ChIJM43e7UmTyzsRe4ArsinvLnU",
        "rating": 5,
        "reference": "ChIJM43e7UmTyzsRe4ArsinvLnU",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1,
        "vicinity": "F94M+CFH, Siddhi Vinayak Nagar, Madhapur"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4534686,
                "lng": 78.380768
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4548375302915,
                    "lng": 78.38213288029151
                },
                "southwest": {
                    "lat": 17.4521395697085,
                    "lng": 78.37943491970849
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Suraj Bar & Restaurant Parkig Lot",
        "photos": [
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114363298533472754962\">suraj biradar</a>"
                ],
                "photo_reference": "AUacShhwF2VcAloC5k6CVGo6cnfIvHkfSlptbJwGM14MV_uqS_JGUZv4QAZ-6B40tcIrDeQOx9b91btOktxSL9ShkO8yQWFgekQgUvUjc6EYkJqc5evcFGIUlbM3j5IW6EvgkdxTSU2gi_-_zV5qppDrtfxsFIG0A8xKlNF6yMtWsoJ0gbC2",
                "width": 4160
            }
        ],
        "place_id": "ChIJC2BMC9mTyzsRF2VgZPWftRY",
        "rating": 3.6,
        "reference": "ChIJC2BMC9mTyzsRF2VgZPWftRY",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 31,
        "vicinity": "F93J+98J, Ayyappa Society Road, Surya Enclave, Madhapur"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.4556181,
                "lng": 78.38221249999999
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4569672302915,
                    "lng": 78.38356128029152
                },
                "southwest": {
                    "lat": 17.45426926970849,
                    "lng": 78.38086331970851
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "N Convention Parking",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2340,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107838382877862875574\">Saivenkataraju Nanduri</a>"
                ],
                "photo_reference": "AUacShg2iRf6n2wixmv5FbYIBG_dg_MrLUTlbJlZFoEtNdsh_ghkhjWcpmDeCR0Ndif1DoLY1qInsnjQl0JLyQh_KZ5HKR3vbAbeconSPc4wpd58xKBXw-prRe1dezSI5rHpiX-KitlhvLzn6wNJK3ReyVNIfpK0eDXXcSYCqxMLhVTmre7o",
                "width": 4160
            }
        ],
        "place_id": "ChIJJ_BSStiTyzsRhy4o6BbIisE",
        "rating": 4.7,
        "reference": "ChIJJ_BSStiTyzsRhy4o6BbIisE",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 23,
        "vicinity": "F94J+6VW, Kothaguda"
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 17.456625,
                "lng": 78.387654
            },
            "viewport": {
                "northeast": {
                    "lat": 17.4578645802915,
                    "lng": 78.3889999302915
                },
                "southwest": {
                    "lat": 17.4551666197085,
                    "lng": 78.3863019697085
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet",
        "name": "Shiva sai automobiles multi Brand Work Shop",
        "place_id": "ChIJZ9utErmRyzsRICHQMSFMKj4",
        "plus_code": {
            "compound_code": "F94Q+M3 Hyderabad, Telangana, India",
            "global_code": "7J9WF94Q+M3"
        },
        "reference": "ChIJZ9utErmRyzsRICHQMSFMKj4",
        "scope": "GOOGLE",
        "types": [
            "parking",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Plot No: 970, Survey No: 11/32, Narayana College lane, Ayyappa Society, Madhapur, Hyderabad"
    }
]