import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import Heading from '../UI/Text/Heading';
import PrimaryText from '../UI/Text/PrimaryText';
import SecondaryText from '../UI/Text/SecondaryText';
import SoundLevel from './SoundLevel';
import { COLORED } from '../../constants/colors';
import { setSound } from './playerAPI'; 

class Tracker extends Component {
    constructor(props) {
        super(props);
    }

    onSwipe(dir, gesture) {
        if (dir !== swipeDirections.SWIPE_LEFT && dir !== swipeDirections.SWIPE_RIGHT) {
            return;
        }

        let width = Dimensions.get('window').width,
            dx = gesture.dx,
            currentLevel = this.props.soundLevel;

        // negative or pos percentage of movement
        let step = dx / width * 100 / 2;

        console.log('RES1', step);        
        // round so that step is a factor of 5
        let temp = step % 5;
        temp && (step = step - temp + 5);
        console.log('RES2', step);

        let result = currentLevel + step;

        (result < 0) && (result = 0);
        (result > 100) && (result = 100);
        console.log('CURRENT', currentLevel);
        console.log('RESULT', result);

        setSound(this.props.ws, result);
    }

    render() {
        let { bpm, song, artist, soundLevel } = this.props;

        return (
            (song || artist) ? (
                <GestureRecognizer
                    onSwipe={(dir, state) => this.onSwipe(dir, state)}
                    style={styles.container}
                    config={{ velocityThreshold: 0 }}
                >
                    <SoundLevel
                        style={styles.soundBar}
                        level={soundLevel}
                    />                                        
                    <Heading numberOfLines={1} style={styles.songname}>{song}</Heading>
                    <SecondaryText numberOfLines={1}>{artist}</SecondaryText>
                    {bpm ? (<PrimaryText style={styles.bpm}>{bpm} BPM</PrimaryText>) : null}
                </GestureRecognizer>
            ) : (
                <View
                    style={styles.container}                
                >
                    <Heading>Select a song on the computer!</Heading>
                </View>
            )      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // MAD FUCKING HACK TO MAKE SWIPE WORK
        backgroundColor: 'transparent',
    },
    songname: {
        fontSize: 30,
        marginBottom: 25,
        textAlign: 'center'        
    },
    bpm: {
        marginTop: 10,
        fontWeight: 'bold'
    },
    soundBar: {
        alignSelf: 'flex-start',
        backgroundColor: COLORED
    }
});

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        ws: state.connection.ws,
        ...state.player,
    };
}

export default connect(mapStateToProps)(Tracker);
