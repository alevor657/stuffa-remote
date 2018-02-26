import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/modalActions';

class ManualAddressInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <Modal
                    visible
                    animationType={'slide'}
                    onRequestClose={() => this._toggleModal()}
                >
                    <Text>Enter IP address</Text>
                    <TextInput/>
                    <Button title='Connect'/>
                </Modal>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey',
    }
});

function mapStateToProps(state, ownProps) {
    return {
        // ,
        // ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        open: bindActionCreators(actions.openModal, dispatch),
        close: bindActionCreators(actions.closeModal, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManualAddressInput);
