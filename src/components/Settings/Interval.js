import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import PrimaryText from '../UI/Text/PrimaryText';
import SecondaryText from '../UI/Text/SecondaryText';
import { COLORED } from '../../constants/colors';
import PlusMinusValue from './PlusMinusValue';
import { setInterval } from '../player/playerAPI';

class Interval extends Component {
    constructor(props) {
        super(props);

        this.onMinus = this.onMinus.bind(this);
        this.onPlus = this.onPlus.bind(this);
    }

    onMinus() {
        let { ws, bpmInterval } = this.props;

        setInterval(ws, bpmInterval - 1);
    }

    onPlus() {
        let { ws, bpmInterval } = this.props;

        setInterval(ws, bpmInterval + 1);
    }

    render() {
        let { autoBpm, baseBpm, bpmInterval } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.innerRow}>
                        <SecondaryText
                            style={styles.description}
                        >base BPM</SecondaryText>
                        <PrimaryText
                            style={styles.value}
                        >{baseBpm}</PrimaryText>
                    </View>
                    <View style={styles.innerRow}>
                        <SecondaryText
                            style={styles.description}
                        >interval</SecondaryText>
                        <PrimaryText
                            style={styles.value}
                        >{`${baseBpm - bpmInterval} - ${baseBpm + bpmInterval}`}</PrimaryText>
                    </View>
                </View>
                <PlusMinusValue
                    value={bpmInterval}
                    onPlus={this.onPlus}
                    onMinus={this.onMinus}
                    description={
                        <SecondaryText
                            style={styles.description}
                        >set interval</SecondaryText>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    innerRow: {
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
    },
    value: {
        fontSize: 16,
    },
    description: {
        fontSize: 16,
        color: 'grey',
        paddingBottom: 6,
        alignSelf: 'center'
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: COLORED
    },
});

export default Interval;
