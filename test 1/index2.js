


const video = document.querySelector('video');
video.addEventListener('canplay', function () {
    console.log("canplay");
});

video.addEventListener("play", function () {
    console.log("play");
});
video.addEventListener("pause", function () {
    console.log("pause");
});
video.addEventListener("playing", function () {
    console.log("playing");
});
video.addEventListener("ended", function (){
    console.log("Thanks for watching");
});
video.addEventListener("volumechange", function (){
    console.log("volumechange");
});





//add Style 
function addStyle() {

var myVar = document.querySelector("#paraId");
//myVar.style.color ="red";
//myVar.style.fontSize ="3rem";
//myVar.style.fontWeight ="bold";
//myVar.style.fontStyle="italic";
myVar.classList.add("para-style");
}
function removeStyle() {
var myVar = document.querySelector("#paraId");
myVar.classList.remove("para-style");

}







//remove style





var photos = ["images/1.jpg", "images/2.jpg","images/3.jpg"]
var imagTag = document.querySelector("img");

var count=0;

function next(){
    count++;
    if(count >=photos.length){
        count=0;
        imagTag.src = photos[count];
    }else{
        imagTag.src = photos[count];
    }
    imagTag.src=photos[count];
    }

function prev(){
count--;
if (count < 0){
count=photos.length -1;
imagTag.src = photos[count];
}else{
    imagTag.src = photos[count];
}
}





//form starts here
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener('submit', formHandler);

function formHandler(e){
    e.preventDefault();
   // console.log(name.value);
    //console.log(email.value);
    //console.log(password.value);
   
    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

console.log(userInfo);
}







//ends here








