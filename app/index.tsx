import React from 'react';

import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  const handleAlertPress = () => {
    Alert.alert("Alert Button pressed"); 
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text style={styles.placeholderText}>Project Skeleton Created</Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleAlertPress}>
          <Text style={styles.buttonText}>Alert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  placeholderText: { textAlign: 'center', marginTop: 20, color: '#aaa' },

  footer: { padding: 20, borderTopWidth: 1, borderColor: '#eee' },
  button: { backgroundColor: '#000', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});