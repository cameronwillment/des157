// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    //capture the submit event

    document.f.onsubmit = processForm;

    document.f.onreset = hideLim;

  //define process function
    function processForm() {
      myMove();

      console.log("processForm");
      //store user name in a variable
      var input1  = document.f.input1.value;
      var input2  = document.f.input2.value;
      var input3  = document.f.input3.value;
      var input4  = document.f.input4.value;
      var input5  = document.f.input5.value;


      var myMsg=document.getElementById('myMsg');

      myMsg.innerHTML = "Near " +input1 +" lived a man named John<br>"
      + "Who " + input2 + " untill early dawn<br>"
      + "Then one "+input3+" day<br>"
      + "His " +input4 + " made him stay<br>"
      + "Now John just "+input5 + " on his lawn.";
      //prevent page from reloading
      return false;

    }
    function hideLim(){
      console.log("Hide");
      // myMsg.style.display = 'none';
      // var elem = document.getElementById("animate");
      // elem.style.display = 'none';
      var elem = document.getElementById("animate");
      var pos  = 383;
      var id = setInterval(frame, 5);
      function frame() {
        if (pos == 150) {
          clearInterval(id);
        } else {
          pos--;
        // elem.style.top = 'px'- pos;
        elem.style.top = '50px';

        }
      }
    }


    function myMove() {
      console.log("move");
      var elem = document.getElementById("animate");
      var pos  = 150;
      var id = setInterval(frame, 5);
      function frame() {
        if (pos == 383) {
          clearInterval(id);
        } else {
          pos++;
        elem.style.top = pos + 'px';

        }
      }
    }


});
