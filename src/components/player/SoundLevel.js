import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class SoundLevel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // dev
        if (this.props.level > 100 || this.props.level < 0) {
            throw new Error('BAD LEVEL VALUE');
        }


        return (
            <View style={[styles.bar, {
                width: `${this.props.level}%`,
                opacity: this.props.level / 100
            }, this.props.style]}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: 'green',
        height: 15,
    }
});

export default SoundLevel;
