import { io } from "socket.io-client";
const socket = io("http://sdpimagedetection.com:80")
socket.connect()
socket.on('connect', () => {
    console.log('socket is connected ');
})
socket.on('error', (err) => {
    console.log('socket is not connected ', err);
})

export default socket;
