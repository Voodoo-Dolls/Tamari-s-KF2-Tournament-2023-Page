var current = document.getElementById("current_page");
var background = document.getElementById("background");
var image1 = "url(/img/tournament_bg.png)";
var image2 = "url(/img/community_bg.png)";
var image3 = "url(/img/cd_bg.png)";


const background_images ={
    ["TOURNAMENT INFO"]:image1,
    ["OUR COMMUNITY"]:image2,
    ["ABOUT CD"]:image3
};



background.style.backgroundImage= background_images[current.innerHTML];
































// var welcome = document.getElementById("welcome");
// var about = document.getElementById("about");
// var objective = document.getElementById("objective");
// var features = document.getElementById("features");
// var register = document.getElementById("register");
// var test = document.getElementById("test");
// var welcomeAnchor = document.getElementById("header1");
// var aboutAnchor = document.getElementById("header2");
// var objectiveAnchor = document.getElementById("header3");
// var featuresAnchor = document.getElementById("header4");
// var registerAnchor = document.getElementById("header5");
// var global = "hello";

// let myHeaders =[
//     [welcome, welcomeAnchor],
//     [about, aboutAnchor],
//     [objective, objectiveAnchor],
//     [features, featuresAnchor],
//     [register, registerAnchor]
// ];

// function myFunction(){ 

//     for (let i = 0; i < myHeaders.length; i++){
//         if (myHeaders[i][0].getBoundingClientRect().y < 200 && myHeaders[i][0].getBoundingClientRect().y > 0){
//             myHeaders[i][1].style.color="red";
//         }

//         else if (myHeaders[i][0].getBoundingClientRect().bottom < 0){
//             myHeaders[i][1].style.color="white";
//         }

//         else{
//             myHeaders[i][1].style.color="white";
//         }
  
     
        

           
//     };   
    
// };
