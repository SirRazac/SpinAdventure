import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function HomeScreen() {
    const handleButtonPress = () => {
        Alert.alert("Hello!", "You pressed the button.");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Willkommen bei SpinAdventure!</Text>
            <Text style={styles.subtitle}>Hier startet das nächste Abenteuer</Text>
            <Button title="Button" onPress={handleButtonPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
});
