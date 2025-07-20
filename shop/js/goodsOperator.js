function changeGoodsInfo(obj){
    console.log(obj);
    var currentSelect=0;
    var goodsTabs=document.getElementById("goodsTabs");
    console.log(goodsTabs);
    var goodsTitles=goodsTabs.getElementsByTagName("li");
    console.log(goodsTitles);
    for(var i=0;i<goodsTitles.length;i++){
        goodsTitles[i].className="";
        if(obj==goodsTitles[i]){
            console.log(obj);
            currentSelect=i;
        }
    }
    obj.className="tab_active";
    var middleDiv=document.getElementsByClassName("middle");
    var tabContents=middleDiv[0].getElementsByTagName("article");
    for(var j=0;j<tabContents.length;j++){
        if(currentSelect==j){
            tabContents[j].className="tab_content"+(j);
        }else{
            tabContents[j].className="tab_content"+(j)+" none";
        }

    }
}
function changeGoodsImage(obj){
    console.log(obj);
    //获取商品区大图，并设置新图片
    var showGoodsPicture=document.getElementById("showGoodsPicture");
    console.log(showGoodsPicture);
    showGoodsPicture.src=obj.src;
    var goodsList=document.getElementById("goodsList");
    var liItems=goodsList.getElementsByTagName("li");
    for(var i=0;i<liItems.length;i++){
        var liImages=liItems[i].getElementsByTagName("img");
        liImages[0].style.borderColor="";
    }
    obj.style.borderColor="red";
}