
export var dataArray = [];

const dateArray = [];
const timeArray = [];
const senderArray = [];
const textArray = [];
const emojiArray = [];

export var dateMap = new Map();
export var timeMap = new Map();
export var senderMap = new Map();
export var textMap = new Map();
export var emojiMap = new Map();
















function uploadData() {

    dateArray.splice(0,dateArray.length);
    timeArray.splice(0,timeArray.length);
    senderArray.splice(0,senderArray.length);
    textArray.splice(0,textArray.length);
    emojiArray.splice(0,emojiArray.length);

    dateMap.clear();
    timeMap.clear();
    senderMap.clear();
    textMap.clear();
    emojiMap.clear();

    var fileInput = document.getElementById('chat_file');

    const prevFile = fileInput.files[0];
    var file = new Blob(prevFile);


    
    var fileReader = new FileReader();   

    fileReader.onload = function (e) {
        var content = e.target.result;
    
        const splitPattern = /(\d{2}\/\d{2}\/\d{2}, \d{1,2}:\d{2})/;
        const splittedData = content.split(splitPattern);
        
        //console.log(splittedData)
    
       for (let i = 1; i < splittedData.length; i += 2) {
           
            const element = splittedData[i]+splittedData[i+1]
            dataArray.push(element);
        }
        

        /*
        dataArray.forEach((chunk) => {
            console.log(chunk);
            console.log("------------------------------");
        });
        */

    };
    fileReader.readAsText(file);

    console.log("Uploaded the file --------------------------------------------");
}



















// Splitting the data into its respective parts

function splitData() {
    
    const tempArray = []
    const tempTextArray = []

    dataArray.forEach(element => {
        
        dateArray.push(element.substring(0,8))
        timeArray.push(element.substring(10,18).trim())
        senderArray.push(element.substring(20,findSecondOccurrence(element)).trim())
        tempArray.push(element.substring(findSecondOccurrence(element)+1).trim())

    });


    tempArray.forEach(element => {    

        var tempString = "";

        for(const character of element){

            if(isEmoji(character)){
                emojiArray.push(character);
                
            }
            else{
                tempString +=character;  
            }
        }
        
        if(tempString != undefined && tempString.length != 0){
            tempTextArray.push(tempString.toLowerCase())
        }  
    });
    

    tempTextArray.forEach(element => {
        words = element.split(" ");
        words.forEach(word => {
            textArray.push(word);
        });
    });


    // From ARRAYs to MAPs

    for(var i = 0;i<dateArray.length; i++){
        if(dateMap.has(dateArray[i])){
           var k = dateMap.get(dateArray[i]);
           dateMap.delete(dateArray[i]);
           dateMap.set(dateArray[i],k+1)
        }
        else{
           dateMap.set(dateArray[i],1);
        }
    }



    for(var i = 0;i<timeArray.length; i++){
        if(timeMap.has(timeArray[i])){
           var k = timeMap.get(timeArray[i]);
           timeMap.delete(timeArray[i]);
           timeMap.set(timeArray[i],k+1)
        }
        else{
           timeMap.set(timeArray[i],1);
        }
    }



    for(var i = 0;i<senderArray.length; i++){
        if(senderMap.has(senderArray[i])){
           var k = senderMap.get(senderArray[i]);
           senderMap.delete(senderArray[i]);
           senderMap.set(senderArray[i],k+1)
        }
        else{
           senderMap.set(senderArray[i],1);
        }
    }



    for(var i = 0;i<textArray.length; i++){
        if(textMap.has(textArray[i])){
           var k = textMap.get(textArray[i]);
           textMap.delete(textArray[i]);
           textMap.set(textArray[i],k+1)
        }
        else{
           textMap.set(textArray[i],1);
        }
    }
    removal(textMap);





    for(var i = 0;i<emojiArray.length; i++){
        if(emojiMap.has(emojiArray[i])){
           var k = emojiMap.get(emojiArray[i]);
           emojiMap.delete(emojiArray[i]);
           emojiMap.set(emojiArray[i],k+1)
        }
        else{
           emojiMap.set(emojiArray[i],1);
        }
    }

    // Sorting in Decending Order

    dateMap = sortMapDescending(dateMap);
    timeMap = sortMapDescending(timeMap);
    senderMap = sortMapDescending(senderMap);
    textMap = sortMapDescending(textMap);
    emojiMap = sortMapDescending(emojiMap);

    console.log("Splitting Done -----------------------------------------------------")

}



document.getElementById("get_analysis").addEventListener("click", dataToMap)

function dataToMap(){
    
    uploadData();
    setTimeout(splitData, 1000);

}









/*

// Display 

function showDate() {
    console.log(dateMap)
}


function showTime(){
    console.log(timeMap)
}

function showSender(){

    console.log(senderMap)
}


function showText(){

    console.log(textMap)
}

function showEmoji(){
    
    console.log(emojiMap)
}

*/













//utility functions


//finds 2nd occurrence of ':'

function findSecondOccurrence(str) {
    let firstIndex = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ":") {
            firstIndex = i;
            break;
        }
    }

    if (firstIndex !== -1) {
        for (let i = firstIndex + 1; i < str.length; i++) {
            if (str[i] === ":") {
                return i;
            }
        }
    }

    return -1; 
}







//String to word Array

function sentenceToWords(sentence) {
    
    var words = sentence.split(' ');
    return words;
}






// Checks if its an emoji or not 

function isEmoji(character) {
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/
    return emojiRegex.test(character);
}







// sorted the map in decending order of values

function sortMapDescending(map) {

    var sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    var sortedMap = new Map(sortedArray);

    return sortedMap;
}






// removing the unwanted keys 

function removal(map){

    const list = ["<media","omitted>","<this","edited>"]

    list.forEach(element => {
        map.delete(element)
    })

}