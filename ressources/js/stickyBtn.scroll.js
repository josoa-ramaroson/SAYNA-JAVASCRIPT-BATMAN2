let btnToBottom = document.getElementById("btn-to-botttom");
let btnToTop = document.getElementById("btn-to-top");

let btnBatmanCinema = document.querySelectorAll("#btn-group button");
function funcScrollTo(position){
return ()=>{
    window.scrollTo(0,position);
};
}
btnToBottom.onclick = funcScrollTo(document.body.scrollHeight)
btnToTop.onclick = funcScrollTo(0);
// btnBatmanCinema[0].onclick = funcScrollTo();
// btnBatmanCinema[1].onclick = funcScrollTo();
// console.log(document.getElementById("batman-cinema"));