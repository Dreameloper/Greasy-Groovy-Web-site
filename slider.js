var slideIndex = 3;
showDivs(slideIndex);         
/*
해당 함수는 현재 showDivs(1); 이다.
따라서 , if 문에서 x.length = 0 으로 출력되므로.
1>0 인 조건인 첫번째 if문 
*/
console.log(slideIndex);

function plusDivs(n) {
   showDivs(slideIndex += n);
}

function showDivs(n) {
   var i;
   var x = document.getElementsByClassName("mySlides"); 
   console.log(x);           //얘가 이해안가네
   console.log(x.length);    // 왜 0이나오냐? 그림목록이 사라진것을 의미한다고 함. 왜 사라지는가? 분명히 앞에서 출력해오는데
   if (n > x.length) {       // 얘는 인덱스가 넘어가면, 처음(1)으로 돌아가게 해주는 것.
      slideIndex = 1;
   }
   if (n < 1) {              // 얘는 인덱스가 작으면(마이너스해서) 4번으로 돌아가게 하는 것.
      slideIndex = x.length;
      console.log(x.length);
   }
   for (i = 0; i < x.length; i++) {        //나머지 모두를 안보이겠다고 선언
      x[i].style.display = "none";
      console.log(i);
   }
   x[slideIndex - 1].style.display = "block";       //얘만 보이겠다.
   console.log(x.length);
   console.log(i);
}