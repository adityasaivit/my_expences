
let transaction=document.querySelector(".transaction")
let available=document.querySelector(".avl")
let button=document.querySelector(".submit")
let spend=document.querySelector(".spend")
let avl=0
let spent=0
function addtrans(a,b,c)
{
    let abb=(a=='credit'? "FROM":"TO")
    if(c==0 || a=='' || b=='')
    {
        return
    }
    console.log(a,b,c)
    let html=`<div class="${a} trans">
                <p class="type">${a}</p>
                <p class="source">${abb} ${b}</p>
                <p class="amount">${c}</p>
            </div>`
    
    transaction.insertAdjacentHTML('afterbegin',html)
}

button.addEventListener('click',function(){
    let type=document.querySelector(".typeof").value
    let rece=document.querySelector(".transfer").value
    let amount=document.querySelector(".price").value
    if(type=='credit')
    {
        avl=avl+Number(amount)
        console.log(avl)
    }
    if(type=='debit')
    {
        avl=avl-Number(amount)
        spent=spent+amount
    }

    console.log(type,rece,amount)
    addtrans(type,rece,amount)
    available.innerHTML=`${avl}`
    spend.innerHTML=`${spent}`
    
})
