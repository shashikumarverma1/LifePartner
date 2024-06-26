import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
const CustomSidebarMenu = ({ navigation }: { navigation: any }) => {
  const logout = async () => {
    AsyncStorage.clear();
  };
  useEffect(()=>{
    logout()
  },[])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{marginTop:50}}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={[styles.subheading, styles.subHeadingBold]}>
          Home
          </Text>
        </Pressable>

      

        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("profile");
            navigation.navigate("Profile");
          }}
        >
          <Text style={[styles.subheading, styles.subHeadingBold]}>
            Profile
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={logout}>
          <Text
            style={[styles.subheading, styles.subHeadingBold, ]}
          >
            Log-out
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("JobDetails")}
        >
          <Text
            style={[styles.subheading, styles.subHeadingBold,]}
          >
            JobDetails
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        >
          <Text
            style={[
              styles.subheading,
              styles.subHeadingBold,
            
            ]}
          >
            MainScreen
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            // console.log("click" , navigation)
            navigation.closeDrawer();
          }}
        >
          <Text
            style={[
              styles.subheading,
              styles.subHeadingBold,
              { color: "red", textAlign: "right", paddingLeft: 200 },
            ]}
          >
            close
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async() =>logout() }
        >
          <Text
            style={[
              styles.subheading,
              styles.subHeadingBold,
              { color: "red", },
            ]}
          >
            Logout
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    // PaddingBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    padding: 8,
    fontWeight: "800",
    backgroundColor: "#ffff",
    fontSize: 17,
    paddingLeft: 15,
    paddingVertical: 10,
  },
  subheading: { paddingLeft: 10, backgroundColor: "#fff", fontSize: 15 },
  subheadingmargin: {
    paddingLeft: 20,
  },
  subHeadingBold: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 5,
    paddingLeft:25
  },
  subheadingBG: {
    paddingLeft: 30,
    backgroundColor: "#fffff",
  },
  icon_right: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
  },
});
export default CustomSidebarMenu;
