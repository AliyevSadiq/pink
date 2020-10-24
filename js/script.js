document.getElementById("open-btn").onclick=function () {
    document.getElementById("menu-list").style.display="flex";
    document.getElementById("open-btn").style.display="none";
    document.getElementById("close-btn").style.display="flex";
}
document.getElementById("close-btn").onclick=function () {
    document.getElementById("menu-list").style.display="none";
    document.getElementById("close-btn").style.display="none";
    document.getElementById("open-btn").style.display="flex";
}


window.addEventListener("resize",function(){
	if(window.innerWidth>=804){
		 document.getElementById("open-btn").style.display="none";
		  document.getElementById("close-btn").style.display="none";
		  document.getElementById("menu-list").style.display="flex";
	}else{
		if(document.getElementById("close-btn").style.display=='none'){
			 document.getElementById("open-btn").style.display="flex";
			 document.getElementById("menu-list").style.display="none";
		}
	}
});


var n=0,
    totalCount=document.getElementsByClassName('slider-item').length,
    sliderItems=document.getElementsByClassName('slider-item');



document.getElementById('arrow-prev').onclick=function () {
    n--;
    if(n<0){
        n=totalCount-1;
    }
    for(var i=0;i<totalCount;i++){
        if(n===i){
            sliderItems[i].style.display='block';
        }else{
            sliderItems[i].style.display='none';
        }
    }

}
document.getElementById('arrow-next').onclick=function () {
    n++;
   if(n>totalCount-1){
       n=0;
   }
    for(var i=0;i<totalCount;i++){
        if(n===i){
            sliderItems[i].style.display='block';
        }else{
            sliderItems[i].style.display='none';
        }
    }
}

function sliderButtons(n) {
 var span_btn=document.getElementsByClassName('span-btn')[0],className,span='';
    for (var i=0;i<n;i++){
        // var span = document.createElement("span");
        // span_btn.appendChild(span);
        if(i===0){
            className='active-slider-btn slider-btn';
        }else{
            className='slider-btn';
        }
        span+="<span class='"+className+"' data-count='"+i+"'></span>";
            span_btn.innerHTML = span;
    }
}

sliderButtons(totalCount);
var slider_btn=document.getElementsByClassName('slider-btn'),data_element;

  for(var i=0;i<totalCount;i++){
      slider_btn[i].addEventListener('click',function () {
          data_element=this.getAttribute('data-count');
          for(var j=0;j<totalCount;j++){
              if(data_element==j){
                  sliderItems[j].style.display='block';
                 document.getElementsByClassName('slider-btn')[j].
                 setAttribute('class','active-slider-btn slider-btn');
              }else{
                  sliderItems[j].style.display='none';
                  document.getElementsByClassName('slider-btn')[j].
                  setAttribute('class','slider-btn');
              }
          }


      })
  }
window.addEventListener('scroll',function () {
       if(pageYOffset>10){
           document.getElementsByClassName('menu-wrapper')[0].style.backgroundColor="#1d2631";
       }else{
           document.getElementsByClassName('menu-wrapper')[0].style.backgroundColor="rgba(0,0,0,.5)";
       }

})


ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [40.436305, 50.184816],
        zoom: 12
    });

    if (map) {
        ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
            var placemark = new Placemark([40.436305, 50.184816]);
        });
    }
});