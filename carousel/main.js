$(document).ready(function(){

  var carousel = ["images/dream1.jpg","images/dream2.jpg","images/dream3.jpg","images/dream4.jpg","images/dream5.jpg","images/dream6.jpg","images/dream7.jpg","images/dream8.jpg"];
  var indexV = 0;
  var clickCount = 0;
//create event listener
//= is assignment
//zebra-- \\
//random on 3rd selection
$(".button").eq(1).on("click", function(){
  clickCount++
  if(clickCount === 3){
    clickCount = 0;
    var random = Math.round(Math.random()*carousel.length-1)
    $("carousel").attr("src",carousel[random]);
    indexV = random
  }
  if(indexV == carousel.length-1){
    indexV = 0
}
  else{
    indexV = indexV + 1
}
$("#dreams").attr("src",carousel[indexV]);
console.log(carousel)
});
//zebra++\\
  //clickCount--
  //if(clickCount === 3){
  //  clickCount = 0;
  //  var random = Math.round(Math.random()*7)
  //  $("carousel").attr("src",carousel[random]);
  //  indexV = random
  $(".button").eq(0).on("click",function(){
  if(indexV == 0){
    indexV = carousel.length-1
}
  else{
  indexV =indexV - 1
}
$("#dreams").attr("src",carousel[indexV]);
console.log(carousel)
});
});
