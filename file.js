player_1 = "";
player_2 = "";
function adduser(){
    player_1 = document.getElementById("player_1_login").value;
    player_2 = document.getElementById("player_2_login").value;

    localStorage.setItem("player_1 ", player_1 )
    localStorage.setItem("player_2 ", player_2 )

    window.location = "gamepage.html"
}