var viewMode = document.cookie.split("view-mode");
setInterval(()=>{
if(viewMode == "desktop"){
    viewport.setAttribute('content', 'width=102');
    console.log('pc')
}else if (viewMode == "mobile"){
    console.log('mobile')
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}},1000)

let myText =
["Developer!","Designer!","Programmer!","Freelancer!"];
let myE = document.querySelector('main>section:first-child div:last-child')
let x=0
function typeWriter(param){
    let y=0
    let id2 = setInterval(()=>{
        myE.innerHTML=`${myE.innerHTML+param[y]}`;
        y++;
        if(y===param.length){
            clearInterval(id2);
            myE.innerHTML="";
        }
    },100)
    
}
let id1 = setInterval(()=>{
    myE.innerHTML="";
    typeWriter(myText[x])
    x++;
    if(x===myText.length){
        x=0;
        myE.innerHTML="";
    }
},2500);

let toggleBtn = document.getElementsByClassName('togglebtn')[0];
let count = 0;
toggleBtn.addEventListener('click',()=>{
    if(count===0){
        toggleBtn.innerHTML="&times;";
        count++;
        console.log(count)
    }
    else{
        toggleBtn.innerHTML="&#8801;";
        count--;
    }
})

let img = document.getElementsByTagName('img')[0];
img.addEventListener('hover',()=>{
    console.log('hobver')
})
