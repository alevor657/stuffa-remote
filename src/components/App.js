import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectToDesktop } from '../actions/connectionActions';
import ManualAddressInput from './manualInputModal';
import Player from './player/Player';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { connectToDesktop } = this.props;

        connectToDesktop(); //dev
    }

    componentWillUnmount() {
        this.ws.close();
    }

    componentDidUpdate() {
        console.log('CDU', this.props);
        let { connectToDesktop } = this.props;

        // Reconnect on failure
        // if (this.props.ws) {
        //     this.props.ws.onclose = () => connectToDesktop();
        //     // this.props.ws.onerror = () => connectToDesktop();

        //     if (this.props.ws.readyState !== 1) {
        //         connectToDesktop();
        //     }
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.ws ? (
                    <Player />
                ) : (
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text>Connecting</Text>
                    </View>
                )}
                {this.props.modalVisible && <ManualAddressInput/>}
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
        failCounter: state.connection.failCounter, //test
        modalVisible: state.modal.visible,
        // modalVisible: true, // dev
        err: state.connection.err,
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        connectToDesktop: bindActionCreators(connectToDesktop, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
