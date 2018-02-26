import { SERVER_PORT } from '../constants';

let baseURI = '192.168.1';
// let baseURI = '193.11.185';

export default function findServer() {
    console.log('CONNECTING...');

    let promises = [];

    for (let i = 0; i < 256; i++) {
        promises.push(check(i));
    }

    let res = Promise.race(promises);

    // delete propmises;
    promises = null;

    return res;
}

export function directConnect(ip) {
    console.log('CONNECTING DIRECTLY...');

    return new Promise((resolve, reject) => {
        let ws = new WebSocket(`ws://${ip}:${SERVER_PORT}/remote`);

        ws.onopen = () => resolve({
            ws,
            desktopAddress: ip
        });
        ws.onclose = e => reject(e.message);
    });
}

function check(i = 0) {
    return new Promise((resolve, reject) => {
        let ws = new WebSocket(`ws://${baseURI}.${i}:${SERVER_PORT}/remote`);

        ws.onopen = () => resolve({
            ws,
            desktopAddress: `${baseURI}.${i}`
        });

        ws.onclose = e => setTimeout(function(e) {
            reject(e.message);
        }, 5000, e);
    });
}
