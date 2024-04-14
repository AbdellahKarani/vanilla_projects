// get The Height Auto And Modified In Auto Way

var ul_links = document.querySelector("header ul.links");
var links = document.querySelector("header .links-container");
const container_height=ul_links.getBoundingClientRect().height;
const linksHeight=links.getBoundingClientRect().height; 

// getBoundingClientRect and offset
/*
    element.getBoundingClientRect() : return object contain the proprity 
    of element given [width, height, top, x, y, left ...] 

    getBoundingClientRect().height: Gives the height of an element With Padding
    offsetTop: Gives the distance between the element and top.
    Use getBoundingClientRect().height for total height, 
    offsetTop for distance from the top edge.
*/
var element = document.querySelector(".menu");
const position1 = element.getBoundingClientRect().height;
const position2 = element.offsetTop;




