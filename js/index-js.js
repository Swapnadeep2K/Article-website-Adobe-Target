document.querySelector(".navbar-toggler").addEventListener("click", function()
{
    if(document.querySelector("#navbarButtonsExample").classList.contains("show")==false)
    {
        document.querySelector("#navbarButtonsExample").classList.add("show");
    }
    else
    {
        document.querySelector("#navbarButtonsExample").classList.remove("show");
    }
});