#!/usr/bin/bash

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bu‌​ndle --assets-dest android/app/src/main/res/ && yarn run android
