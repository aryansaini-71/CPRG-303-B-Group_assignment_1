import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
 
export default function App() {
 
  const handleAlertPress = () => {
    Alert.alert("Alert Button pressed");
  };
 
  return (
 
    <View style={styles.screen}>
 
      <ScrollView>
 
        <View style={styles.headerBox}>
          <Text style={styles.textStyle}>[Member 2]</Text>
        </View>
 
        <View style={styles.bodyBox}>
          <Text style={styles.textStyle}>[Member 3]</Text>
        </View>
 
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
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
  headerBox: {
    height: 200,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyBox: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#aaa',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});