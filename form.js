const btn = document.getElementById("btn");
const names = document.querySelectorAll("input[type='text']");
const email = document.getElementById("email");
const msgBox = document.getElementsByTagName("textarea");
const rdbtns = document.querySelectorAll("input[type='radio'");
const chckBox = document.getElementById("consent");
const successMsg = document.getElementById("success_container");

let rdiobtnValue = "";

const checkForm = function(){
    let count = 0;
    /* names */
    for(let name of names){
        if(name.value==="" || name.value === null || name.value === undefined){
            name.classList.add("failed");
            name.parentNode.lastElementChild.innerHTML="This field is required";
        } else{
            name.classList.remove("failed");
            name.parentNode.lastElementChild.innerHTML="";
            count++;
        }
    }

    /* email */
    if(email.value==="" || email.value === null || email.value === undefined){
        email.classList.add("failed");
        email.parentNode.lastElementChild.innerHTML="This field is required";
    } else{
        const flags = "gm";
        const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/gm;
        const result = email.value.match(pattern);
        if(!result){
            email.classList.add("failed");
            email.parentNode.lastElementChild.innerHTML="Please enter a valid email address";

        }else{
            email.classList.remove("failed");
        email.parentNode.lastElementChild.innerHTML="";
        count++;
        } 
    }

    /* textarea */
    for(let msg of msgBox){
        if(msg.value==="" || msg.value === null || msg.value === undefined){
            msg.classList.add("failed");
            msg.parentNode.lastElementChild.innerHTML="This field is required";
        } else{
            msg.classList.remove("failed");
            msg.parentNode.lastElementChild.innerHTML="";
            count++;
        }
    }

    /* radio buttons */
    for(let rdbtn of rdbtns){
        if(rdbtn.checked){
            rdiobtnValue = rdbtn.value;
        }
    }

    if(rdiobtnValue ==="" || rdiobtnValue === null || rdiobtnValue === undefined){
            rdbtns[0].parentNode.lastElementChild.innerHTML="Please select a query type";
    } else{
        rdbtns[0].parentNode.lastElementChild.innerHTML="";
            count++;
    }


    /*checkbox */
    if(chckBox.checked){
        chckBox.parentNode.lastElementChild.innerHTML = "";
        count++;
    } else{
        chckBox.parentNode.lastElementChild.innerHTML = "To submit this form, please consent to being contacted";
    }

   console.log(count);
    if(count === 6){
        successMsg.classList.add("active");
    } else{
        successMsg.classList.remove("active");
    }

}


btn.addEventListener("click",checkForm);