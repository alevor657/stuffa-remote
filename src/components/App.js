import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectToDesktop } from '../actions/connectionActions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.press = this.press.bind(this);
    }

    componentDidMount() {
        this.props.connectToDesktop();
        console.log('props', this.props);
    }

    componentWillUnmount() {
        this.ws.close();
    }

    componentDidUpdate() {
        console.log(this.props, 'UPDATE');
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
                {this.props.ws ? (
                    <Text>Connected</Text>
                ) : (
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Connecting</Text>
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

function mapStateToProps(state, ownProps) {
    return {
        ws: state.connection.ws,
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        connectToDesktop: bindActionCreators(connectToDesktop, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
