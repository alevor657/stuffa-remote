import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/modalActions';
import { connectToDesktop } from '../actions/connectionActions';

class ManualAddressInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ip: ''
        };

        this._handeSubmit = this._handeSubmit.bind(this);
    }

    _handeSubmit() {
        this.props.connectToDesktop(this.state.ip);
        this.props.close();
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    visible={this.props.visible}
                    animationType={'slide'}
                    onRequestClose={() => {
                        this.props.onRequestClose()
                        this.props.close();
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <TextInput
                                autoFocus
                                placeholder='IP address'
                                autoCorrect={false}
                                keyboardType='numeric'
                                returnKeyLabel='Connect'
                                onSubmitEditing={this._handeSubmit}
                                onChangeText={(ip) => this.setState({ ip })}
                            />
                            <View style={styles.buttonContainer}>
                                <Button
                                    title='connect'
                                    onPress={this._handeSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'grey',
    },
    innerContainer: {
        flex: 1,
        padding: '5%'
        // justifyContent: 'space-between'
    },
    buttonContainer: {
        marginTop: 20,
        justifyContent: 'flex-start',
        flex: 1
    }
});

function mapStateToProps(state, ownProps) {
    return {
        visible: state.modal.visible,
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        open: bindActionCreators(actions.openModal, dispatch),
        close: bindActionCreators(actions.closeModal, dispatch),
        connectToDesktop: bindActionCreators(connectToDesktop, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManualAddressInput);
