    // 스크롤함수
    function winScroll(){
      let winWidth = $(window).width();
      if(winWidth <=640){
        let htmlHeight = $('html').height();
        let htmlScrollTop = $('html').scrollTop();
        let windowHeight = $(window).height();
        let maxScrollTop = htmlHeight - windowHeight;
        let scrollTopRatio = Math.round(htmlScrollTop / maxScrollTop * 100) + '%';
        
        $('.header hr').css({
          width:scrollTopRatio,
        })
      }
    }

