import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SecondaryText from '../UI/Text/SecondaryText';

class SoundLevel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'volume-medium'
        };
    }

    componentWillUpdate(nextProps) {
        let { level } = nextProps;
        // volume - high
        // volume - low
        // volume - medium

        if (level >= 70) {
            this.setState({ iconName: 'volume-high'});
        } else if (level >= 30 && level < 70) {
            this.setState({ iconName: 'volume-medium' });            
        } else {
            this.setState({ iconName: 'volume-low' });            
        }
    }

    render() {
        let { level } = this.props;
        // dev
        if (level > 100 || level < 0) {
            throw new Error('BAD LEVEL VALUE');
        }

        return (
            <View
                style={styles.wrapper}
            >
                <Icon
                    name={this.state.iconName}
                    size={20}
                    color='white'
                    style={{
                        zIndex: 2                        
                    }}
                />
                <SecondaryText
                    style={{
                        lineHeight: 20,
                        paddingLeft: 10,
                        zIndex: 2
                    }}
                >
                    Sound
                </SecondaryText>
                <View style={[styles.bar, {
                    width: `${this.props.level}%`,
                }, this.props.style]}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'transparent',
        height: 20,
        width: '100%',
    },
    bar: {
        opacity: 0.5,
        position: 'absolute',
        left: 0,
        // alignSelf: 'flex-start',
        // flex: 1,
        height: 20,
        backgroundColor: 'green',
        borderRadius: 4,
        // borderWidth: 1,
        // borderColor: 'red'
    }
});

export default SoundLevel;
