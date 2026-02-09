import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const header = () => {
  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner} />

      {/* Profile Image */}
      <View style={styles.profileImageContainer}></View>

      {/* Action Buttons - Top Right */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.followingButton}>
          <Text style={styles.followingText}>Following</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        {/* Name and Verified Badge */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>X</Text>
          <Ionicons name="checkmark-circle" size={20} color="#F7B955" />
        </View>

        {/* Username */}
        <Text style={styles.username}>@Twitter</Text>

        {/* Bio */}
        <Text style={styles.bio}>Welcome to my clone!</Text>

        {/* Location, Website, Birthday, Join Date */}
        <View style={styles.metaInfo}>
          <View style={styles.metaItem}>
            <Ionicons name="location-outline" size={16} color="#536471" />
            <Text style={styles.metaText}>everywhere</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="link-outline" size={16} color="#536471" />
            <Text style={styles.metaLink}>about.twitter.com</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="balloon-outline" size={16} color="#536471" />
            <Text style={styles.metaText}>Born March 21</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={16} color="#536471" />
            <Text style={styles.metaText}>Joined February 2007</Text>
          </View>
        </View>

        {/* Following and Followers Count */}
        <View style={styles.followInfo}>
          <View style={styles.followItem}>
            <Text style={styles.followCount}>0</Text>
            <Text style={styles.followLabel}> Following</Text>
          </View>
          <View style={styles.followItem}>
            <Text style={styles.followCount}>65.7M</Text>
            <Text style={styles.followLabel}> Followers</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  banner: {
    width: "100%",
    height: 150,
    backgroundColor: "#000000",
  },
  profileImageContainer: {
    position: "absolute",
    top: 100,
    left: 15,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    borderRadius: 70,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#000000",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    gap: 10,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#CFD9DE",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  followingButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#000000",
  },
  followingText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  profileInfo: {
    paddingHorizontal: 15,
    paddingTop: 70,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F1419",
  },
  username: {
    fontSize: 15,
    color: "#536471",
    marginBottom: 12,
  },
  bio: {
    fontSize: 15,
    color: "#0F1419",
    marginBottom: 12,
  },
  metaInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 15,
    color: "#536471",
  },
  metaLink: {
    fontSize: 15,
    color: "#1D9BF0",
  },
  followInfo: {
    flexDirection: "row",
    gap: 20,
  },
  followItem: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  followCount: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F1419",
  },
  followLabel: {
    fontSize: 15,
    color: "#536471",
  },
});
