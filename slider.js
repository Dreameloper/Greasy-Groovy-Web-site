var slideIndex = 1;
showDivs(slideIndex);         
/*
해당 함수는 현재 showDivs(1); 이다.
따라서 , if 문에서 x.length = 0 으로 출력되므로.
1>0 인 조건인 첫번째 if문 
*/
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
   console.log(dots);
   x[slideIndex - 1].style.display = "block";       //얘만 보이겠다.
   dots[slideIndex - 1].className = " colored";     //이름하나 바꿨다고 배열에서 빠지나??
   console.log(dots);
   console.log(dots[slideIndex - 1]);
   console.log(dots[slideIndex - 1].className);
}
