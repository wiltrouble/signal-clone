import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const TabOneScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
      />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Wilson Lopez</Text>
          <Text style={styles.text}>11:15</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>HOla komo estas? xD</Text>
      </View>
    </View>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({
  text: {
    color: "grey",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center'
  },
});
