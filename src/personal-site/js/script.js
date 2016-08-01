// var hobbies = ["Web Developer", "Student of DCU",
//     "Book Reader", "Tea Drinker", "Software Engineer"
// ];
var imageUrl = "../../../resources/media/images/";
var images = ["baloon-fest-baltinglass.jpeg", "carrigeen-sunset.jpeg",
    "ha-penny-bridge.jpg", "ha-penny-bridge2.JPG",
    "nou-camp-barcelona-pitch-view.jpeg",
    "sagrada-familia-barcelona.JPG"
];
window.onload = function() {
    var randomIndex = Math.floor((Math.random() * images.length));
    console.log(randomIndex);
    if (randomIndex === 1) {
        document.getElementById("my-name").setAttribute("id", "my-name-black");
        document.getElementById("what-I-do").setAttribute("id", "what-I-do-black");
    }
    document.getElementById("bg-image").setAttribute("src",
        (imageUrl + images[randomIndex]));
};

// var index = 0;
// function changeHobby() {
// 	document.getElementById("hobby").innerHTMl = hobbies[index];
// 	index++;
// }

// setInterval(changeHobby, 3000)
