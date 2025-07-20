var sign=1;
//轮播函数
function showPic(index){
    //获取显示图片的元素
    var focusImg=document.getElementById("focusImg");
    //图片的路径前缀
    var imgSrc="images/index/pic";
    //images/index/pic2.jpg
    imgSrc=imgSrc+index+".jpg";
    //更换图片
    focusImg.src=imgSrc;
    //获取原点列表
    var lis=document.getElementsByClassName("focusBox")[0].getElementsByTagName("li");
    //循环移除轮播的圆点样式
    for(var i=0;i<lis.length;i++){
        lis[i].className="";
    }
    //设置当前图片对应圆点的样式
    lis[index-1].className="cur";
    console.log(lis);

}
//窗体加载时，指定默认展示的图片
window.onload=function(){
    showPic(3);
}
//通过计算函数来设置当前要播放的图片
function setCurrentPic(){
    showPic(sign);
    sign++;
    if(sign==4){
        sign=1;
    }
}
//设置定时器，并调用计算函数生成新的图片并播放地址，同时渲染图片
window.setInterval("setCurrentPic()",2000);   //定时器单位是毫秒