let baseURI = '192.168.1';

export default function findServer() {
    return new Promise((resolve, reject) => {
        check(0, resolve, reject);
    });
}

function check(i = 0, resolve, reject) {
    console.log(i);
    if (i > 255) {
        return reject('No server found');
    }

    let ws = new WebSocket(`ws://${baseURI}.${i}:8080/remote`);

    let timer = setTimeout(() => {
        if (ws.readyState === 1) {
            return resolve(ws);
        }

        i++;
        ws.close();
        clearTimeout(timer);
        check(i, resolve, reject);
    }, 100);
}
