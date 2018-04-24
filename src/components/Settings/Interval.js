import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PrimaryText from '../UI/Text/PrimaryText';
import SecondaryText from '../UI/Text/SecondaryText';
import Heading from '../UI/Text/Heading';
import RoundIconButton from '../UI/Button/RoundIconButton';
import { COLORED, SECONDARY_LIGHT } from '../../constants/colors';
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
            <View style={[styles.row, styles.borderBottom]}>
                <View style={[styles.innerRow, styles.intervalSegment]}>
                    <Heading>{baseBpm}</Heading>
                </View>
                <View style={[styles.innerRow, styles.intervalSegment]}>
                    <SecondaryText>{`${baseBpm - bpmInterval} - ${baseBpm + bpmInterval}`}</SecondaryText>
                </View>
                <PlusMinusValue
                    value={bpmInterval}
                    onPlus={this.onPlus}
                    onMinus={this.onMinus}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 2,
        // flexDirection: 'row',
        // justifyContent: 'center',
    },
    innerRow: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        // alignContent: 'center',
        // justifyContent: 'center',
        padding: 15
    },
    intervalSegment: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: COLORED
    },
});

export default Interval;
