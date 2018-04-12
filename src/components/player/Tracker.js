import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import Heading from '../UI/Text/Heading';
import PrimaryText from '../UI/Text/PrimaryText';
import SecondaryText from '../UI/Text/SecondaryText';
import SoundLevel from './SoundLevel';
import { COLORED } from '../../constants/colors';

class Tracker extends Component {
    constructor(props) {
        super(props);

        // this.onSwipeRight = this.onSwipeRight.bind(this);
    }

    onSwipeRight(gesture) {
        console.log('RIGHT');
        console.log(gesture);
    }

    onSwipeLeft(gesture) {
        console.log('LEFT');
        console.log(gesture);
    }

    render() {
        let { bpm, song, artist } = this.props;

        return (
            <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft(state)}    
                onSwipeRight={(state) => this.onSwipeRight(state)}    
                style={styles.container}
            >
                {/* <View> */}
                    <SoundLevel style={styles.soundBar}/>                                        
                    <Heading style={styles.songname}>{song}</Heading>
                    <SecondaryText>{artist}</SecondaryText>
                    <PrimaryText style={styles.bpm}>{parseInt(bpm) ? '' : bpm}</PrimaryText>
                {/* </View> */}
            </GestureRecognizer>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    songname: {
        fontSize: 30,
        marginBottom: 25
    },
    bpm: {
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
        ...state.player
    };
}

export default connect(mapStateToProps)(Tracker);
