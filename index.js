const ac=document.querySelector(".accounts");
var x=8;
localStorage.setItem("Expenses",JSON.stringify(0));
localStorage.setItem("Income",JSON.stringify(0));
ac.innerHTML=` <h3>Income : ${0}</h3> <h3>Expense : ${0}</h3> `;

const btn=document.querySelector("#btn");
btn.addEventListener("click", function() {
    var tk=+document.getElementById("inpt").value;
    console.log(typeof tk);
    if(tk==0){
        alert("Enter the Amount");
    }else{
        console.log(tk);
        var itk=+localStorage.getItem("Expenses");
        var extk=+localStorage.getItem("Income");
        console.log(typeof itk);

        var incm=parseInt(itk); 
        var expn=parseInt(extk);
        if(tk>0) incm+=tk;
        else expn+=tk;

        localStorage.setItem("Expenses",JSON.stringify(incm));  
        localStorage.setItem("Income",JSON.stringify(expn));

        ac.innerHTML=` <h3>Income : ${incm}</h3> <h3>Expense : ${expn}</h3> `;
    }
    
});
