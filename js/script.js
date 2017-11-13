var menuIconClick = document.getElementById('hamb-icon__id');
//var menuOpen = document.getElementById('hamb-menu__id');

menuIconClick.addEventListener('click', function () {
    //document.getElementById('hamb-menu__id').className = 'menuOpen';
    document.getElementById("hamb-menu__id").style.display = "block";
});

var closeIcon = document.getElementById('closeIcon');
closeIcon.addEventListener('click', function () {
    //console.log(closeIcon.className);
    document.getElementById("hamb-menu__id").style.display = "none";
});