import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Ionicons } from '@expo/vector-icons';
import React from 'react'

const header = () => {
    return (
      <View style={styles.container}>
        
        {/* Left Side: Back Button */}
        <TouchableOpacity style={styles.leftSection}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Middle Side: Profile Info */}
        <View style={styles.titleSection}>
          <Text style={styles.profileName}>James Bond</Text>
          <Text style={styles.tweetCount}>42.1K Posts</Text>
        </View>

        {/* Right Side: Icons */}
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-vertical" size={22} color="black" />
          </TouchableOpacity>
        </View>

      </View>
  );
}

export default header

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingHorizontal: 15,
       height:55,
    },
    leftSection: {
        flex: 1,
    },
    titleSection:{
        flex: 2,
    },
    profileName:{
        fontSize: 18,
        fontWeight:'800',
        color: '#0f1419',
    },
    tweetCount:{
        fontSize: 13,
        color: '536471',
    },
    rightSection:{
        flexDirection: 'row',
    },
    iconButton:{
        marginLeft: 15, 
    },

});