var board = new Array();

$(function(){
  newgame();
});

function newgame(){
  //初始化棋盘格
  init();
}

function init(){
    for(var i = 0; i < 4; i++){
        board[i] = new Array();
        for(var j = 0; j < 4; j++){
            board[i][j] = 0;
            var cell = $("#grid-cell-"+i+"-"+j);
            cell.css("top",getPosTop(i,j));
            cell.css("left",getPosLeft(i,j));
        }
    }
}
