import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { JobDetailCard } from "./JobDetailCard";
const windowWidth = Dimensions.get("window").width;
export const JobDetails = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const windowWidth = Dimensions.get("window").width;
  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
     <View
            style={{
              //   backgroundColor: "red",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 15,
              marginTop:50,
             marginHorizontal: 20
            }}
          >
            <View>
              <Text>
                <Ionicons name="arrow-back-outline" size={25} color="grey" />
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#48db55",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                }}
              >
                <Text>
                  <Ionicons name="logo-whatsapp" size={18} color="#f7f7f0" />
                </Text>
                <Text style={{color:"#f7f7f0" , fontSize:15}}> Share </Text>
              </View>
              {/* <ion-icon name="ellipsis-vertical-outline"></ion-icon> */}
              <Text>
                {" "}
                <Ionicons
                  name="ellipsis-vertical-outline"
                  size={25}
                  color="grey"
                />
              </Text>
            </View>
          </View>
      <ScrollView>
     
        <View style={{  marginHorizontal: 20 }}>
         
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 20,
                  color: "grey",
                  paddingLeft: 10,
                }}
              >
                Softwere Engineer
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                  color: "grey",
                  paddingLeft: 10,
                  marginTop: -5,
                }}
              >
                apple
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 7,
            }}
          >
            <Text>
              {" "}
              <Ionicons name="locate" size={20} color="grey" />
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 15,
                color: "grey",
                paddingLeft: 10,
              }}
            >
              Lucknow
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>
              {" "}
              <Ionicons name="eye-off" size={20} color="grey" />
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 15,
                color: "grey",
                paddingLeft: 10,
              }}
            >
              Not Disclosed
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#d3f2ee",
              borderRadius: 10,
              padding: 5,
              marginVertical: 5,
              marginTop:10
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <Text>fixed</Text>
              <Text>₹ 7000-8000</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View style={styles.hrline} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <Text>Average Incentives</Text>
              <Text>₹ 1000</Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View style={styles.hrline} />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <Text>Earning Potential</Text>
              <Text> ₹ 9000</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                //   justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              <Text>
                <Ionicons name="eye-off" size={20} color="grey" />
              </Text>
              <Text style={{ paddingLeft: 10, fontSize: 12 }}>
                you can earn more incentive if you perform well
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#b4cfab",
              marginVertical: 5,
              paddingLeft: 15,
              borderRadius: 10,
              padding: 15,
            }}
          >
            <Text style={styles.tittle}>Job highlight</Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}
            >
              <View>
                <Text style={{ marginTop: 5 }}>
                  <Ionicons name="eye" size={20} color="grey" />
                </Text>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    color: "grey",
                    fontSize: 15,
                    fontWeight: "400",
                    paddingVertical: 3,
                  }}
                >
                  14 application
                </Text>

                <Text style={{ fontSize: 14 }}>
                  Benefits includes:Weekly Payout , Overtime Pay , Annual Bonus
                  , Petrol Allowance , flexible Hours
                </Text>
              </View>
            </View>
          </View>
        </View>

        <JobDetailCard
          tittle="Job description"
          data={[
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
          ]}
        />
        <JobDetailCard
          tittle="Job role"
          data={[
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
          ]}
        />

        <JobDetailCard
          tittle="Job requirement"
          data={[
            {
              icon: "call",
              heading: "Experience",
              subheading: "Any experience",
            },
            {
              icon: "call",
              heading: "Education",
              subheading: "10th or Below 10th",
            },
            {
              icon: "call",
              heading: "Past role/category experience",
              subheading:
                "IT Support, Hardware, IT Infrastructure Service, IT Network",
            },
            {
              icon: "call",
              heading: "English level",
              subheading: "NO english Required",
            },
            {
              icon: "call",
              heading: "Gender",
              subheading: "male",
            },
          ]}
        />
        <JobDetailCard
          tittle="Interview Details"
          data={[
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
          ]}
        />
        <JobDetailCard
          tittle="About company"
          data={[
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
            {
              icon: "call",
              heading: "Department",
              subheading: "Engineering & Networks",
            },
          ]}
        />

        <View
          // style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1.84,
            elevation: 5, // This is for Android
            padding: 15,
            // margin: 5,
            width: windowWidth / 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "grey", fontSize: 15 }}>Job posted by</Text>
          <Text> M/S Sri Sai infotech</Text>
        </View>
      </ScrollView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: 5,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#68c464",
            height: 45,
            width: windowWidth / 1.05,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            // borderWidth: 1,
            // borderColor: "white",
          }}
          // onPress={() => signUpHandle()}
        >
          <Text style={{ color: "white", fontWeight: "800" }}>
            Apply for Job
          </Text>
        </Pressable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  tittle: { fontSize: 15, fontWeight: "500", marginBottom: 5, marginTop: 5 },
  hrline: {
    width: windowWidth / 1.2,
    height: 0.8,
    backgroundColor: "grey",
    // marginLeft: -10,
  },
});
