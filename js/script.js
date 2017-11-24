 var images = new Array()
    function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
          images[i] = new Image();
          images[i].src = preload.arguments[i]
        }
    }
    preload(
      "car/1.jpg",
      "car/2.jpg",
      "car/3.jpg",
      "car/4.jpg",
      "car/5.jpg",
      "car/6.jpg",
      "car/7.jpg",
      "car/8.jpg",
      "car/9.jpg",
      "car/10.jpg",
      "car/11.jpg",
      "car/12.jpg",
      "car/13.jpg",
      "car/14.jpg",
      "car/15.jpg",
      "car/16.jpg",
      "car/17.jpg",
      "car/18.jpg",
      "car/19.jpg",
      "car/20.jpg",
      "car/21.jpg",
      "car/22.jpg",
      "car/23.jpg",
      "car/24.jpg",
      "car/25.jpg",
      "car/26.jpg",
      "car/27.jpg",
      "car/28.jpg",
      "car/29.jpg",
      "car/30.jpg",
      "car/31.jpg",
      "car/32.jpg",
      "car/33.jpg",
      "car/34.jpg",
      "car/35.jpg",
      "car/36.jpg",
      "car/37.jpg",
      "car/38.jpg"
    );
    $(document).ready(function(){
      resizeWrapper();
      $(window).resize(function(){
        resizeWrapper();
      });
      function resizeWrapper(){
        if (innerWidth<=600) {
          let wrapperWidth = innerWidth -10;
          let wrapperHeight = wrapperWidth/1.7751479289940828;
          let loaderHeight = wrapperHeight + 30;
          $('#imgWrapper').css('width',wrapperWidth);
          $('#imgWrapper').css('height',wrapperHeight);
          $('#imgWrapper>img').css('width',wrapperWidth);
          $('#imgWrapper>img').css('height',wrapperHeight);
          $('.loader').css('width',wrapperWidth);
          $('.loader').css('height',wrapperHeight);
          $('.loader').css('top',-wrapperHeight);
          console.log(wrapperWidth);
          $('.scene').css('display','none');
        }else{
          $('.scene').css('display','block');
          $('#imgWrapper').css('width','600px');
          $('#imgWrapper').css('height','338px');
          $('#imgWrapper>img').css('width','600px');
          $('#imgWrapper>img').css('height','338px');
        }
      }
      if ((navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf("iPhone") != -1) || ((navigator.userAgent.indexOf("Android") != -1) || (navigator.userAgent.indexOf("Mobile") != -1)) || (navigator.userAgent.indexOf('iPod') != -1)) {
          $('.touchZoom').css('display','block');
        }
      setTimeout(function(){
        $('.loader').css('display','none');
        $('.introText').css('display','block');
      },1500);
      
      var moveX;
      $('#star_icon').bind('touchstart', function(e){
        e.preventDefault();
        moveX = e.originalEvent.touches[0].clientX;
      });

      $('#star_icon').css({'position':'absolute','left':'10px'});
      $('#star_icon').bind('touchmove', function(e){
        moveX = e.originalEvent.touches[0].clientX -270;
        console.log(moveX);
        $('#star_icon').css({'left':moveX});
        $('#range').text(moveX);
        if (moveX >= 445) {
          $('#star_icon').css({'left':'445px'});
          return;
        }else if(moveX <= 4){
          $('#star_icon').css({'left':'4px'});
          return;
        }
        var bgColor = Math.round(moveX);
        $('body').css('background','#'+bgColor);
      });
      $('#star_icon').bind('touchend',function(){
        console.log('end test');
      });
      var count = 1;
      var prevInterval;
      var nxtInterval;
      var panelAnim;
      var flag = true;
      $('#nextBtn').click(function(){
        if(flag == true){
          nxtInterval = setInterval(function(){
            btnNext();
          }, 65);
          var imgTop = 20;
          panelAnim = setInterval(function(){
            imgTop += (-170);
            // console.log('top: '+imgTop);
            $('#mobContainer img').css('top',imgTop+'px');
            if (-imgTop > 2530) {
              imgTop = 20;
              return;
            };
          },100);
          $('#nextBtn').text('Stop');
          flag = false;
        }else{
          clearInterval(nxtInterval);
          clearInterval(panelAnim);
          $('#nextBtn').text('Play');
          flag = true;
          return;
        }
      });
     
      document.getElementById('myImage').ondragstart = function() { return false; };
      function btnNext(){
        count +=1;
        $('#imgWrapper > img').attr('src','spin/colour1_'+count+'.jpg');
        if (count == 38) {
          count = 1;
          return;
        };
      }
      var count1  = 38;
      function btnPrev(){
        count1 = count1 - 1;
        $('#imgWrapper > img').attr('src','spin/colour1_'+count1+'.jpg');
        if (count1 == 1) {
          count1 = 38;
          return;
        };
      }
      var mDown = false;
      var clickPoint;
      var auto;
      var xPos;
      $('#imgWrapper > img').on('mousedown touchstart', function(e){
        setTimeout(function(){
          $('.introText').css('opacity','0');
          $('#autoRotate').css('display','none');
        },300);
        if ((navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf("iPhone") != -1) || ((navigator.userAgent.indexOf("Android") != -1) || (navigator.userAgent.indexOf("Mobile") != -1)) || (navigator.userAgent.indexOf('iPod') != -1)) {
            xPos = e.originalEvent.touches[0].pageX;
        }
        
        if (e.which === 1) {
          clickPoint = e.pageX;
          mDown = true;
        };
      });
      $('#imgWrapper > img').mouseup(function(){
        mDown = false;
      });
      $('#imgWrapper > img').mouseout(function(){
        mDown = false;
      });
      $('#imgWrapper > img').bind('contextmenu', function(e){
        e.preventDefault();
      });
      var scrollPoint = 1;
      $('#imgWrapper').bind('mousewheel', function(e){
        setTimeout(function(){
          $('.introText').css('opacity','0');
        },300);
        var twist = (e.pageX/2);
        var twistY = (e.pageY/2);
        if(e.originalEvent.wheelDelta > 0) {
          scrollPoint +=0.03;
          var n = scrollPoint+0.02;
          if ((n >= 1)) {
            $('#imgWrapper > img').css({
              'transform':'scale('+n+')'
              // 'transform-origin-x': twist,
              // 'transform-origin-y': twistY
            });
            console.log(scrollPoint);
            return;
          };
        }else {
          scrollPoint -=0.04;
          var m = scrollPoint-0.04;
          $('#imgWrapper > img').css({
            'transform':'scale('+m+')'
          });
          if (m < 1.2) {
            $('#imgWrapper > img').css({
              'transform':'scale(1)'
            });
            return;
          };
          console.log(scrollPoint);
        }
      });
      $('#reset').click(function(){
        clearInterval(auto);
        setTimeout(function(){
          $('.introText').css('opacity','1');
          $('#autoRotate').css('display','block');
          $('#imgWrapper > img').attr('src','car/35.jpg');
          $('#imgWrapper > img').css({
            'transform':'scale(1)',
            'transition':'all 0.8s'
          });
        },300);
      });
      $('#autoRotate').click(function(){
        auto = setInterval(function(){
          count +=1;
          $('#imgWrapper > img').attr('src','car/'+count+'.jpg');
          if (count == 35) {
            count = 35;
            clearInterval(auto);
            return;
          }
        },160);
      });
      var zoomInN = 1;
      $('#zoomIn').on('touchstart', function(e){
        e.preventDefault();
        zoomInN+=0.3;
        if (zoomInN >= 2.7) {
          zoomInN = 2.7;
        }
        $('#imgWrapper > img').css({
          'transform':'scale('+zoomInN+')'
        });
      });
      $('#zoomOut').on('touchstart', function(e){
        e.preventDefault();
        zoomInN-=0.3;
        if (zoomInN <= 0.7) {
          zoomInN = 0.7;
        }
        $('#imgWrapper > img').css({
          'transform':'scale('+zoomInN+')'
        });
      });
      var oldX = 0;
      $('#imgWrapper > img').on('mousemove touchmove', function(e){
        if (mDown) { 
          if (e.pageX>oldX) {
            console.log('X')
            count +=1;
            $('#imgWrapper > img').attr('src','car/'+count+'.jpg');
            if (count == 38) {
              count = 1;
              return;
            };
          }else if(e.pageX<oldX){
            console.log('Y')
            count1 = count1 - 1;
              $('#imgWrapper > img').attr('src','car/'+count1+'.jpg');
            if (count1 == 1) {
              count1 = 38;
              return;
            };
          }
          oldX = e.pageX;
        }else{};

        if ((navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf("iPhone") != -1) || ((navigator.userAgent.indexOf("Android") != -1) || (navigator.userAgent.indexOf("Mobile") != -1)) || (navigator.userAgent.indexOf('iPod') != -1)) {
            e.preventDefault();
            var moveTouch = e.originalEvent.touches[0].pageX;
            console.log(`moveTouch: ${moveTouch}`);
            if ((moveTouch>xPos)) {
              count +=1;
              $('#imgWrapper > img').attr('src','car/'+count+'.jpg');
              if (count == 38) {
                count = 1;
                return;
              };
            }else{
              count1 = count1 - 1;
              $('#imgWrapper > img').attr('src','car/'+count1+'.jpg');
              if (count1 == 1) {
                count1 = 38;
                return;
              };
            }
        }
      });
    });