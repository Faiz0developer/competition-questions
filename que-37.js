const splitWordsBySeparator = function(words, separator) {
    
  const splitWord =   words.join(separator).split(separator)
    if(splitWord.includes('')){
        const word =  splitWord.filter((ele) => ele!=='')
        return word
    }else{
        return splitWord
    }
};

const  words = ["|||"]
const separator = "|"
console.log(splitWordsBySeparator(words,separator))