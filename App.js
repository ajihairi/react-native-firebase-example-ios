
import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import firebase from 'react-native-firebase';




let Analytics = firebase.analytics();
export default class App extends Component {
  constructor(){
    super();
      Analytics.setAnalyticsCollectionEnabled(true);
      Analytics.setUserId( '151511017' );
      Analytics.setUserProperty( 'is_admin' , 'true' );
      Analytics.setUserProperty('gender', 'male');
      Analytics.setCurrentScreen( 'main_screen' , 'Application');
      Analytics.logEvent('app_open', {
        timestamp: new Date().toLocaleString(),
        date: new Date().toLocaleDateString()
      })
  }
  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        const movies = responseJson.movies.filter(name => name.title === "Star Wars")
        const moviez = JSON.stringify(movies)
              console.warn(responseJson.movies);
              console.warn(movies.filter(name => name.title === "Star Wars"));
              Alert.alert("message " + moviez);
              firebase.analytics().logEvent('fetch_clicked', {data: movies});
              Analytics.setUserProperty('created_at', new Date().toLocaleString());
              Analytics.setUserProperty('sign_up_method', 'throughApp');
      })
      .catch((error) => {
        console.error(error);
      });
  }


  componentDidMount() {

  }
  navigateToSecondScreen() {
      firebase.analytics().logEvent('click_button', {
        timestamp: new Date().toLocaleString(),
      })
      console.warn('walac')
    }
  render () {
    return (
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="click here to second screen"
          onPress={() => this.navigateToSecondScreen}
        />
        <Button 
          title = "click here to fetch data"
          onPress={() => this.getMoviesFromApiAsync()}
        />
      </View>
    );
  }
}
