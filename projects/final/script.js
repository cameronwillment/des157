// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    var profileElements = document.getElementsByClassName("profile");
    var i = 0;
    document.getElementById("getStarted").addEventListener("click", function(){
      console.log("get started clicked");
      document.getElementById("firstLoad").style.display = "none";
      document.getElementById("createProfile").style.display = "initial";
      document.getElementById("addCountry").style.display = "initial";
      document.getElementById("allDone").style.display = "initial";
        // profileElements[i].style.display = "initial";
        // profileElements[i+1].style.display = "initial";
        // i++;

    });
    document.getElementById("addCountry").addEventListener("click", function(){
      console.log("add country clicked");
      document.getElementById("createProfile").style.display = "none";
      document.getElementById("createProfile2").style.display = "initial";
    });
    document.getElementById("createProfile2").addEventListener("click", function(){
      console.log("fun3");
      document.getElementById("createProfile2").style.display = "none";
      document.getElementById("createProfile3").style.display = "initial";
    });
    document.getElementById("allDone").addEventListener("click", function(){
      console.log("all done clicked");
      document.getElementById("createProfile").style.display = "none";
      document.getElementById("createProfile2").style.display = "none";
      document.getElementById("createProfile3").style.display = "none";
      document.getElementById("home").style.display = "initial";
      document.getElementById("find").style.display = "initial";
      document.getElementById("chat").style.display = "initial";
      document.getElementById("filter").style.display = "initial";
      document.getElementById("john").style.display = "initial";
      document.getElementById("links").style.display = "none";
    });
    document.getElementById("filter").addEventListener("click", function(){
      console.log("filter clicked");

      document.getElementById("homeFilter").style.display = "initial";
      document.getElementById("done").style.display = "initial";
      document.getElementById("button").style.display = "initial";
      document.getElementById("button2").style.display = "initial";
      document.getElementById("john").style.display = "none";

    });
    document.getElementById("done").addEventListener("click", function(){
      console.log("done clicked");
      document.getElementById("done").style.display = "none";
      document.getElementById("homeFilter3").style.display = "none";
      document.getElementById("homeFilter2").style.display = "none";
      document.getElementById("homeFilter").style.display = "none";
      document.getElementById("home").style.display = "initial";
      document.getElementById("john").style.display = "initial";
      document.getElementById("button").style.display = "none";
      document.getElementById("button2").style.display = "none";


    });
    document.getElementById("button").addEventListener("click", function(){
      console.log("button clicked");
      document.getElementById("button").style.display = "none";
      document.getElementById("button2").style.display = "initial";
      document.getElementById("homeFilter2").style.display = "initial";
      document.getElementById("homeFilter3").style.display = "none";

    });
    document.getElementById("button2").addEventListener("click", function(){
      console.log("button clicked");
      document.getElementById("button").style.display = "initial";
      document.getElementById("homeFilter3").style.display = "initial";
      document.getElementById("homeFilter2").style.display = "none";

    });
    document.getElementById("find").addEventListener("click", function(){
      console.log("find clicked");
      document.getElementById("chatPage").style.display = "none";
      document.getElementById("home").style.display = "initial";
      document.getElementById("find").style.display = "initial";
      document.getElementById("chat").style.display = "initial";
      document.getElementById("filter").style.display = "initial";
      document.getElementById("john").style.display = "initial";
    });
    document.getElementById("john").addEventListener("click", function(){
      console.log("john clicked");
      document.getElementById("home").style.display = "none";
      document.getElementById("john1").style.display = "initial";
      document.getElementById("johnInfo").style.display = "initial";
    });
    document.getElementById("john").addEventListener("click", function(){
      console.log("john clicked");
      document.getElementById("home").style.display = "none";
      document.getElementById("john1").style.display = "initial";
      document.getElementById("johnInfo").style.display = "initial";
      document.getElementById("johnBack").style.display = "initial";
    });
    document.getElementById("johnBack").addEventListener("click", function(){
      console.log("johnBack clicked");
      document.getElementById("home").style.display = "initial";
      document.getElementById("john").style.display = "initial";
      document.getElementById("filter").style.display = "initial";
      document.getElementById("john1").style.display = "none";
      document.getElementById("john2").style.display = "none";
      document.getElementById("johnInfo").style.display = "none";
    });
    document.getElementById("johnInfo").addEventListener("click", function(){
      console.log("johnInfo clicked");
      document.getElementById("john2").style.display = "initial";
      document.getElementById("johnInfo").style.display = "none";
      document.getElementById("johnBack").style.display = "initial";
    });
    document.getElementById("chat").addEventListener("click", function(){
      console.log("chat clicked");
      document.getElementById("john").style.display = "none";
      // document.getElementById("find").style.display = "initial";
      // document.getElementById("chat").style.display = "initial";
      document.getElementById("chatPage").style.display = "initial";

    });

    function fun3() {
      console.log("fun4");
        document.getElementById("firstLoad").style.display = "init";
    }
    // all other js here

    //capture the submit event


  //define process function
    function processForm() {

      // function fun1(){
      //   cosole.log("clicked");
      // }

      console.log("processForm");

}
});
