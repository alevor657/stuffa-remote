import { Alert } from 'react-native';

export default function drawAlert(tryAgain, manual) {
    console.log('drawingAlert', arguments);
    Alert.alert(
        'BPlay desktop not detected! :C',
        'Make sure that desktop application is running and both the phone and computer are connected to the same Wi-Fi hotspot',
        [
            { text: 'try again', onPress: tryAgain },
            { text: 'manual input', onPress: manual },
        ],
        { cancelable: false }
    );
}
