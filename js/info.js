function set_dimensions() {
    dimensions = {};

    dimensions.innerWidth = window.innerWidth;
    dimensions.innerHeight = window.innerHeight;

    dimensions.availWidth = window.screen.availWidth;
    dimensions.availHeight = window.screen.availHeight;

    for(var key in dimensions) {
        document.getElementById(key).innerHTML = dimensions[key];
    }
}

onload = function() {
    set_dimensions();
};

window.onresize = function(event) {
    set_dimensions();
}
