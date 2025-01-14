// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React from 'react';

// ------------------------------------------------------------------------------
// Import components
// ------------------------------------------------------------------------------
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const HomeScreen = () => {
    const showAlert = () => {
      Alert.alert("Button gedrückt", "Du hast den Button erfolgreich gedrückt!");
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Willkommen bei SpinAdventure!</Text>
        <Button
          title="Klicke mich!"
          color="#4caf50"
          onPress={showAlert}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d9fdd3',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
  });
  
  export default HomeScreen;
