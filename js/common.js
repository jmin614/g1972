//메인배너 함수
$(document).ready(function() { //시작하자마자
$("#img1").show(); //이미지가 보이고
imgslide(); //이미지사이드 함수 실행
});
function imgslide(){
  var $val = $("#mainbanner").attr("val");
  var $mx = $("#mainbanner").attr("mx");

  $("#img"+$val).hide();
  if( $val == $mx ){ $val = 1; } //마지막번호면 되돌리기
  else{ $val++; } //아니면 카운트 증가시키기
  $("#img"+$val).fadeIn(1800); //이미지 나타냄, 페이드인
  $("#mainbanner").attr('val',$val); //번호부여
  setTimeout('imgslide()',3500); //호출
  }
