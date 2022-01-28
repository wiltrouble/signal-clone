import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
;

import React from 'react';
import Message from '../components/Message';
import chatRoomData from '../assets/data/Chats';
import MessageInput from '../components/MessageInput';






const ChatRoomScreen = () => {
  const route = useRoute()

  console.warn("displaying chat room", route.params?.Id);

  const navigation = useNavigation();
  navigation.setOptions({title: 'Wilson'})
  
  return (
    <SafeAreaView style={styles.page}>
      <FlatList 
        data = {chatRoomData.messages}
        renderItem={({item}) => <Message message={item}/>}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    }
})
