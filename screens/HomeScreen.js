// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React from 'react';

// ------------------------------------------------------------------------------
// Import components
// ------------------------------------------------------------------------------
import { View, Text, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    const showAlert = (message) => {
      Alert.alert("Aktion", message);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Willkommen bei SpinAdventure!</Text>
        <Image 
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.logo} 
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => showAlert("Start gedrückt!")}
          >
            <Text style={styles.buttonText}>Starten</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]} 
            onPress={() => showAlert("Entdecken gedrückt!")}
          >
            <Text style={styles.buttonText}>Entdecken</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>Erkunde eine Welt voller Abenteuer!</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d9fdd3',
      padding: 20,
    },
    greeting: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#2e7d32',
      marginBottom: 20,
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 30,
      borderRadius: 75,
      borderWidth: 2,
      borderColor: '#4caf50',
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'center',
      marginVertical: 20,
    },
    button: {
      backgroundColor: '#4caf50',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 25,
      marginVertical: 10,
      width: '80%',
      alignItems: 'center',
    },
    secondaryButton: {
      backgroundColor: '#388e3c',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    footerText: {
      fontSize: 16,
      color: '#666',
      marginTop: 30,
      textAlign: 'center',
    },
  });
  
  export default HomeScreen;
