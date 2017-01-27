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

    //store user name in a variable
    var input1  = document.f.input1.value;
    var input2  = document.f.input2.value;
    var input3  = document.f.input3.value;
    var input4  = document.f.input4.value;
    var input5  = document.f.input5.value;


    var myMsg=document.getElementById('myMsg');

    myMsg.innerHTML = "There once was a man named " +input1 +"<br>"
    + "Who did nothing all day but " + input2 + "<br>"
    + "Until one day he lost his "+input3+"<br>"
    + "And was left with nothing but his" +input4 + "<br>"
    + "So now all he does is "+input5;
     //prevent page from reloading
    return false;

    }
    function hideLim(){
      console.log("Hide");
      myMsg.style.display = 'none';

    }


});
