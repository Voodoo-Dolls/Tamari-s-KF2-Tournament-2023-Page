var welcome = document.getElementById("welcome");
var about = document.getElementById("about");
var features = document.getElementById("features");
var register = document.getElementById("register");
var test = document.getElementById("test");
var welcomeAnchor = document.getElementById("header1");
var aboutAnchor = document.getElementById("header2");
var featuresAnchor = document.getElementById("header3");
var registerAnchor = document.getElementById("header4");
var global = "hello";

let myHeaders =[
    [welcome, welcomeAnchor],
    [about, aboutAnchor],
    [features, featuresAnchor],
    [register, registerAnchor]
];

function myFunction(){ 
    welcomeAnchor.innerHTML= myHeaders[0][0].getBoundingClientRect().y;
    aboutAnchor.innerHTML= myHeaders[1][0].getBoundingClientRect().y;
    featuresAnchor.innerHTML= myHeaders[2][0].getBoundingClientRect().y;

    for (let i = 0; i < myHeaders.length; i++){

        if (myHeaders[i][0].getBoundingClientRect().y < 400 && myHeaders[i][0].getBoundingClientRect().y > 0){

            myHeaders[i][1].style.color="yellow";

        }
        else{
            myHeaders[i][1].style.color="red";
        }

     
        

           
    };   
    
};
