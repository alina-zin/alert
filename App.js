
import React, { useState } from 'react';
import { StyleSheet, View, Alert, Button, Text } from 'react-native';

export default function App() {

  const [ok, setOk] = useState(false);

  const showAlert = () => {
    Alert.alert(
      "My title",
      "This is message",
    [
      {
        text: "OK",
        onPress: () => console.log("ok")
      },
      {
        text: "Cancel",
        onPress: () => setOk(false)
      }
    ]
    );
  }


  return (
    <View style={styles.container}>
      <Button title={'Open dialog'} onPress={showAlert}></Button>
      <Text>{ok===true ? 'ok' : 'cancel'}</Text>
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
});
