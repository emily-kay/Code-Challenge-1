$(document).ready(onReady);
let clickCount = 0;
let backgroundRed = true;

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
    $('#divItem').on('click', '#swapButton',  function(){
       if (backgroundRed === true){
        $(this).parent().addClass('swapped');
        backgroundRed = false;
       }
       else {
        $(this).parent().addClass('swappedBack');
        backgroundRed = true;
       }
    });//end generateButton
}//end swapButton