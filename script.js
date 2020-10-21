function changeButtonHTML(obj)
{
    if (obj.innerHTML == "Dark Mode")
    {
        obj.innerHTML = "Light Mode";
        return
    }
    else{
        obj.innerHTML = "Dark Mode";
        return;
    }
}