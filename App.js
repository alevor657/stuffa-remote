import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import findServer from './findServer';

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
                this.ws = ws;

                console.log('connection opened');
                this.setState({connected: true});
        
                this.ws.onerror = (e) => {
                    console.log(e.message);
                    // console.log(err.target);
                }
        
                this.ws.onclose = e => {
                    console.log('closed', e.code, e.reason);
                }
        
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
                    <Text>Connecting...</Text>
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
