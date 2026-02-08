import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text style={styles.placeholderText}>Project</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, 
  },
  placeholderText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#aaa',
  },
});