// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // function timer1Clicked(){
    //   var min = document.getElementById("minutes1");
    //   min.innerHTML(Math.ceil(window.intOffset / 1000));
    // }
    var play = document.getElementById("play");
    var reset = document.getElementById("reset");
    var newGame = document.getElementById("newGame");
    var pause = document.getElementById("pause");
    play.style.display = "none";
    reset.style.display = "none";
    newGame.style.display = "none";
    var t1 = document.getElementById("time1");
    var t2 = document.getElementById("time2");
    var timer1 = document.getElementById("timer1");
    var timer2 = document.getElementById("timer2");
    document.getElementById("timer1").addEventListener("click", timer1Clicked);
    document.getElementById("timer2").addEventListener("click", timer2Clicked);
    document.getElementById("pause").addEventListener("click", pauseClicked);
    document.getElementById("play").addEventListener("click", resume);
    document.getElementById("reset").addEventListener("click", resetClicked);



    t1.innerHTML = "5:00";
    t2.innerHTML = "5:00";
    var time1 = 299000;
    var time2 = 299000;
    // var time = 300000;
    var counterT1 = -1;
    var counterT2 = -1;
    var stopped = false;
    var myVar;
    var tipTimer;

    pause.addEventListener('mouseover', function() {
        tipTimer = setTimeout(showPauseTip, 1000);
    });
    play.addEventListener('mouseover', function() {
        tipTimer = setTimeout(showPlayTip, 1000);
    });
    reset.addEventListener('mouseover', function() {
        tipTimer = setTimeout(showResetTip, 1000);

    });
    function showResetTip() {
        console.log('showing msg');
        resetTip.style.opacity = 1;
        resetTip.style.transition = 'all .5s';
        // setTimeout(clearTips,1000);
    }
    function showPauseTip() {
        console.log('showing msg');
        pauseTip.style.opacity = 1;
        pauseTip.style.transition = 'all .5s';
        // setTimeout(clearTips,1000);
    }
    function showPlayTip() {
        console.log('showing msg');
        playTip.style.opacity = 1;
        playTip.style.transition = 'all .5s';
        // setTimeout(clearTips,1000);
    }
    pause.addEventListener('mouseout', function() {
        console.log('mouseout on pause');
        clearTimeout(tipTimer);
        pauseTip.style.opacity = 0;
    });
    play.addEventListener('mouseout', function() {
        console.log('mouseout on play');
        clearTimeout(tipTimer);
        playTip.style.opacity = 0;
    });
    // function clearTips(){
    //   clearTimeout(tipTimer);
    //   pauseTip.style.opacity = 0;
    //   playTip.style.opacity = 0;
    //   resetTip.style.opacity = 0;
    // }
    reset.addEventListener('mouseout', function() {
        console.log('mouseout on play');
        clearTimeout(tipTimer);
        resetTip.style.opacity = 0;
    });

    function gameOver() {

        alert("Game Over");
    }

    function timer1Clicked() {

        counterT1 += 1;

        if (counterT1 % 2 == 0) {
            console.log("timer1Clicked() to start");
            disableTimer2();
            // window.setTimeout(gameOver,time);
            myVar = window.setInterval(function() {
                if (time1 <= 0) gameOver();
                t1.innerHTML = formatTime(time1);
                time1 -= 1000;
            }, 1000);
        } else {
            console.log("timer1Clicked() to stop");
            enableTimer2();
            stopped = true;
            clearInterval(myVar);
            console.log("stopped:" + stopped + " at time" + time1);
            timer2Clicked();


        }
    }

    function timer2Clicked() {

        counterT2 += 1;

        if (counterT2 % 2 == 0) {
            console.log("timer2Clicked() to start");
            disableTimer1();
            // window.setTimeout(gameOver,time);
            myVar = window.setInterval(function() {
                if (time2 <= 0) gameOver();
                t2.innerHTML = formatTime(time2);
                time2 -= 1000;
            }, 1000);
        } else {
            console.log("timer2Clicked() to stop");
            enableTimer1();
            stopped = true;
            clearInterval(myVar);
            console.log("stopped:" + stopped + " at time" + time2);
            timer1Clicked();


        }

    }

    function gameOver() {
        pause.style.display = "initial"
        play.style.display = "none";
        reset.style.display = "none";
        enableTimer1();
        enableTimer2();
        time1 = 299000;
        time2 = 299000;
        counterT1 = -1;
        counterT2 = -1;
        stopped = false;
        t1.innerHTML = "5:00";
        t2.innerHTML = "5:00";
        alert("Game Over");

    }

    function countdown1(t) {

        console.log("time:" + t);
        t1.innerHTML = formatTime(t);
    }
    //timer1 id = 1, timer2 id = 2
    function pauseClicked() {
        console.log("pauseClicked()");
        disableTimer2();
        disableTimer1();
        console.log("counterT1: " + counterT1 % 2);
        console.log("counterT2: " + counterT2 % 2);
        pause.style.display = "none"
        play.style.display = "initial";
        reset.style.display = "initial";
        clearInterval(myVar);
        // resume(id);
    }

    function resetClicked() {
        console.log("reset clicked");
        pause.style.display = "initial"
        play.style.display = "none";
        reset.style.display = "none";
        enableTimer1();
        enableTimer2();
        time1 = 299000;
        time2 = 299000;
        counterT1 = -1;
        counterT2 = -1;
        stopped = false;
        t1.innerHTML = "5:00";
        t2.innerHTML = "5:00";

    }

    function resume() {
        console.log("resume clicked");
        if ((counterT1 % 2) == 0) {
            enableTimer1();
            counterT1 += 1;
            timer1Clicked();
            pause.style.display = "initial"
            play.style.display = "none";
            reset.style.display = "none";

        } else {
            enableTimer2();
            counterT2 += 1;
            timer2Clicked();
            pause.style.display = "initial"
            play.style.display = "none";
            reset.style.display = "none";
        }
    }

    function formatTime(time) {
        var min = (time / 1000 / 60) << 0;
        var sec = ((time / 1000) % 60) << 0;

        return min + ':' + ('0' + sec).slice(-2);
    }

    function disableTimer2() {
        timer2.style.opacity = .5;
        timer2.removeEventListener("click", timer2Clicked);
        // document.getElementById("timer2").addEventListener("click",timer2Clicked);
    }

    function enableTimer2() {
        timer2.style.opacity = 1;
        timer2.addEventListener("click", timer2Clicked);
    }

    function disableTimer1() {
        timer1.style.opacity = .5;
        timer1.removeEventListener("click", timer1Clicked);
        // document.getElementById("timer2").addEventListener("click",timer2Clicked);
    }

    function enableTimer1() {
        timer1.style.opacity = 1;
        timer1.addEventListener("click", timer1Clicked);
    }
});
