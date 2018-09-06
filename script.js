var percent = 0 

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent += 1
  if (percent>100){
    $(".pageLoading").addClass("complete")
    clearInterval(timer)
    setTimeout(function(){
      $(".monsterText").html("We  Are<br>SQUARE<br>MONSTER!")
    },3000) 
  }
},30)
