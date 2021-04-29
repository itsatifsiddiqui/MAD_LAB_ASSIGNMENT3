import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UpdateNameButton from "./UpdateNameButton";
import AgeCounter from "./AgeCounter";
import Calculator from "./Calculator";
export default function App() {
  return (
    <View style={styles.container}>
      {/* Name Buttons Row */}
      <View style={styles.buttons}>
        <UpdateNameButton
          name="Update First Name"
          updateNameTo="Muhammad"
        />
        <UpdateNameButton
          name="Update Last Name"
          updateNameTo="Atif"
        />
      </View>
      {/* Age Counter Row */}
      <AgeCounter />
      {/* Calculator */}
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row'
  }
});
