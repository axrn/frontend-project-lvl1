#!/usr/bin/env node

import { askNameAndGreet } from '../src/cli.js';
import { commonGame } from '../src/commonGame.js';
import config from '../src/brain-even-config.js';


const username = askNameAndGreet();
const brainEven = commonGame(config);
brainEven(username);
