function changeButtonHTML(obj)
{
    if (obj.innerHTML == "Dark Mode")
    {
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("p2").style.color = "black";
        obj.innerHTML = "Light Mode";
        return
    }
    else if (obj.innerHTML == "Light Mode"){
        document.getElementById("p2").style.color = "white";
        document.getElementById("body").style.backgroundColor = "#121212";
        obj.innerHTML = "Dark Mode";
        return;
    }
}