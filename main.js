
/* 
orange comment일때 : 녹색, 흰색, 파랑색이 눈에 가장 잘띄임  (작은아이콘 x, 온통 흰색만 x)

첫번째 칸 아이콘들
풍선: 🎈🎨🎃 🎪🛒🧵👔👕 🥽🎫🎀 🎁🎐
음식: 🍿🍳🥗🥙🌯 🥫🍖🍗🥟 🥠🥡🍙🍚🍘 🍛🦪🍣👉🍤 /
 (음식 마지막 칸 : 🍀🍉🥒🍄)

일단 고른것들
🦄 🍄🚀
🍀🍉🥒   
👉🍚 🎨

🍤🍖  🍘🍙 🥨🥐🍛  🎃 🌊
😎🎯 💊 ⚽🏓🩸🧲  📌

👇👆⚾❌⭕ 🌊🧊  ⚡
😈🤢🤡🐲👅👄     
💋🌀🎈 🎨 🏓🎯 💊🩸🧲 📌 🍓🍅🍈  🔥🍚 🍤⛄  
❓❗⭕❌


(🍀home----------)
🍀🍀🍀 : big session
🍀 section , js_220400 
🍉 small section 
🥒 little section

👉-연결된 코드

🎃 : ~ing , bug

js_220400 :connect

🍄 : Algorithm)  , code explain
🍚 point, 알아낸것
😎 공식 (알고리즘 상위호환)
🥗 복습때 자주 잊고 틀리는것, 오답노트

(🍤delete later) : delete later
🍤(hard-coding) (soft-coding)
🍤way-1 way-2 way-3
🍤:  Tip, 중요사항

ig, igloo, ingyum, kei, : 작명한 이름



(🍀class수업때----------)

🍚🍚🍚(🦄🦄🦄)c7 ~~~~~ : 정식으로 정리한것
🍚(🦄)c7  : 다른파일에 체크한것

// 🌊코드 시작 ---------------- 다음 수업에 중첩되서 일단 코멘트 처리
// 👉 c28 코드로 옮김
// 🌊코드 끝----------------------------------------------------------

//👉상단배치 const MongoClient = require('mongodb').MongoClient;




// 🍀예제 코드 


/* 
🍀c2, JS 썼던것들 정리
(~ 뜻 : 변수, 오브젝트)

animationend, animationstart, animationiteration


🍀createElement

classlist.appendChild(document)
classlist.add
classlist.remove
classlist.toggle

.contains()
.closest()

createTextNode

~.dataset (html : data-name="#home" , JS : ~.dataset.name;)

e.preventDefault()
e.clientX, e.clientY
elapsedTime, propertyName

.focus() : open했을때 input에 커서가 깜빡이면서 이미 타이핑할 준비가 되어있음

Math.floor
Math.ceil
Math.round

Math.floor() : 소수점 마지막이 0 이면 0을 안보여줌 - 마지막 숫자...반내림

parseFloat() : 소수점 마지막이 0이어도 0을 안보여줌 - 마지막숫자에서 끊음

👉소수점 2자리에서 끊음
Math.floor(변수* 100) / 100
parseFloat(변수).toFixed(2);

👉소수점 4자리에서 끊음
parseFloat(변수).toFixed(4);  


parseInt(~~string~~) : string 👉number
~~~.toString(); : number 👉 string
 
🍀(about Height)
getBoundingClientRect().top;
pageYOffset
window.scrollY

innerHeight 
offsetTop
offsetHeight

innerHTML =
insertAdjacentHTML
insertAdjacentText
insertAdjacentElement

localStorage


location.reload();  새로고침

🍀load
load – DOM 트리를 만드는 게 완성+ 이미지등등 모두 불러오는 것이 끝났을 때 발생
DOMContentLoaded – 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생
unload / beforeunload  – 사용자가 페이지를 떠날 때 발생
resize

Math.floor(Math.random()*1000);

node : parentNode, childNode, removeChild, appendChild, nodeName , children[4]

reset()

requestAnimationFrame / cancelAnimationFrame

.scrollTop
.scrollintoView
.scrollY

.scrollBy :  (코딩용... 자동으로 가장 밑으로 스크롤시키기) window.scrollBy(0, window.innerHeight);

setAttribute('style','color:red')
~.setAttribute('data-id,123)  /  ~.getAttribute('data-id)
~.setAttribute('style', 'pointer-events: none;');

.setItem(~,~);
.getItem()

🍀
setTimeout /  clearTimeout 
setInterval /  clearInterval 
requestAnimationFrame  / cancelAnimationFrame

substring

🍀
~.style.width =`${~*100}%`;  
~.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`;
~~~.style.backgroundColor = "#ffff00";

.test()
textContent, textHTML
toggle
trim()

transitionend transitionstart

typeof ~~ 

🍀todolist공식
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "~~~";
document.body.append(div);


.value : input내용 가져오기 
.textContent : div내용 가져오기 
*/



