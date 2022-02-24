import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Icon,
  Pressable,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text_widget_1}>Hi, I am Abdelrahman</Text>
      <Text style={styles.text_widget_1}>
        A Biomedical & Software Engineeer
      </Text>
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={require("./assets/profile_image.png")}
        fadeDuration={1000}
      ></Image>
      {/* email */}
      <View
        style={{
          backgroundColor: "#fbd66f",
          width: 350,
          height: 40,
          marginTop: 10,
          borderRadius: 10,

          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "sans-serif-medium",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="email"
            size={25}
            color="black"
            style={{ marginRight: 5 }}
          />
          Email: abdelrahmanhassan081@gmail.com
        </Text>
      </View>
      {/* linkedin */}
      <Pressable
        onPress={() =>
          Linking.openURL("https://www.linkedin.com/in/abdelrahman-hassan278/")
        }
      >
        <View
          style={{
            backgroundColor: "#fbd66f",
            width: 350,
            height: 40,
            marginTop: 10,
            borderRadius: 10,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "sans-serif-medium",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="linkedin-square"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
            linkedin.com/in/abdelrahman-hassan278
          </Text>
        </View>
      </Pressable>
      {/* github */}
      <Pressable
        onPress={() => Linking.openURL("https://github.com/Abdelrahmanhassan1")}
      >
        <View
          style={{
            backgroundColor: "#fbd66f",
            width: 350,
            height: 40,
            marginTop: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "sans-serif-medium",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="github"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
            github.com/Abdelrahmanhassan1
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#247291",
    alignItems: "center",
    justifyContent: "center",
  },
  text_widget_1: {
    color: "#f8da5b",
    textShadowColor: "white",
    textShadowRadius: 1,
    fontSize: 20,
    fontFamily: "sans-serif-condensed",
    marginBottom: 10,
    // textDecorationLine: "underline",
  },
});
