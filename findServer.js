export default async function findServer(i = 55) {
    return new Promise((resolve, reject) => {
        let baseURI = '192.168.1';
        
        if (i > 255) {
            reject('Could not find any server');
        }

        let ws = new WebSocket(`ws://${baseURI}.${i}:8080/remote`);

        let timer = setTimeout(() => {
            console.log('timeout');
            ws.close();
            findServer(++i);
            console.log(i);
        }, 1000);
        
        ws.onopen = res => {
            console.log('resolved');
            resolve(res);
        };

        // ws.onerror = () => {
        //     i ++;
        //     findServer(i);
        //     console.log(i);
        // }
    });
}