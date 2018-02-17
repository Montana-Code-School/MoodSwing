import {wrapStore} from 'react-chrome-redux';

const store; // a normal Redux store

wrapStore(store, {portName: 'MoodSwing'}); // make sure portName matches