var hits = 0;
var misses = 0;
var score = 0
var scoretext = document.getElementById("score");
var duck = document.getElementById('duck');
var hitstext = document.getElementById("hits");
var background = document.getElementById('body');
var missestext = document.getElementById("misses");
var winlosttext = document.getElementById("win-lost");
var total = hits + misses;
var winLost = hits - misses;

duck.onclick = function() {
   console.log(++hits);
   console.log(--misses);
   hitstext.innerHTML = "je hebt " + hits + " x gehit!";
   if(hits === 20){
       alert("je hebt gewonnen!");
       score++
       scoretext.innerHTML = "score: " + score;
       hits = 0;
       misses = 0;
       return hits, misses;
   }
}

background.onclick = function() {
    console.log(++misses);
    missestext.innerHTML = "je hebt " + misses + " x gemist!";
    if(misses === 20){
        alert("je hebt verloren :(");
        score--
        scoretext.innerHTML = "score: " + score;
        hits = 0;
        misses = -0;
        return hits, misses;
    }
}