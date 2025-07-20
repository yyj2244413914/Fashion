function getRandomNumber2(num ,minNum, maxNum){
    var array=new Array();
    for(var i=0;i<num;i++){
        do{
            var randomNum=Math.floor(Math.random()*maxNum+minNum);
            if(!checkNum(array,randomNum)){
                array.push(randomNum);
                break;
             }
        }while(true)
    }return array;
}
function checkNum(array,randomNum){
    for(var i=0;i<array.length;i++){
         if(array[i]==randomNum){
            return true;
        }
    }
    return false;
}
 
var JSONData={
    name:"热门推荐",
    srcPath:"images/shopshow/",
    data:[
        {href:"#",src:"s1.jpg",price:56.00},
        {href:"#",src:"s2.jpg",price:56.00},
        {href:"#",src:"s3.jpg",price:56.00},
        {href:"#",src:"s4.jpg",price:56.00},
        {href:"#",src:"s5.jpg",price:56.00},
        {href:"#",src:"s6.jpg",price:56.00},
        {href:"#",src:"s7.jpg",price:56.00},
        {href:"#",src:"s8.jpg",price:56.00},
        {href:"#",src:"s9.jpg",price:56.00},
        {href:"#",src:"yifu1.jpg",price:56.00},
        {href:"#",src:"yifu2.jpg",price:56.00},
        {href:"#",src:"yifu3.jpg",price:56.00},
        {href:"#",src:"yifu4.jpg",price:56.00},
        {href:"#",src:"yifu5.jpg",price:56.00},
        {href:"#",src:"yifu6.jpg",price:56.00},
    ]
} 
window.onload=function(){
    // showShopBottomList();
    showHostAdvise();
}
function showHostAdvise(){
    var adviseContent='<h1 class="notice_title">'+JSONData.name+'</h1>';
    adviseContent=adviseContent+'<ul class="pic_list3">';
    var turnShow=getRandomNumber2(9,0,14);
    for(var i=0;i<turnShow.length;i++){
        var index=turnShow[i];
        adviseContent=adviseContent+'<li><img src='+JSONData.srcPath+JSONData.data[index].src+' width="80" height="80"/>'
        +'<p class="price2">￥'+JSONData.data[index].price+'</p>'
        +'</li>';
    }
    adviseContent=adviseContent+'</ul>';
    document.getElementsByClassName("right_nav")[0].innerHTML=adviseContent;
}
window.setInterval("showHostAdvise()",2000);

// function showShopBottomList(){
//     var images=["dress1.jpg","dress2.jpg","dress3.jpg","dress4.jpg"];
//         var content=["xxxxxxx","xxxxxxx","xxxxxxx","xxxxxxx"];
//         var liInfo="";
//         for(var i in images){
//             liInfo= liInfo+"<li><img src='images/shopshow/"+images[i]+"'/><p>"+content[i]+"</p></li>";
//             //console.log(pic_active);
//          }
//          document.getElementById("shopBottomList").innerHTML=liInfo;
// }
