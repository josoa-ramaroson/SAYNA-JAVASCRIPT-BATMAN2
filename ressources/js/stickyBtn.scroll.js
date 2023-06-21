let btnToBottom = document.getElementById("btn-to-botttom");
let btnToTop = document.getElementById("btn-to-top");
function funcScrollTo(position){
return ()=>{
    window.scrollTo(0,position);
};
}
btnToBottom.onclick = funcScrollTo(document.body.scrollHeight)
btnToTop.onclick = funcScrollTo(0);