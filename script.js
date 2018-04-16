$(document).ready(onReady);


function onReady(){
    $('#generateButton').on('click', clickHandler)
}//end onReady


function clickHandler() {
    $('#divItem').append(
        '<div>' + 'Look, I am appended!' + '</div>'
    );
    
}//end clickHandler