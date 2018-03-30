import * as types from '../../constants/actionTypes';

/**
 * This module provides an API to communicate with the desktop
 */

function generateMessage(type, payload = null) {
    return JSON.stringify({
        type,
        payload
    });
}

export function requestState(ws) {
    console.log('SENDING REQUEST STATE');
    ws.send(generateMessage(types.STATE_UPDATE));
}

export function play(ws) {
    console.log('SENDING PLAY');
    ws.send(generateMessage(types.PLAY));
}

export function pause(ws) {
    console.log('SENDING PAUSE');
    ws.send(generateMessage(types.PAUSE));
}

export function replay(ws) {
    console.log('SENDING REPLAY');
    ws.send(generateMessage(types.REPLAY));
}

export function nextTrack(ws) {
    console.log('SENDING NEXT_TRACK');
    ws.send(generateMessage(types.NEXT_TRACK));    
}

