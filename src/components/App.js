import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectToDesktop } from '../actions/connectionActions';
import drawAlert from './drawAlert';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { connectToDesktop } = this.props;

        connectToDesktop();
    }

    componentWillUnmount() {
        this.ws.close();
    }

    componentWillReceiveProps(props) {
        let { connectToDesktop } = this.props;

        if (!props.ws) {
            drawAlert(connectToDesktop, console.log);
        } else {
            props.ws.onclose = () => drawAlert(connectToDesktop, console.log);
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
        failCounter: state.connection.failCounter,
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        connectToDesktop: bindActionCreators(connectToDesktop, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
