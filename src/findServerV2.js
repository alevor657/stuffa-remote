let baseURI = '192.168.1';

export default function findServer() {
    let promises = [];

    for (let i = 0; i < 256; i++) {
        console.log(i);
        promises.push(check(i));
    }

    let res = Promise.race(promises);

    // delete propmises;
    promises = null;

    return res;
}

function check(i = 0) {
    return new Promise((resolve, reject) => {
        let ws = new WebSocket(`ws://${baseURI}.${i}:8080/remote`);

        ws.onopen = () => resolve(ws);
        ws.onclose = e => setTimeout(function(e) {
            reject(e.message);
        }, 1000, e);
    });
}