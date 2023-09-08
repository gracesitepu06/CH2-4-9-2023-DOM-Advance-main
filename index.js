// document.querySelectorAll(".drum")[0].addEventListener("click", function () {
//   alert("I got clicked!");
// });

let drums = document.querySelectorAll(".drum");

drums.forEach(function (drum) {
  drum.addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    //this.style.color = "white";
    // alert("I got clicked!");
    console.log(this.innerHTML); //--> this: identitas dari button yg di click
    makeAudio(buttonInnerHTML);
    animatedButton(buttonInnerHTML);
  });

  //deteksi keyboard
  document.addEventListener("keypress", function (event) {
    console.log(event.key);
    makeAudio(event.key);
    animatedButton(event.key);
  });

  function makeAudio(key) {
    switch (key) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      default:
        console.log("Ini gk ada soundnya");
        break;
    }
  }

  function animatedButton(currentKey) {
    var button = document.querySelector(`.${currentKey}`);
    button.classList.add("pressed");

    setTimeout(() => {
      document.querySelector(`.${currentKey}`).classList.remove("pressed");
    }, 100);
  }
});

// for (var i = 0; i < drums.length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked");
//   });
//   //   addEventListener("click", function () {
//   //     alert("I got clicked");
//   //   });
// }
