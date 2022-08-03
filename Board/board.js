
// $('#cv').bind('mousemove', function(e){
//   // console.log(e); 마우스 포인터가 움직일 때마다 수많은 이벤트 객체가 출력
//   // console.log(e.pageX, e.pageY); 현재 마우스 포인터의 좌표 
// });

const { ShadowPropTypesIOS } = require("react-native");

var ctx;

// 페이지 로딩 시 시작 부분
$(document).ready(function(){
  ctx=$('#cv').get(0).getContext('2d');

  // jQuery bind를 이용하여 canvas에 마우스 시작, 이동, 끝 이벤트 핸들러 등록
  $('#cv').bind('mousedown', draw.start);
  $('#cv').bind('mousemove', draw.move);
  $('#cv').bind('mouseup', draw.end);

  // 기본 모양 색상 설정
  shape.setShape();

  // clear 버튼에 이벤트 핸들러 등록
  $('.clear').bind('click', draw.clear);

});

// 라인의 색상, 굵기 설정
var shape={
  color: 'white',
  width: 1,
  setShape: function(color, width){
    // 파라미터가 없으면 white, 굵기는 1로 설정
    if(color!=null) this.color=color;
    if(width!=null) this.width=width;

    ctx.strokeStyle=this.color;
    ctx.lineWidth=this.width;
  }
}

// 그리기 부분
var draw={
  drawing: null,
  start: function(e){
    ctx.beginPath();
    ctx.moveTo(e.pageX, e.pageY);
    this.drawing=true;
  },
  move: function(e){
    if(this.drawing){
      ctx.lineTo(e.pageX, e.pageY);
      ctx.stroke();
    }
  },
  end: function(e){
    this.drawing=false;
  },
  clear: function(){
    // 전체 지우기
    ctx.clearRect(0,0, cv.width, cv.height);
  }
}