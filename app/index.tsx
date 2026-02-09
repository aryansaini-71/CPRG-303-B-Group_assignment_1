import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  const handleAlertPress = () => {
    Alert.alert('Alert Button pressed');
  };

  const handleNavPress = (label: string) => {
    Alert.alert(label);
  };

  const handlePlusPress = () => {
    Alert.alert('Plus button pressed');
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>[Member 2]</Text>
        </View>

        <View style={styles.body}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Text style={[styles.tab, styles.tabActive]}>Posts</Text>
            <Text style={styles.tab}>Replies</Text>
            <Text style={styles.tab}>Highlights</Text>
            <Text style={styles.tab}>Videos</Text>
            <Text style={styles.tab}>Photos</Text>
          </ScrollView>

          <Text style={styles.title}>Who to follow</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <View>
                  <Text style={styles.name}>Chaudhary</Text>
                  <Text style={styles.username}>@Chaudhary</Text>
                </View>
                <TouchableOpacity style={styles.followBtn}>
                  <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.bio}>
                Learning software development step by step with real projects.
              </Text>
              <Image
                source={require('../assets/images/tweet1.jpeg')}
                style={styles.image}
              />
            </View>

            <View style={styles.card}>
              <View style={styles.cardTop}>
                <View>
                  <Text style={styles.name}>Damai</Text>
                  <Text style={styles.username}>@Damai</Text>
                </View>
                <TouchableOpacity style={styles.followBtn}>
                  <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.bio}>
                Working on a React Native app as part of a software project.
              </Text>
              <Image
                source={require('../assets/images/tweet2.jpeg')}
                style={styles.image}
              />
            </View>
          </ScrollView>

          <Text style={styles.showMore}>Show more</Text>

          <View style={styles.nav}>
            <TouchableOpacity onPress={() => handleNavPress('Home')}>
              <Text style={styles.icon}>⌂</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavPress('Search')}>
              <Text style={styles.icon}>⌕</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavPress('Notifications')}>
              <Text style={styles.icon}>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavPress('Messages')}>
              <Text style={styles.icon}>✉</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fab} onPress={handlePlusPress}>
              <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    height: 200,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#aaa',
  },
  body: {
    padding: 15,
  },
  tab: {
    marginRight: 18,
    color: '#777',
    fontWeight: '600',
    marginBottom: 10,
  },
  tabActive: {
    color: '#000',
    borderBottomWidth: 2,
    borderColor: '#000',
    paddingBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: 260,
    backgroundColor: '#fff',
    borderRadius: 14,
    marginRight: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  username: {
    color: '#777',
    fontSize: 12,
    marginTop: 2,
  },
  bio: {
    marginTop: 8,
    fontSize: 12,
    color: '#444',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  followBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  followText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  showMore: {
    marginTop: 10,
    color: '#1d9bf0',
    fontWeight: '600',
    marginBottom: 20,
  },
  nav: {
    height: 60,
    borderTopWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    padding: 10,
  },
  fab: {
    position: 'absolute',
    right: 12,
    bottom: 8,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#1d9bf0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
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