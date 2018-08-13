var slideIndex = 1;
showDivs(slideIndex);         

function plusDivs(n) {
   showDivs(slideIndex += n);
}
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
   var i;
   var x = document.getElementsByClassName("mySlides"); 
   var dots = document.getElementsByClassName("btn_indicator");
   if (n > x.length) {       // 얘는 인덱스가 넘어가면, 처음(1)으로 돌아가게 해주는 것.
      slideIndex = 1;
   }
   if (n < 1) {              // 얘는 인덱스가 작으면(마이너스해서) 4번으로 돌아가게 하는 것.
      slideIndex = x.length;
   }
   for (i = 0; i < x.length; i++) {        //나머지 모두를 안보이겠다고 선언
      x[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {                  //정상작동안함.
      dots[i].className = dots[i].className.replace(" colored", "");    //~를, ~로 바꾸겠다.
      console.log(dots[i]);
   }
   x[slideIndex - 1].style.display = "block";       //얘만 보이겠다.
   dots[slideIndex - 1].className += " colored";
}