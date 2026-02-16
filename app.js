const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  const  slt=document.querySelectorAll(".slt select");
  const bt=document.querySelector("button");
  const amnts=document.querySelector(".amnt input");
  const fromslt=document.querySelector(".from select");
  const toslt=document.querySelector(".to select");
  const msgtxt=document.querySelector(".msg");
for(let selects of slt){
    for(let country in countryList){
        let newoption = document.createElement("option");
        newoption.innerText=country;
        newoption.value=country;
            selects.append(newoption);
         if (selects.name === "from" && country=== "USD") {
      newoption.selected = "selected";
    } else if (selects.name === "to" && country=== "INR") {
      newoption.selected = "selected";
    }
    }

    selects.addEventListener("change",(obj)=>{
         let id=countryList[obj.target.value];
         let src1=`https://flagsapi.com/${id}/flat/64.png`
         const slt1=obj.target.parentElement.querySelector("img");
         slt1.src=src1; 
    });}
    bt.addEventListener("click",async (obj)=>{
         obj.preventDefault();//to show mouse as clickable like hand symbol
        amntval=amnts.value;
        if(amntval<=0){
            amnts.value="1";
            amntval=1;
        }
        const URL= `https://v6.exchangerate-api.com/v6/57c511080d437f1e2484b625/latest/${fromslt.value}`;
        let response= await fetch(URL);
        let data=await response.json();
        rate=data.conversion_rates[toslt.value];
        let finalamnt=rate*amntval;
        msgtxt.innerText=`${amntval} ${fromslt.value} = ${finalamnt} ${toslt.value}`
    });


