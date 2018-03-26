import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_TEXT, SECONDARY } from '../../constants/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { play, pause, replay, nextTrack } from '../../actions/playerActions';

class Controls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { play, pause, replay, next, isPlaying } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.controlWrap}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={replay}                        
                    >
                        <Icon
                            name="replay"
                            size={40}
                            color={PRIMARY_TEXT}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={isPlaying ? pause : play}
                    >
                        <Icon
                            name={isPlaying ? 'pause' : 'play-arrow'}
                            size={60}
                            color={PRIMARY_TEXT}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={next}
                    >
                        <Icon
                            name="navigate-next"
                            size={50}
                            color={PRIMARY_TEXT}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: '15%',
    },
    controlWrap: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: SECONDARY
    },
});

function mapStateToProps(state, ownProps) {
    return {
        isPlaying: state.player.isPlaying,
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        play: bindActionCreators(play, dispatch),
        pause: bindActionCreators(pause, dispatch),
        replay: bindActionCreators(replay, dispatch),
        next: bindActionCreators(nextTrack, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
