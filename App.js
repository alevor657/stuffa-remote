import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import findServer from './findServer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.ws = new WebSocket('ws://192.168.1.62:8080/remote');
    // this.ws = new WebSocket('ws://192.168.1.62:8080/remote');

    // this.ws = new WebSocket('wss://echo.websocket.org/');


    // this.state = {
    //   connected: false
    // };

    // this.ws.onopen = () => {
    //   console.log('connection opened');

    //   this.setState({connected: true});
    // }

    // this.ws.onerror = (e) => {
    //   console.log(e.message);
    //   // console.log(err.target);
    // }

    // this.ws.onclose = e => {
    //   console.log('closed', e.code, e.reason);
    // }

    // this.ws.onmessage = (e) => {
    //   // a message was received
    //   console.log(e.data);
    // };

    this.press = this.press.bind(this);
  }

  async componentDidMount() {
    console.log('cdm');

    this.ws = await findServer();
    console.log(ws);
    

  }

  press() {
    if (this.state.connected) {
      this.ws.send('test');
    } else {
      console.log('not connected');

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Test...</Text>
        <Button
          onPress={this.press}
          title='send'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
