let horror = [" Midsommar ", "Hereditary", " Get Out"];

$(".horror").click(function() {
// write your for loop here
  for (let element of horror){
    $(".horror").append(element);
}    
});

//declare your new array here
let action = ["Black Adam", " Spiderman ", "Batman"];

$(".action").click(function() {
// write your for loop here
  for (let element of action){
    $(".action-recommend").append(element);
}    
});

//declare your new array here
let comedy = ["Bros ", " Spirited ", "Encanto"];

$(".comedy").click(function() {
// write your for loop here
  for (let element of comedy){
    $(".comedy").append(element);
}    
});