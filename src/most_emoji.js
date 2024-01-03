import {emojiMap} from ".script.js";

const entries = Array.from(emojiMap.entries()).slice(0, 5);

mostUsedEmojiMap = new Map(entries);


const entry1 = mostUsedEmojiMap.entries().next().value;
const person1 = entry1[0]; // emoji 1
const value1 = entry1[1]; // no. of times emoji 1 is used

const entry2 = mostUsedEmojiMap.entries().next().value;
const person2 = entry2[0]; // emoji 2
const value2 = entry2[1]; // no. of times emoji 2 is used

const entry3 = mostUsedEmojiMap.entries().next().value;
const person3 = entry3[0]; // emoji 3
const value3 = entry3[1]; // no. of times emoji 3 is used

const entry4 = mostUsedEmojiMap.entries().next().value;
const person4 = entry4[0]; // emoji 4
const value4 = entry4[1]; // no. of times emoji 4 is used

const entry5 = mostUsedEmojiMap.entries().next().value;
const person5 = entry5[0]; // emoji 5
const value5 = entry5[1]; // no. of times emoji 5 is used