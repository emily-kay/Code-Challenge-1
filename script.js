$(document).ready(onReady);
let clickCount = 0;

function onReady(){
    $('#generateButton').on('click', clickHandler)
}//end onReady


function clickHandler() {
    clickCount++;
    $('#divItem').append(
        '<div>' + '<p>' + clickCount + '</p>' +
        '<button id="swapButton">Swap</button>' +
        '<button id="deleteButton">Delete</button>' +
        '</div>'
    );//end divItem
    swapColors();
      
}//end clickHandler

function swapColors() {
    $('#divItem').on('click', '#swapButton', function(){
        $(this).parent().addClass('swapped');
        
    });//end generateButton
}//end swapButton