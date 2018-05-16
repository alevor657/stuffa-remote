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

export function requestState(ws) {
    console.log('SENDING REQUEST STATE');
    ws.send(generateMessage(types.REQUEST_STATE));
}

export function setSound(ws, payload = null) {
    console.log('SENDING setSound');
    ws.send(generateMessage(types.SET_SOUND, payload));
}

export function setBaseBpm(ws, bpm = null) {
    console.log('SENDING SET_BPM');
    ws.send(generateMessage(types.SET_BPM, bpm));
}

export function setInterval(ws, interval = null) {
    console.log('SENDING SET_BPM_INTERVAL');
    ws.send(generateMessage(types.SET_BPM_INTERVAL, interval));
}

export function setBpmStep(ws, step = null) {
    console.log('SENDING SET_BPM_STEP');
    ws.send(generateMessage(types.SET_BPM_STEP, step));
}

export function toggleAutoBpm(ws) {
    console.log('SENDING BPM_AUTOPLAY_TOGGLE');
    ws.send(generateMessage(types.BPM_AUTOPLAY_TOGGLE));
}
