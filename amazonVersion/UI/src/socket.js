import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'https://cryptofutures.cz:3001'; //16.16.172.241 amazon

export const socket = io(URL, {secure: true});
