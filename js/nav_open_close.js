    // 내비게이션 제어
    function navOpCl(){
      let winWidth = $(window).width();
      if(winWidth <= 640){
        $('.nav').slideToggle(200,function(){
          let navDis = $('.nav').css('display');
          if(navDis == 'block'){
            $('html').css({
              height:'100%',
              overflow:'hidden',
            });
          }else{
            $('html').css({
              height:'auto',
              overflow:'auto',
            });
          }
        });
      }
      
    }
    
