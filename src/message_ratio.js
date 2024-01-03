import {senderMap} from ".script.js";

 messageMap = new Map(senderMap)

const entry1 = messageMap.entries().next().value;
const person1 = entry1[0];//name of person 1
const value1 = entry1[1];//no. of messages by person 1

const entry2 = messageMap.entries().next().value;
const person2 = entry2[0];//name of person 2
const value2 = entry2[1];//no. of messages by person 2