const ac=document.querySelector(".accounts");

var incometk=+localStorage.getItem("Income");
var expensetk=+localStorage.getItem("Expenses");
ac.innerHTML=` <h3>Income : ${incometk}</h3> <h3>Expense : ${-1*expensetk}</h3> `;

const list=[];
const Listitems=document.querySelector(".data");
const btn=document.querySelector("#btn");
btn.addEventListener("click", function() {
    var tk=+document.getElementById("inpt").value;
 
    if(tk==0){
        alert("Enter the Amount");
    }
    else{
        incometk=+localStorage.getItem("Income");
        expensetk=+localStorage.getItem("Expenses");
        
        newdiv1=document.createElement("div");
        newdiv2=document.createElement("div");
        newdiv3=document.createElement("div");

        newdiv1.style.display="flex"; newdiv1.style.gap="5px"; 
        newdiv1.style.justifyContent="center"; newdiv1.style.alignItems="center"; 

        newdiv2.style.display="flex"; newdiv2.style.gap="5px"; 
        newdiv2.style.justifyContent="center"; newdiv2.style.alignItems="center"; 

        newdiv3.style.display="flex"; 
        newdiv3.style.justifyContent="space-between";
        newdiv3.append(newdiv1);
        newdiv3.append(newdiv2);

        if(tk>0) {
            incometk+=tk;
            newdiv1.innerHTML= `<h2>${tk}</h2> <p> Tk Income</p>`;
            newdiv2.innerHTML= `<button style="height:30px;">Delete</button> <button style="height:30px;">Edit</button>`;
        }
        else { 
            expensetk+=tk;
            newdiv1.innerHTML= `<h2>${-1*tk}</h2> <p>Tk Expense</p>`;
            newdiv2.innerHTML= `<button style="height:30px;">Delete</button> <button style="height:30px;">Edit</button>`;
        }
        Listitems.append(newdiv3);
        list.push(newdiv3);

        ac.innerHTML=` <h3>Income : ${incometk}</h3> <h3>Expense : ${-1*expensetk}</h3> `;
        localStorage.setItem("Income",JSON.stringify(incometk));  
        localStorage.setItem("Expenses",JSON.stringify(expensetk));
        localStorage.setItem("Previous",JSON.stringify(list));
    }
});


