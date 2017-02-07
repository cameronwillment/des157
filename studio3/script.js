// JavaScript Document

console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    $("#card1").flip();
    $("#card2").flip();
    $("#card3").flip();
    $("#card4").flip();
    $("#card5").flip();
    $("#card6").flip();
    $("#card7").flip();
    $("#card8").flip();
    $("#card9").flip();
    // $(".card").flip();
    // all other js here

    //capture the submit event

    // var album = document.getElementsByClassName("album");
    // album.addEventListener("click",function(){
    //   document.getElementById('TPAB').innerHTML = "Hello World!";
    // });
    var name = "Apaak";
    implementEventListeners(name);
    var name = "acidRap";
    implementEventListeners(name);
    var name = "altJ";
    implementEventListeners(name);
    var name = "joey";
    implementEventListeners(name);
    var name = "leon";
    implementEventListeners(name);
    var name = "pablo";
    implementEventListeners(name);
    var name = "earl";
    implementEventListeners(name);
    var name = "tribeMM";
    implementEventListeners(name);
    var name = "tame";
    implementEventListeners(name);

    function implementEventListeners(name) {
        var album = document.getElementById(name);
        // album.addEventListener("click",function(){
        //   console.log("fwen");
        //   alert("hey buddeh!");
        // });
        album.style.opacity = .2;
        album.addEventListener("mouseover", function() {
            album.style.opacity = 1;
        });
        album.addEventListener("mouseout", function() {
            album.style.opacity = .2;
        });
        // album.addEventListener("click",function(){
        //   album.innerHTML
        // });
    }


});
