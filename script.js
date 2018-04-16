$(document).ready(onReady);
let clickCount = 0;

function onReady(){
    $('#generateButton').on('click', clickHandler)
}//end onReady


function clickHandler() {
    clickCount++;
    $('#divItem').append(
        '<div>' + '<p>' + clickCount + '</p>' + '</div>'
    );
    
}//end clickHandler