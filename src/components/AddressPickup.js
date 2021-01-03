
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from '../constants/googleMapKey';


const AddressPickup = ({
    placheholderText,
    fetchAddress
}) => {

    const onPressAddress = (data, details) => {
        //console.log("details==>>>>", details)
        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fetchAddress(lat, lng)
    }

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placheholderText}
                onPress={onPressAddress}
                fetchDetails={true}
                onPress={onPressAddress}
                query={{
                    key: GOOGLE_MAP_KEY,
                    language: 'en'
                }}
                styles={{
                    textInputContainer: styles.containerStyle,
                    textInput: styles.textInputStyle
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerStyle: {
        backgroundColor: 'white'
    },
    textInputStyle: {
        height: 48,
        color: 'black',
        fontSize: 16,
        backgroundColor: '#f3f3f3'
    }
});

export default AddressPickup;
