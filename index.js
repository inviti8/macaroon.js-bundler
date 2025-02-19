
import './preload.js'
import { Buffer } from 'buffer/'
import { MacaroonsBuilder } from 'macaroons.js';

window.Buffer = Buffer;
window.MacaroonsBuilder = MacaroonsBuilder;