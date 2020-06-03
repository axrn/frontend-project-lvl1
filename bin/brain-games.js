#!/usr/bin/env node

import { showToUser, askUser } from '../src/lib/cli.js';


showToUser('Welcome to the Brain Games!');
const username = askUser('May I have your name? ');
showToUser(`Hello, ${username}!`);
