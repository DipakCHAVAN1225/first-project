let url="https://cat-fact.herokuapp.com/facts";

let head=document.querySelector("#header");

// let getdata=async ()=>{
//   let response=await fetch(url);
//   // let data=await responce.JSON();
//   let data=await response.json();
//   head.innerHTML=data[3].text;

// }
// getdata()
function got(){
  fetch(url).then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log(data[0].text);
    head.innerHTML=data[3].text;
  })
}
got();
