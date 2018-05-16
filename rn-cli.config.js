const blacklist = require('metro/src/blacklist');

// Fixes the icons issue
module.exports = {
    getBlacklistRE() {
        return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/]);
    },
};
