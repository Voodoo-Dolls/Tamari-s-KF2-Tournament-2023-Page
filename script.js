var welcome = document.getElementById("welcome");
var about = document.getElementById("about");
var objective = document.getElementById("objective");
var features = document.getElementById("features");
var register = document.getElementById("register");
var test = document.getElementById("test");
var welcomeAnchor = document.getElementById("header1");
var aboutAnchor = document.getElementById("header2");
var objectiveAnchor = document.getElementById("header3");
var featuresAnchor = document.getElementById("header4");
var registerAnchor = document.getElementById("header5");
var global = "hello";

let myHeaders =[
    [welcome, welcomeAnchor],
    [about, aboutAnchor],
    [objective, objectiveAnchor],
    [features, featuresAnchor],
    [register, registerAnchor]
];

function myFunction(){ 

    for (let i = 0; i < myHeaders.length; i++){
        if (myHeaders[i][0].getBoundingClientRect().y < 200 && myHeaders[i][0].getBoundingClientRect().y > 0){
            myHeaders[i][1].style.color="red";
        }

        else if (myHeaders[i][0].getBoundingClientRect().bottom < 0){
            myHeaders[i][1].style.color="white";
        }

        else{
            myHeaders[i][1].style.color="white";
        }
  
     
        

           
    };   
    
};
