import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class SoundLevel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 50
        };
    }

    getWidth() {
        return `${this.state.level}%`;
    }

    render() {
        return (
            <View style={[styles.bar, {
                width: this.getWidth(),
                opacity: this.state.level / 100
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
