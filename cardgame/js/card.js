let a = [1,2,3];
const defaultSrc = "http://upload2.inven.co.kr/upload/2017/11/04/bbs/i13950388475.png";
let openCards = [];
const initCards = () => {
    let img = document.querySelectorAll(".gg");

    for (let i = 0; i < img.length; i++){
        img[i].setAttribute("data-src", img[i].src);
    }
}
const reverseCards = () => {
    let img = document.querySelectorAll(".gg");

   for (let i = 0; i < img.length; i++){
       img[i].src = defaultSrc;
   }
};
const openCard = (img) => {
    img.src = img.getAttribute("data-src");
}

const changeImg = (imgA, imgB) =>{
    let tsrc;

    tsrc = imgA.getAttribute("data-src");
    imgA.setAttribute("data-src",imgB.getAttribute("data-src"));
    imgB.setAttribute("data-src", tsrc);
};

const shuffleImg = () => {
     let img = document.querySelectorAll(".gg");
     let tmp = [];

     for (let i = 0; i < img.length; i++) {
         tmp.push(img[i]);
     }

     tmp.map((v,i) =>{
         let ri = Math.floor(Math.random() * img.length);
         changeImg(tmp[i], tmp[ri]);
     });
};
const addClickEventToImg = () => {
    let img = document.querySelectorAll(".gg");
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = () => {
            if(openCards.length != 2){
            openCard(img[i]);
            openCards.push(img[i]);
            if (openCards.length == 2) {
                setTimeout(function(){
                    if (openCards[0].getAttribute("data-src") !== openCards[1].getAttribute("data-src")) {
                        openCards[0].src = defaultSrc;
                        openCards[1].src = defaultSrc;
                    }
                    openCards = [];
                }, 500);
            }
            }
            
            

        }
    }
};

kkk.onclick = function() {
        shuffleImg();
        reverseCards();
};

initCards();
reverseCards();
addClickEventToImg();