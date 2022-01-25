import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";

import ChatRoomItem from "../components/ChatRoomItem";
import ChatRoomsData from '../assets/data/ChatRooms';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList 
        data={ChatRoomsData}
        renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});