/* 🦄 JS 문법 정리

🦄즉시함수
(function () {
  ~~~~~
})();


🦄constructor / prototype
function Card(num, color) {
    this.num = num;
    this.color = color;
    this.init();
}

Card.prototype = {
    constructor: Card,
    init: function() {
        const mainElem = document.createElement('div');
        mainElem.style.color = this.color;
        mainElem.innerHTML = this.num;
        mainElem.classList.add('card');
        document.body.appendChild(mainElem);
    }
};

const card1 = new Card(1, 'green');
const card2 = new Card(7, 'blue');



🦄 class

class Character_c {
    constructor(a_num){
        this.mainElem = document.createElement("div");
        this.mainElem.classList.add('character');
        this.mainElem.innerHTML =`
            <img src="./img/poke(${a_num}).png" alt="">
        `;
        stageElem.appendChild(this.mainElem);
    }
    sayHi(){
        console.log('prototype')
    }
}

btnC.addEventListener('click',()=>{
    let ig = new Character_c(num);  
});


🦄 class (2)
class Note {
  constructor(a, b) {
    this.title = a;
    this.body = b;
    this.id = Math.floor(Math.random() * 1000);
    console.log(this.id);
  }
}

let newNote = new Note(11, 22);
let newNote2 = new Note(1, 2);
*/


/* <🍄알고리즘>

<🍄createElement> - "🚀 cia"

  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = `~~~~`;          
  document.body.append(div);

<🍄for + querySelectorAll 활용하기>

~~~.addEventListener('click',()=>{

    const kei = document.querySelectorAll('.items-remove');

    for (let i = 0; i < kei.length; i++) {
        kei[i].innerHTML=``;      
    }
});


  
<🍄 0~1의 값을 구하는 공식>

0. 0~1의 값을 구하는 공식 만들어서 그 값을 활용하기
1. 계속 바뀌는 값 / 고정된 값 =  0~1의 값을 구해냄 
2. 그 값을 translateZ, style.width에 사용함

🚀드림코딩
let homeHeight = home.getBoundingClientRect().height;
homeAvatar.style.opacity = 1 - window.scrollY / homeHeight;

🚀1분코딩
let maxScroll = document.body.offsetHeight - window.innerHeight;
const scrollPer= pageYOffset/ maxScroll;


<🚀> "gps io"
(계속 바뀌는 값 / 고정된 값 =  0~1의 값)

1. 계속 바뀌는 값
getBoundingClientRect().top;
pageYOffset
window.scrollY

2. 고정값
innerHeight 
offsetTop



<🍄게임 만들기 , n++>

  let n = 0;  
  btn.addEventListener("click", function () {
          n++;  
          number.innerHTML=`${n}`;
        
          if (n > 20) {
              실행하고싶은 함수코딩
        }
      });

    
<🍄e.target마우스 클릭위치 사용>

function(e){  
const mousePos = { x: 0, y: 0 };

mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

~.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`;
}


🚀.parentNode.children 활용하기 . 
10. 형제node중에서 3번째 node의 textContent가져오기
 e.target.parentNode.parentNode.children[4].textContent;

20. 
 for (let i = 0; i < itemsRemoveElem.length; i++) {       
        itemsRemoveElem[i].parentNode.remove();
  }


<  🚀암기공식 : 마우스 위치값잡는 계산식 (암기) 자주 쓰임 >
  가운데 수치가 0으로 만드는게 포인트
  left, bottom일수록 -1,
  right,top일수록 +1로 설정됨        

  
  let mousePosition={x:0,y:0};  

  window.addEventListener('mousemove',(e)=>{    
  
      mousePosition.x =(e.clientX /  window.innerWidth *5)-2.5; 🚀
      mousePosition.y =e.clientY/ window.innerWidth *5;
      
      stageElem.style.transform = `rotateX(${ mousePosition.y }deg) rotateY(${mousePosition.x}deg)`;

  });


<🍄계산하기-더하기...>

grandTotalElem += priceNumber;

<🍄키보드 만들기>
이전에 type한 것 (기존 valu) + 내가 e.target으로 type한것...화면에 보여줌

if (e.target.classList.contains('key_1')) {
  let valu = loginDisplay.value;
  loginDisplay.value=valu+'1';
}


*/

