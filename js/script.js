
var letter = function(Names){
        
        for (var i = 0; i < Names.length; i++) {
            var firstLetter = Names[i].charAt(0).toLowerCase();
            if (firstLetter === 'j') {
                byeSpeaker.speak(Names[i]);
            } else {
                helloSpeaker.speak(Names[i]);
            }
        };
}

var Names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// console.log(Name)
console.log(letter(Names))