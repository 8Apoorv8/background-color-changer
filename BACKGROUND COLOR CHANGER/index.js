// for getting random colors
// (Math.floor(Math.random()*256))
let body=document.body;
let btn=document.querySelector("button");
btn.addEventListener("click",function()
{
  let red=Math.floor(Math.random()*256);
  let green=Math.floor(Math.random()*256);
  let blue=Math.floor(Math.random()*256);
  let clr=`rgb(${red}, ${green}, ${blue})`;
  // console.log(clr)
  body.style.backgroundColor=clr;

  let currentclr=document.querySelector("h1");
  currentclr.innerHTML=`Current color: ${clr}`

})


