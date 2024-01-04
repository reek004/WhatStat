import {dataArray,dateMap,timeMap,senderMap,emojiMap,textMap} from "./data_arrangement.js";



// total no. of conversation

totalConversation = dataArray.length;






//no. of Messages send by the two persons

messageMap = new Map(senderMap)

const messageEntry1 = messageMap.entries().next().value;
const messagePerson1 = messageEntry1[0];//name of person 1
const messageValue1 = messageEntry1[1];//no. of messages by person 1

const messageEntry2 = messageMap.entries().next().value;
const messagePerson2 = messageEntry2[0];//name of person 2
const messageValue2 = messageEntry2[1];//no. of messages by person 2





// top 5 used emojis

mostUsedEmojiMap = new Map(emojiMap)


const emojiEntry1 = mostUsedEmojiMap.entries().next().value;
const emoji1 = emojiEntry1[0]; // emoji 1
const emojiValue1 = emojiEntry1[1]; // no. of times emoji 1 is used

const emojiEntry2 = mostUsedEmojiMap.entries().next().value;
const emoji2 = emojiEntry2[0]; // emoji 2
const emojiValue2 = emojiEntry2[1]; // no. of times emoji 2 is used

const emojiEntry3 = mostUsedEmojiMap.entries().next().value;
const emoji3 = emojiEntry3[0]; // emoji 3
const emojiValue3 = emojiEntry3[1]; // no. of times emoji 3 is used

const emojiEntry4 = mostUsedEmojiMap.entries().next().value;
const emoji4 = emojiEntry4[0]; // emoji 4
const emojiValue4 = emojiEntry4[1]; // no. of times emoji 4 is used

const emojiEntry5 = mostUsedEmojiMap.entries().next().value;
const emoji5 = emojiEntry5[0]; // emoji 5
const emojiValue5 = emojiEntry5[1]; // no. of times emoji 5 is used









// Mosted texted on which date

mostTextedMap = new Map(dateMap);

const mostTextedEntry = mostTextedMap.entries().next().value;
const mostTextedDate = mostTextedEntry[0];

var inputDate = new Date(mostTextedDate);

var options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};


const formattedDate = inputDate.toLocaleString('en-US', options);// On which date did they texted the most
const mostTextedTime = mostTextedEntry[1];// how many they have send






// Most Active time


