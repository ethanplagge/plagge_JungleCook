//ROUTING SYSTEM
import { changePage } from "../data/model.js";

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    $("#bread-crumb").html(``);
    changePage(hashTag, pageID);
    
}


function initSite(){
     $(window).on("hashchange", route)
     route();
}

$(document).ready(function () {
    
    initSite()
    
});