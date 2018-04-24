import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PrimaryText from '../UI/Text/PrimaryText';
import SecondaryText from '../UI/Text/SecondaryText';
import Heading from '../UI/Text/Heading';
import RoundIconButton from '../UI/Button/RoundIconButton';
import { COLORED, SECONDARY_LIGHT } from '../../constants/colors';

class PlusMinusValue extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { value } = this.props;

        return (
            <View style={[styles.innerRow, styles.intervalSegment]}>
                <RoundIconButton
                    icon={
                        <Icon
                            name='minus'
                            size={20}
                            color='white'
                        />
                    }
                    style={styles.icon}
                    onPress={this.props.onMinus}
                />
                <PrimaryText
                    style={{
                        alignSelf: 'center'
                    }}
                >{value}</PrimaryText>
                <RoundIconButton
                    icon={
                        <Icon
                            name='plus'
                            size={20}
                            color='white'
                        />
                    }
                    style={styles.icon}
                    onPress={this.props.onPlus}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    icon: {
        alignSelf: 'center',
        margin: 20,
        width: 40,
        height: 40,
        // position: 'absolute'
    },
});

export default PlusMinusValue;
