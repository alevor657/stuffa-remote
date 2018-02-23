import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import bindActionCreators from 'react-redux';
import connect from '../actions/connectionActions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connected: false
        };

        this.press = this.press.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.ws.close();
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
            <View>
                <Text>test</Text>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        connect: bindActionCreators(connect, dispatch)
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
