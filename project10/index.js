"use strict";
import { example1, example2 } from './lib';
document.getElementById('app').innerHTML += example1() + ' ';
document.getElementById('app').innerHTML += example2() + ' ';
console.log(DEV_MODE);
console.log(EXAMPLE);
