/**
 * Created by Administrator on 2016/10/10.
 */
var dot = document.querySelector(".dot");
var li = document.querySelectorAll(".dot li");
var aImg = document.querySelectorAll(".lunbo_pic a");
if(dot) {
    dot.onclick = function (e) {
        if (e.target.nodeName == "LI") {
            var target = e.target;
            var index = [].indexOf.call(target.parentNode.children, target);
            for (var i = 0; i < li.length; i++) {
                li[i].className = "";
                aImg[i].style.display = "none";
            }
            target.className = "active";
            //target.indexOf();
            aImg[index].style.display = "block";
        }
    }
}

//kinds
var kindsLi = document.querySelectorAll(".kinds ul li");
var kindsFlag = true;
if(kindsLi) {
    for (var i = 1; i < kindsLi.length; i++) {
        kindsLi[i].onclick = function () {

            if (kindsFlag) {
                this.firstElementChild.lastElementChild.className = "active";
                this.style.height = 390 + 88 + "px";
                kindsFlag = false;
            } else {
                this.firstElementChild.lastElementChild.className = "";
                this.style.height = 88 + "px";
                kindsFlag = true;
            }
        }
    }
}

var items =  document.querySelectorAll(".footer .item");
var center = document.querySelectorAll(".center");
if(center[0]) {
    center[0].firstElementChild.style.backgroundImage = "none";
}
var backIndex;
for(var i=0;i<items.length;i++){
    items[i].index = i;
    items[i].onmouseenter = function(){
        backIndex = this.index;
        for(var j=0;j<items.length;j++){
            center[j].className = "center";
            items[j].className = "item";
        }
        this.className = "item active";
        center[backIndex].className = "center active";
    }
}

/*backTo*/
var backTo = document.querySelectorAll(".logo .backTo");
var backToFlag = true;
console.log(backTo.length);
for(var i=0;i<backTo.length;i++) {
    backTo[i].index = i;
    backTo[i].onclick = function () {
        if (backToFlag) {
            center[backIndex].className = "center";
            center[backIndex-1].calssName = "center active";
        }
    }
}