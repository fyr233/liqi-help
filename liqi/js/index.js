var ifm= document.getElementById("iframepage");

function changeFrameHeight(){
    var ifmWin = ifm.contentWindow || ifm.contentDocument.parentWindow;
    //ifm.height = ifmWin.document.documentElement.scrollHeight || ifmWin.document.body.scrollHeight;
    ifm.height = ifmWin.document.body.scrollHeight;
    //ifm.height=document.documentElement.clientHeight;
}

window.onresize=function(){  
     changeFrameHeight();
}

function changeIFrame(newsrc){
    ifm.src=newsrc;
    changeFrameHeight();
}