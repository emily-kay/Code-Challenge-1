$(document).ready(onReady);
console.log('It works!');

function onReady(){
   $('#generateButton').on('click', console.log('Button starts'));   
}

function clickHandler(){
    console.log('Button Works');
}
