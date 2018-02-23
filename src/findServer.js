import { SERVER_PORT } from './constants';

let baseURI = '192.168.1';
// let baseURI = '193.11.185';

export default function findServer() {
    let promises = [];

    for (let i = 0; i < 256; i++) {
        promises.push(check(i));
    }

    let res = Promise.race(promises);

    // delete propmises;
    promises = null;

    return res;
}

function check(i = 0) {
    return new Promise((resolve, reject) => {
        let ws = new WebSocket(`ws://${baseURI}.${i}:${SERVER_PORT}/remote`);

        ws.onopen = () => resolve(ws);
        ws.onclose = e => setTimeout(function(e) {
            reject(e.message);
        }, 5000, e);
    });
}