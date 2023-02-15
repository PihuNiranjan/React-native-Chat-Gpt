// import { StatusBar } from "expo-status-bar";
// import {
//   Button,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   View,
//   Image,
// } from "react-native";
// import Constants from "expo-constants";
// import { useState } from "react";
// import axios from "axios";
// const token = "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";

// export default function App() {
//   const [text, setText] = useState("");
//   const [number, setNumber] = useState(0);
//   const [data, setdata] = useState("");

//   // const headers = {
//   //   "Content-Type": "application/json",
//   //   Connection: "keep-alive",
//   //   Authorization: `Bearer ${token}`,
//   // };

//   const getRespo = () => {
//     console.log("function call hua");
//     console.log(text);
//     console.log(number);
//     console.log(text);

//     const data = {
//       model: "text-davinci-003",
//       prompt: text,
//       temperature: 0,
//       max_tokens: parseInt(number),
//     };
//     axios
//       .post("https://api.openai.com/v1/completions", data, {
//         headers: {
//           "Content-Type": "application/json",
//           Connection: "keep-alive",
//           Authorization: "Bearer " + token,
//         },
//       })
//       .then((response) => {
//         console.log(response.data);
//         console.log(response.data.choices[0].text);
//         setdata(response.data.choices[0].text);
//       })
//       .catch((error) => console.log("ERROR : ", error.response));
//   };

//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: "#ecf0f1", alignItems: "center" }}
//     >
//       <View style={styles.head}>
//         <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 5 }}>
//           Welcome to OpenAI
//         </Text>
//       </View>
//       <View style={{ marginVertical: 20, flexDirection: "row" }}>
//         <Image
//           source={require("./assets/logo.png")}
//           style={{ resizeMode: "contain", height: 30, width: 30 }}
//         />
//         <Text
//           style={{
//             marginLeft: 10,
//             fontSize: 25,
//             fontWeight: "bold",
//             color: "#000",
//           }}
//         >
//           ChatGPT
//         </Text>
//       </View>
//       <View
//         style={{
//           marginHorizontal: 2,
//           width: 300,
//           height: 40,
//           alignItems: "center",
//           justifyContent: "center",
//           borderWidth: 1,
//           borderRadius: 5,
//           marginTop: 10,
//           paddingHorizontal: 5,
//           flexDirection: "row",
//           backgroundColor: "#fff",
//           elevation: 5,
//         }}
//       >
//         <TextInput
//           style={{ color: "#000", flex: 0.95, fontSize: 15 }}
//           placeholder="Search"
//           onChangeText={(newText) => setText(newText)}
//         />
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           width: 300,
//           justifyContent: "space-between",
//         }}
//       >
//         <View
//           style={{
//             marginHorizontal: 2,
//             backgroundColor: "#fff",
//             elevation: 5,
//             width: 100,
//             height: 40,
//             alignItems: "center",
//             justifyContent: "center",
//             borderWidth: 1,
//             borderRadius: 5,
//             marginTop: 10,
//             paddingHorizontal: 5,
//             flex: 0.6,
//           }}
//         >
//           <TextInput
//             style={{ color: "#000", fontSize: 15 }}
//             placeholder="Enter Number of Words..."
//             onChangeText={(newText) => setNumber(newText)}
//             keyboardType="numeric"
//           />
//         </View>

//         <TouchableOpacity
//           style={{
//             alignItems: "center",
//             marginVertical: 10,
//             flex: 0.3,
//             justifyContent: "center",
//             borderWidth: 1,
//             borderRadius: 5,
//             backgroundColor: "#808A93",
//             elevation: 5,
//           }}
//           onPress={getRespo}
//         >
//           <Text
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//               padding: 8,
//               fontSize: 16,
//               fontWeight: "bold",
//             }}
//           >
//             {" "}
//             Enter
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* <StatusBar
//         animated={true}
//         barStyle="light-content"
//         showHideTransition="fade"
//         style="dark"
//       /> */}
//       <ScrollView style={styles.container}>
//         <Text style={{ fontSize: 15, marginTop: -20 }}>{data}</Text>
//       </ScrollView>

//       {/* <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}> */}
//       <Text style={{ fontWeight: "bold", marginVertical: 15, fontSize: 15 }}>
//         Develop by Piyush
//       </Text>
//       {/* </View> */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderRadius: 10,
//     width: 300,
//     paddingHorizontal: 8,
//     shadowOffset: { width: 2, height: 4 },
//     shadowColor: "#171717",
//     shadowOpacity: 0.8,
//     shadowRadius: 6,
//     elevation: 5,
//   },
//   head: {
//     marginTop: Constants.statusBarHeight * 1.2,
//     borderBottomColor: "black",
//     borderBottomWidth: 1,
//     width: "100%",
//     alignItems: "center",
//     marginBottom: 10,
//   },
// });

import React from "react";
import Navigation from "./src/navigation";

export default function App() {
  return <Navigation />;
}
