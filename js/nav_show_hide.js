// 해상도별 내비게이션 보기
function navShowHide(){
  let winWidth = $(window).width(); 
  if(winWidth > 640){
    $('.nav').css('display','block');
  }else{
    $('.nav').css('display','none');
  }
}

