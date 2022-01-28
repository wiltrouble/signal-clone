import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Pressable, 
  KeyboardAvoidingView, 
  Platform } from "react-native";
import React, { useState } from "react";
import {
  SimpleLineIcons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.warn('sending message...');
    setMessage('')
  }

  const onPlusClicked = () => {
    console.warn('plus clickd');
    
  }

  const onPress = () => {
    if (message) {
      sendMessage()
    } else {
      onPlusClicked()
    }
    
    
  }
  return (
    <KeyboardAvoidingView 
      style={styles.root} 
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="grey"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(newMessage) => setMessage(newMessage)}
          placeholder="Signal message..."
        />
        <AntDesign
          name="camerao"
          size={24}
          color="#595959"
          style={styles.icon}
        />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="#595959"
          styles={styles.icon}
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={onPress}>
        {message ? (
          <MaterialIcons name="send" size={24} color="white" />
        ) : (
          <Text style={styles.buttonText}>+</Text>
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
});
