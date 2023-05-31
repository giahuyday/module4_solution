
var letter = function(Names){
    for(var i = 0; i < Names.length; i++)
        if(Names[i][0] == "j" || Names[i][0] == "J")
            console.log("Goodbye " + Names[i])
        else
            console.log("Hello " + Names[i])
}

Name = ["JSome", "json", "HTML", "CSS"]

// console.log(Name)
console.log(letter(Name))