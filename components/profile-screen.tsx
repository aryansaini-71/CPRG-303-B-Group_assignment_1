import { StyleSheet, View, ScrollView } from 'react-native'
import Header from '@/components/header'
import BackButton from '@/components/back-button'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View>
        <BackButton />
        <ScrollView>
            <Header />
        </ScrollView>
    </View>
  );
};

export default ProfileScreen

const styles = StyleSheet.create({})