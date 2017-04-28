
//$(document).ready(function(){
//    $(".btn-default:first").click(function(){
//        $(this).button('toggle');

/*
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
*/
/*
$(document).ready(function(){
    $(".centering").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "default");
    });
});
*/

document.getElementById("eduBtn").onclick = function() {eduBtn()};
function eduBtn() {
    document.getElementById("aboutMeImg1").src = "assets/pr-logo-alt.svg";
    document.getElementById("aboutMeTxt1").innerHTML = "I attended Pine-Richland High School."
    document.getElementById("aboutMeImg2").src = "assets/nd-logo.svg";
    document.getElementById("aboutMeTxt2").innerHTML = "I currently attend the University of Notre Dame.";
}

document.getElementById("wrkBtn").onclick = function() {wrkBtn()};
function wrkBtn() {
    document.getElementById("aboutMeImg1").src = "assets/shenot-logo.svg";
    document.getElementById("aboutMeTxt1").innerHTML = "I worked at Shenot Farm Market."
    document.getElementById("aboutMeImg2").src = "assets/sub-logo.svg";
    document.getElementById("aboutMeTxt2").innerHTML = "I currently work for the Student Union Board.";
}

document.getElementById("actBtn").onclick = function() {actBtn()};
function actBtn() {
    document.getElementById("aboutMeImg1").src = "assets/dfa-logo.svg";
    document.getElementById("aboutMeTxt1").innerHTML = "I'm involved with Design for America."
    document.getElementById("aboutMeImg2").src = "assets/ndv-logo.svg";
    document.getElementById("aboutMeTxt2").innerHTML = "I'm a dorm liaison for ND Votes.";
}
