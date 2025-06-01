import React, { useEffect, useRef, useState } from 'react';
import { Image, Platform, View, Text } from 'react-native';
import { AnimatedRegion, MarkerAnimated, Callout } from 'react-native-maps';
import { parking_marker } from '../../assets/icons';
import { useTheme } from '@react-navigation/native';

export const LocationMarker = ({ data, coordinate }) => {
    const { colors } = useTheme();
    const duration = 1000;
    const marker = useRef(null);
    const [coords] = useState(
        new AnimatedRegion({
            latitude: coordinate?.latitude,
            longitude: coordinate?.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0,
        }),
    );

    useEffect(() => {
        if (Platform.OS === 'android') {
            if (marker.current) {
                marker.current.animateMarkerToCoordinate(coordinate, duration);
            }
        } else {
            coords
                .timing({
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    duration,
                    useNativeDriver: true,
                })
                .start();
        }
    }, [marker, coordinate, coords]);

    return (
        <MarkerAnimated anchor={{ x: 2, y: 2.5 }} ref={marker} coordinate={coords}>
            <Image source={parking_marker} resizeMode='contain' style={{ width: 25, height: 25 }} />
            <Callout
                tooltip={true}
                style={{ width: 400, justifyContent: 'center', alignItems: 'center' }}
            >
                <View style={{ backgroundColor: 'red',/*  height: 43, */ width: 170, borderTopLeftRadius: 30, left: 100, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 0, zIndex: 999, position: 'relative', bottom: 0, overflow: 'visible' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text numberOfLines={1} style={{ fontFamily: 'Jost-Medium', fontSize: 20, color: colors?.white }}>{data?.name}</Text>
                    </View>
                </View>
            </Callout>
        </MarkerAnimated>
    );
};
