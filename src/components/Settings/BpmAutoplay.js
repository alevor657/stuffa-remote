import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Switch } from 'react-native';

import PrimaryText from '../UI/Text/PrimaryText';
import { COLORED, SECONDARY_LIGHT } from '../../constants/colors';
import { toggleAutoBpm } from '../player/playerAPI';

class BpmAutoplay extends Component {
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
            <TouchableOpacity
                onPress={this.onPressAutoplay}
                style={styles.row}
            >
                <View style={styles.innerRow}>
                    <PrimaryText>BPM autoplay: </PrimaryText>
                    <Switch
                        onTintColor={COLORED}
                        thumbTintColor={SECONDARY_LIGHT}
                        value={autoBpm}
                        onValueChange={this.onPressAutoplay}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
    },
    innerRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // alignContent: 'center',
        justifyContent: 'center',
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

export default BpmAutoplay;