/* 🚀JS 수학 공식 정리
*/

/*🍀 test용 : body 백그라운드 컬러 - red */
// document.querySelector('body').setAttribute('style', 'background-color:lightblue;');

// 🍀코딩용... 자동으로 가장 밑으로 스크롤시키기
// window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });



//  🍀let 🍀const 👉 variable.js







// 🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀
// 🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀
// 🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀
// 🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀
// 🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀
"use strict"
console.log('first')
// window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });


const shopItemBtnAll = document.querySelectorAll('.shop-item-btn');
console.log(shopItemBtnAll)

document.addEventListener('DOMContentLoaded',init);

function init() {
    
    for (let i = 0; i < shopItemBtnAll.length; i++) {
        
        shopItemBtnAll[i].addEventListener('click',addToCartClicked);
        
    }

    document.querySelectorAll('.btn-purchase').addEventListener('click',purchaseClicked);
}


function addToCartClicked(e) {
    
    // parentElement
    // queryselector
    // src

    let shopItem =e.target.parentElement.parentElement;
    let shopItem2 =e.target.parentNode.parentNode;
    console.log(shopItem)
    console.log(shopItem2)
    let title = shopItem.querySelector('.shop_item-title').innerText;
    let price = shopItem.querySelector('.shop_item-price').innerText;
    let imgSrc = shopItem.querySelector('.shop_item-img').src;
    console.log(title)
    console.log(price)
    console.log(imgSrc)

    addItemToCart(title,price,imgSrc);

    updateCartTotal();
}


function addItemToCart(title,price,imgSrc) {
    // 1103 same item already is there, alert and return

    let cartItemTitleAll = document.querySelectorAll('.cart-item-title');

    // for (let i = 0; i < cartItemTitleAll.length; i++) {        
    //     if (cartItemTitleAll[i].textContent == title) {            
    //     }        
    // }

    // 🍉innerHTML + append
    let cartRow = document.createElement('div');

    cartRow.classList.add('cart-row');

    cartRow.innerHTML=`
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imgSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger myButton" type="button">REMOVE</button>
        </div>
        `;

        document.querySelector('.cart-items').append(cartRow);

        // remove

        cartRow.querySelector('.btn-danger').addEventListener('click',removeCartItem);
        // quantitiy chage
        cartRow.querySelector('.cart-quantity-input').addEventListener('click',quantityChanged);
}

function updateCartTotal() {
 
    let cartItemContainer = document.querySelector('.cart-items');
    let cartRows = cartItemContainer.querySelectorAll('.cart-row');

    let total = 0;

    for (let i = 0; i < cartRows.length; i++) {
        const price = cartRows[i].querySelector('.cart-price');

        // parseFloat, replace(~,~)🍚

        let priceFix = parseFloat(price.innerText.replace('$',''));
        let quantity = cartRows[i].querySelector('.cart-quantity-input').value;

        total = total + (priceFix * quantity);
        
        // parseFloat(~).toFixed(~), 
        total = parseFloat(total).toFixed(2)
        document.querySelector('.cart-total-price').innerText = "$" + total;
    }
}

function removeCartItem(e) {
 
    e.target.parentElement.parentElement.remove()
    updateCartTotal();
}

function quantityChanged(e) {
    
    // 🍚inNaN
    if (isNaN(e.target.value) || e.target.value <= 0) {
        e.target.value = 1;
    }
    updateCartTotal();
}

function purchaseClicked() {
    alert('thank');

    let cartItems = document.querySelector('.cart-items');

    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
        
    }

    updateCartTotal();
    
}
