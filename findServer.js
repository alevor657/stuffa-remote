/**
 * This finction searches thru the network and tries to estabilish a connection to the server.
 * Timeout for connection is 400ms.
 * Works recursivly
 * 
 * @param {int} i Incrementor
 * @returns Promise
 */
export default async function findServer(i = 0) {
    return new Promise((resolve, reject) => {
        let baseURI = '192.168.1';
        console.log(i);

        let ws = new WebSocket(`ws://${baseURI}.${i}:8080/remote`);

        let timer = setTimeout(() => {
            console.log('timeout');
            ws.close();
            i++;

            if (i > 255) {
                reject('Could not find any server');
                clearTimeout(timer);
            } else {
                findServer(i);
            }
        }, 400);
        
        ws.onopen = res => {
            console.log('resolved');
            clearTimeout(timer);
            resolve(res);
        };
    });
}