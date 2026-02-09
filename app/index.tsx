import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function App() {
  const handleAlertPress = () => {
    Alert.alert("Alert Button pressed");
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

        <View style={styles.blueBanner} />
        <View style={styles.profileInfo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} 
            style={styles.profilePic} 
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Get verified</Text>
          </TouchableOpacity>
          <Text style={styles.userName}>James Bond</Text>
          <Text style={styles.userHandle}>@jamesbond71</Text>
          <Text style={styles.joinDate}>📅 Joined July 2006</Text>
          <View style={styles.followRow}>
            <Text style={styles.followCount}><Text style={styles.boldText}>1</Text> Following</Text>
            <Text style={styles.followCount}><Text style={styles.boldText}>9.8M</Text> Follower</Text>
          </View>
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
              <Text style={styles.bio}>Learning software development step by step.</Text>
              <Image
                source={{ uri: 'https://via.placeholder.com/200' }} 
                style={styles.cardImage}
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
              <Text style={styles.bio}>Working on a React Native app project.</Text>
              <Image
                source={{ uri: 'https://via.placeholder.com/200' }}
                style={styles.cardImage}
              />
            </View>
          </ScrollView>

          <View style={styles.nav}>
            <Text style={styles.icon}>⌂</Text>
            <Text style={styles.icon}>⌕</Text>
            <Text style={styles.icon}>🔔</Text>
            <Text style={styles.icon}>✉</Text>
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
  screen: { flex: 1, backgroundColor: "#fff", paddingTop: 50 },

  blueBanner: { height: 120, backgroundColor: "#1DA1F2" },
  profileInfo: { paddingHorizontal: 15, marginBottom: 10 },
  profilePic: { width: 80, height: 80, borderRadius: 40, borderWidth: 4, borderColor: "#000", marginTop: -40, backgroundColor: "#000" },
  editButton: { alignSelf: 'flex-end', borderWidth: 1, borderColor: '#ccc', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 5, marginTop: -30 },
  editText: { fontWeight: 'bold' },
  userName: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  userHandle: { color: 'gray', fontSize: 16 },
  joinDate: { color: 'gray', marginTop: 10 },
  followRow: { flexDirection: 'row', marginTop: 10 },
  followCount: { marginRight: 15, color: 'gray' },
  boldText: { color: '#000', fontWeight: 'bold' },

  body: { padding: 15 },
  tab: { marginRight: 18, color: '#777', fontWeight: '600', marginBottom: 10 },
  tabActive: { color: '#000', borderBottomWidth: 2, borderColor: '#000', paddingBottom: 6 },
  title: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
  card: { width: 260, backgroundColor: '#fff', borderRadius: 14, marginRight: 12, padding: 12, borderWidth: 1, borderColor: '#eee' },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontWeight: 'bold', fontSize: 14 },
  username: { color: '#777', fontSize: 12 },
  bio: { marginTop: 8, fontSize: 12, color: '#444' },
  cardImage: { width: '100%', height: 120, borderRadius: 10, marginTop: 10 },
  followBtn: { backgroundColor: '#000', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20 },
  followText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  nav: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, borderTopWidth: 1, borderColor: '#eee', paddingTop: 10 },
  icon: { fontSize: 24 },

  footer: { padding: 20, borderTopWidth: 1, borderColor: "#eee" },
  button: { backgroundColor: "#000", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
 