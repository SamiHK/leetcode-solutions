class EnDeCoDe {
    
    constructor() {
        //stateless program
    }

    encode(message) {
        let cipher = "";
        for(let word of message){
            // 4#sami6#haroon5#loves6#coding
            cipher += word.length + "#" + word;
        }

        return cipher;
    }

    decode(message){
        // 4#sami6#haroon5#loves6#coding
        let result = [];
        let i = 0;

        while(i < message.length){

            let j = i;
            while (message[j] !== "#"){
                
                j = j+1;

                let length = parseInt(message[j-1]);

                
                result.push( message.substring(j+1, j+length+1));
                i = j+length+1;
            }

        }

        return result;
    }
}
  
var cipher = new EnDeCoDe();

var message = ["sami", "haroon", "loves", "coding"]; 
console.log(message);
var message = cipher.encode(message);
console.log(message);
var message = cipher.decode(message);
console.log(message);