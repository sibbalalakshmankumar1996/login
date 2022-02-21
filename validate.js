let emailNode = document.getElementById("Email");
let passNode = document.getElementById("pass");

let emailNode1  =document.getElementById("emailErrMsg");
let passNode2 = document.getElementById("passErrMsg");

let border1 = "1px solid red";
let border2 = "1px solid green";

function validate1(){
    emailNode1.textContent = "";
    let emailAddress = emailNode.value;
    let indexNum = emailAddress.indexOf('@')+1;
    let subString = emailAddress.substring(indexNum);
    console.log(subString);

    if (emailAddress == ''){
        emailNode1.textContent = "Required*";
        emailNode.style.border = border1;
        return false;
    }
    else if (subString =='' || emailAddress.includes('@') ==false){
        emailNode1.textContent = "Enter a valid mail Id";
        emailNode.style.border = border1;
        return false;
    }
    else{
        emailNode.style.border = border2;
        return true;
    }
}

function validate2(){
    passNode2.textContent = "";
    let password = passNode.value;
    let regExp =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if (password ==''){
        passNode2.textContent = "Required*";
        passNode.style.border = border1;
        return false;
    }
    else if (regExp.test(password)==false){
        let spanNode = document.createElement("span");
        spanNode.textContent = "The password should contain atleast one";
        let ulNode = document.createElement("ul");
        let liNode1 = document.createElement("li");
        liNode1.textContent = "Capital letter";
        let liNode2 = document.createElement("li");
        liNode2.textContent = "Small letter";
        let liNode3 = document.createElement("li");
        liNode3.textContent = "Numerical letter";
        let liNode4 = document.createElement("li");
        liNode4.textContent = "Special letter";
        ulNode.append(liNode1,liNode2,liNode3,liNode4);
        passNode2.append(spanNode,ulNode);
        passNode.style.border = border1;
        return false;
    }
    else if (password.length <8 || password.length >24){
        passNode2.textContent = "The password range should between 8 to 24 characters.";
        passNode.style.border = border1;
        return false;

    }

    else{
        passNode.style.border = border2;
        return true;
    }
}

function validateForm(){
    let emailField = validate1();
    let passField = validate2();

    return emailField && passField;
}


