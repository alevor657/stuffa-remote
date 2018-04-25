import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Switch } from 'react-native';

import PrimaryText from '../UI/Text/PrimaryText';
import SecondaryText from '../UI/Text/SecondaryText';
import PlusMinusValue from './PlusMinusValue';
import { setBpmStep } from '../player/playerAPI';

class BpmJump extends Component {
    constructor(props) {
        super(props);

        this.onMinus = this.onMinus.bind(this);
        this.onPlus = this.onPlus.bind(this);
    }

    onMinus() {
        let { ws, bpmJump } = this.props;

        setBpmStep(ws, bpmJump - 1);
    }

    onPlus() {
        let { ws, bpmJump } = this.props;

        setBpmStep(ws, bpmJump + 1);
    }

    render() {
        return (
            <View style={styles.row}>
                <PlusMinusValue
                    value={this.props.bpmJump}
                    onPlus={this.onPlus}
                    onMinus={this.onMinus}
                    description={
                        <SecondaryText
                            style={styles.description}
                        >
                            jump
                        </SecondaryText>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
    },
    description: {
        fontSize: 12,
        color: 'grey',
        paddingBottom: 6,
        alignSelf: 'center'
    },
    innerRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
});

export default BpmJump;
