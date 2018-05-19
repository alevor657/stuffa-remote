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
            <View style={styles.container}>
                {this.props.description}
                <View style={[styles.innerRow, styles.intervalSegment, this.props.style]}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    innerRow: {
        flexDirection: 'row',
    },
    intervalSegment: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 20,
        width: 50,
        height: 50,
    },
});

export default PlusMinusValue;
