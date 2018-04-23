import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';

import PrimaryText from '../UI/Text/PrimaryText';
import { COLORED, SECONDARY_LIGHT } from '../../constants/colors';
import { toggleAutoBpm } from '../player/playerAPI';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.onPressAutoplay = this.onPressAutoplay.bind(this);
    }

    onPressAutoplay() {
        toggleAutoBpm(this.props.ws);
    }

    render() {
        let { autoBpm } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.onPressAutoplay}
                    style={[styles.row, styles.borderBottom, styles.borderTop]}
                >
                    <View style={styles.innerRow}>
                        <PrimaryText>BPM autoplay: </PrimaryText>
                        <Switch
                            onTintColor={COLORED}
                            thumbTintColor={SECONDARY_LIGHT}
                            value={autoBpm}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.row, styles.borderBottom]}>
                    <View style={styles.innerRow}>
                        <PrimaryText>BPM interval: </PrimaryText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <View style={styles.innerRow}>
                        <PrimaryText>BPM hopp: </PrimaryText>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        // backgroundColor: 'white',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
    },
    innerRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        // backgroundColor: 'lightblue', //dev
        padding: 15        
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: COLORED
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: COLORED
    }
});

function mapStateToProps(state, ownProps) {
    let { ws } = state.connection;
    let { autoBpm } = state.player;

    return {
        ...ownProps,
        ws,
        autoBpm
    };
}

export default connect(mapStateToProps)(Settings);
