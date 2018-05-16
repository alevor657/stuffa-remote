import { SERVER_PORT } from '../constants';

let baseURI = '192.168.1';
// let baseURI = '193.11.185';

/**
 * For dev
 */
// let devIp = '192.168.1.62';
// let devIp = '193.11.184.204';
// let devIp = '193.11.184.144';

/**
 * For dev
 */
// export default function findServer() {
//     return directConnect(devIp);
// }

/**
 * Production
 */
export default function findServer() {
    console.log('CONNECTING...');

    let promises = [],
        lastIPSector = 0;

    for (let i = 0; i < 256; i++) {
        promises.push(check(i));
    }

    let res = Promise.race(promises);

    return res;
}

 /**
  * TODO: 
  * 
  * Bug with connect directley
  * Fix remembering of ip
  */


function check(i = 0) {
    return new Promise((resolve, reject) => {
        let ws = new WebSocket(`ws://${baseURI}.${i}:${SERVER_PORT}/remote`);

        let t = setTimeout((e) => {
            ws.removeEventListener('open', resolver);
            ws.close();
            ws = null;
            return reject(e);
        }, 3000, 'Timeouted');

        let resolver = function () {
            clearTimeout(t);
            return resolve({
                ws,
                desktopAddress: `${baseURI}.${i}`
            });
        };

        ws.addEventListener('open', resolver);
    });
}

export function directConnect(ip) {
    console.log('CONNECTING DIRECTLY...', ip);

    return new Promise((resolve, reject) => {
        let ws = new WebSocket(`ws://${ip}:${SERVER_PORT}/remote`);

        ws.onopen = () => resolve({
            ws,
            desktopAddress: ip
        });
        ws.onclose = e => reject(e.message);
    });
}
