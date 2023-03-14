
function moveImage(event){
    var x = event.pageX - 100;
    var y = event.pageY - 100;
    var myself = document.getElementById("me");
    myself.style.display = '';
    myself.style.position = "fixed";
    myself.style.left = x + "px";
    myself.style.top = y + "px";
    myself.style.visibility = "visible";
}
document.onclick = moveImage;
