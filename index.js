// SRP Project
// Written by Thomas Gustav Stengaard Møller
//

var currentImage = 0;
let profile = [13,7]
var dogImages = new Array("dog.png","dog2.png","dog3.png","dog4.png");
var catImages = new Array("cat.png","cat2.png","cat3.png","cat4.png");

function start() {
    //Sets up buttons
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    button1.onclick = Promote;
    button2.onclick = Demote;
    // Displays random image
    var i = Math.floor(Math.random() * 4);
    document.getElementById("dogOrCat").src = dogImages[i];
}

function Promote() {
    // Dog Liked
    if (currentImage == 0) {
        if (profile[0] != 20) {
            profile[0] += 1;
            profile[1] -= 1;
            var catOrDog = Math.floor(Math.random() * 20);
            if (catOrDog > profile[0]) {
                //Chooses random cat image
                var i = Math.floor(Math.random() * 4);
                document.getElementById("dogOrCat").src = catImages[i];
                currentImage = 1;
            }
            else {
                //Chooses random dog image
                var i = Math.floor(Math.random() * 4);
                document.getElementById("dogOrCat").src = dogImages[i];
                currentImage = 0;
            }
        }
        if (profile[0] == 20) {
          //Chooses random dog image
          var i = Math.floor(Math.random() * 4);
          document.getElementById("dogOrCat").src = dogImages[i];
        }
    }

    // Cat Liked
    if (currentImage == 1) {
        if (profile[1] != 20) {
            profile[1] += 1;
            profile[0] -= 1;
            var catOrDog = Math.floor(Math.random() * 20);
        if (catOrDog > profile[1]) {
           //Chooses random dog image
           var i = Math.floor(Math.random() * 4);
           document.getElementById("dogOrCat").src = dogImages[i];
            currentImage = 0;
        }
        else {
           //Chooses random cat image
           var i = Math.floor(Math.random() * 4);
           document.getElementById("dogOrCat").src = catImages[i];
            currentImage = 1;
        }
        }
        if (profile[1] == 20) {
          //Chooses random cat image
          var i = Math.floor(Math.random() * 4);
          document.getElementById("dogOrCat").src = catImages[i];
        }
    }
    console.log('dog value' + profile[0]);
    console.log('cat value' + profile[1]);
}

function Demote() {
    // Dog Disliked
    if (currentImage == 0) {
        if (profile[1] != 20) {
            profile[0] -= 1;
            profile[1] += 1;
            var catOrDog = Math.floor(Math.random() * 20);
        if (catOrDog > profile[0]) {
           //Chooses random cat image
           var i = Math.floor(Math.random() * 4);
           document.getElementById("dogOrCat").src = catImages[i];
            currentImage = 1;
        }
        else {
           //Chooses random dog image
           var i = Math.floor(Math.random() * 4);
           document.getElementById("dogOrCat").src = dogImages[i];
            currentImage = 0;
        }
        }
    }

    // Cat Disliked
    if (currentImage == 1) {
        if (profile[0] != 20) {
            profile[1] -= 1;
            profile[0] += 1;
            var catOrDog = Math.floor(Math.random() * 20);
        if (catOrDog > profile[1]) {
           //Chooses random dog image
           var i = Math.floor(Math.random() * 4);
           document.getElementById("dogOrCat").src = dogImages[i];
            currentImage = 0;
        }
        else {
           //Chooses random cat image
           var i = Math.floor(Math.random() * 4);
           document.getElementById("dogOrCat").src = catImages[i];
            currentImage = 1;
        }
        }
    }
    console.log('dog value: ' + profile[0]);
    console.log('cat value: ' + profile[1]);
}

window.onload = start;
