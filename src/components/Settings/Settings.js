import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';

import { COLORED, SECONDARY_LIGHT } from '../../constants/colors';
import Interval from './Interval';
import BpmAutoplay from './BpmAutoplay';
import BpmJump from './BpmJump';

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let { autoBpm, baseBpm, bpmInterval } = this.props;

        return (
            <View style={styles.container}>
                <BpmAutoplay {...this.props}/>

                <Interval {...this.props}/>

                <BpmJump {...this.props}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
});

function mapStateToProps(state, ownProps) {
    let { ws } = state.connection;
    let { autoBpm, baseBpm, bpmInterval, bpmJump } = state.player;

    return {
        ...ownProps,
        ws,
        autoBpm,
        baseBpm,
        bpmInterval,
        bpmJump
    };
}

export default connect(mapStateToProps)(Settings);
