import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { f, auth, database } from './config/config';
import * as Facebook from 'expo-facebook';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    // this.registerUser('testemailaddress@mail.com', 'fakePassword');

    f.auth().onAuthStateChanged(function (user) {
      if (user) {
        //Logged in
        console.log('Logged in');
      } else {
        //Logged out
        console.log('Logged out');
      }
    });
  }
  
  async function loginWithFacebook() {
  const { type, token } = await Expo.Facebook.loginWithReadPermissionsAsync(
    'APP_ID',
    { permissions: ['public_profile'] }
  );
}

registerUser = (email, password) => {
  console.log(email, password);
  auth.createUserWithEmailAndPassword(email, password)
    .then((userObj) => console.log(email, password, userObj))
    .catch((error) => console.log('error logging in', error));
};

// auth.signOut()
// .then(() => {
//   console.log('Logged out...');
// }).catch((error) => {
//   console.log('Error:', error);
// });

render() {
  return (
    <View style={styles.container}>
      <Text>New app running</Text>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
