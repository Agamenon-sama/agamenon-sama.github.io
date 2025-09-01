let text = "";
document.onkeydown = function(e) {
    text += e.key.toLowerCase();
    // stop the variable from growing too big
    if (text.length > 100) text = text.slice(1);
    
    var audioPlayer;
    if (text.endsWith("lain")) {
      audioPlayer = new Audio("https://lainchan.org/static/duvet.ogg");
      audioPlayer.play();
    }
    
    if (text.endsWith("uparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba")) {
      alert("Wow, you're a true gamer");
    }
}
