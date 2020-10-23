function changeButtonHTML(obj)
{
    if (obj.innerHTML == "Dark Mode")
    {
        document.body.style.backgroundColor = "white";
        document.getElementById("p2").style.color = "black";
        document.body.style.backgroundImage = "url('NYCDAY.png')";
        obj.innerHTML = "Light Mode";
        return
    }
    if (obj.innerHTML == "Light Mode"){
        document.getElementById("p2").style.color = "white";
        document.getElementById("body").style.backgroundColor = "#121212";
        document.body.style.backgroundImage = "url('NYCNIGHT.png')";
        obj.innerHTML = "Dark Mode";
        return;
    }
}