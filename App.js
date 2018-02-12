import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import findServer from './src/findServerV2';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connected: false
        };

        this.press = this.press.bind(this);
    }

    componentDidMount() {
        findServer()
            .then(ws => {
                console.log('CONNECTION OPENED', ws);
                this.ws = ws;
                this.setState({connected: true});
        
                this.ws.onerror = (e) => {
                    console.log(e.message);
                    // console.log(err.target);
                };
        
                this.ws.onclose = e => {
                    console.log('closed', e.code, e.reason);

                    this.setState({connected: false});
                };
        
                this.ws.onmessage = (e) => {
                    // a message was received
                    console.log(e.data);
                };
            })
            .catch(err => {
                console.log(err);
            });
    }

    press() {
        console.log(this.state.connected);        
        if (this.state.connected) {
            this.ws.send('test');
        } else {
            console.log('not connected');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.connected ? (
                    <View>
                        <Text>Connected!</Text>
                        <Button
                            onPress={this.press}
                            title='send' />
                    </View>
                ) : (
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Connecting...</Text>
                    </View>
                )}

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
