function display() {                                                    //create function 'display'
    var A = "\"Norbauer Norbaforce Mark II\"", B = "\"Gok 7V\"";         //assign both variables 'A' and 'B' their values
    var A = A.fontcolor("blue");                                          //change font-color of variable 'A' to blue
    var B = B.fontcolor("red");                                            //change font-color of variable 'B' to red  
    var result = A +' and '+ B;                                             //assign variable 'result' equal to variables 'A' and 'B' concatenated
    document.getElementById('favKeyboards').innerHTML = result;              //assign document.getElementByID method an ID of 'favKeyboards'
}

function stringConcat() {                                               //create function 'stringConcat'
    var sentence = "Keyboards are luxury items, ";                       //assign variable 'sentence' a string value
    sentence += "but they save lives!";                                   //use "+=" operator to concatenate new string to variable 'sentence'
    document.getElementById("concatenate").innerHTML = sentence;           //create method document.getElementById with id='concatenate'
}

function Add(Y,Z) {                                                     //create function 'Add' with parameters Y and Z
    var Y = 20;                                                          //assign variable 'Y' value of 20
    var Z = 20;                                                           //assign variable 'Z' vaule of 20
    var result = Y + Z;                                                    //assign variable 'result' equal to Y + Z
    document.getElementById("addFunction").innerHTML = result;              //create method with id="addFunction" that prints variable 'result'
}