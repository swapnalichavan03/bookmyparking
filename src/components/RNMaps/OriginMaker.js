import React, { useEffect, useRef, useState } from 'react';
import { Image, Platform, View, Text, ImageBackground } from 'react-native';
import { AnimatedRegion, MarkerAnimated, Circle } from 'react-native-maps';
import { parking_marker, route_start_background } from '../../assets/icons';
import { useTheme } from '@react-navigation/native';

export const OriginMaker = ({ MarkerRef, coordinate }) => {
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
            if (MarkerRef?.current) {
                MarkerRef?.current.animateMarkerToCoordinate(coordinate, duration);
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
    }, [MarkerRef, coordinate, coords]);

    return (
        <>
            <Circle
                center={{
                    latitude: 17.45114, longitude: 78.3857
                }}
                radius={2}
                strokeColor="#bc00634f"
                strokeWidth={25}
                fillColor={'#bc00634f'}
                zIndex={999}
            />
            <MarkerAnimated ref={MarkerRef} coordinate={coords}>
                {/* <ImageBackground source={route_start_background} resizeMode='contain' style={{ width: 140, height: 140, justifyContent: 'center', alignItems: 'center' }} > */}
                    <Image source={parking_marker} resizeMode='contain' style={{ width: 25, height: 25 }} />
                {/* </ImageBackground> */}
            </MarkerAnimated>
        </>
    )
}


{/* <MarkerAnimated ref={MarkerRef} coordinate={coords}>
            <ImageBackground source={route_start_background} resizeMode='contain' style={{ width: 140, height: 140, justifyContent: 'center', alignItems: 'center' }} >
                <Image source={parking_marker} resizeMode='contain' style={{ width: 25, height: 25 }} />
            </ImageBackground>
        </MarkerAnimated> */}