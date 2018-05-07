import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { connectToDesktop } from '../actions/connectionActions';
import ManualAddressInput from './manualInputModal';
import Player from './player/Player';
import PrimaryText from './UI/Text/PrimaryText'; 
import { BACKGROUND_LIGHT, COLORED } from '../constants/colors';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { connectToDesktop } = this.props;

        connectToDesktop(); //dev
    }

    componentWillUnmount() {
        // this.ws.close();
    }

    componentDidUpdate() {
        console.log('CDU', this.props);
        let { connectToDesktop } = this.props;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.ws ? (
                    <Player />
                ) : (
                    <View style={styles.activityContainer}>
                        <ActivityIndicator size="large" color={COLORED} />
                        <PrimaryText style={styles.connectingText}>Connecting</PrimaryText>
                    </View>
                )}
                {this.props.modalVisible && <ManualAddressInput
                    onRequestClose={() => {
                        console.log('REQUEST CLOSE MODAL');
                        this.props.connectToDesktop();
                    }}
                />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_LIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    connectingText: {
        marginTop: 13
    }
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
