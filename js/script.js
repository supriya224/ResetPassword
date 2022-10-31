function myfunc(){
    var a =document.getElementById("passwords").value;
    var b =document.getElementById("passwordss").value;

    if(a==""){
        document.getElementById("message").innerHTML ="please fill password";
        return false;
    }

    if(a.length< 5){
        document.getElementById("message").innerHTML ="password length must be grater then 5 characters. ";
        return false;
    }
    if(a.length>8){
        document.getElementById("message").innerHTML ="password length must be smaller then 8 characters. ";
        return false;
    }
    if(a!=b){
        document.getElementById("messagess").innerHTML ="passwords do not match. ";
        return false;
        // console.log("innerHTML")
    }
    if(a===b){
        document.getElementById("messagess").innerHTML ="sucessfull. ";
        alert("sucessfull reset password");
        window.location.href='./js/page.html';
        return false;
    }
}
function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }
    // if(a==password && b==passwordss){
    //     alert("succfull changed the password");
    //     window.location.href="./validation/page.html";
    //     return false;
    //     document.getElementById(messagess.alert("succsessful"));
    //     return true;
    // }else{
    //     alert("login faild")

    // }
    // if(a==passwords && b==passwordss){
    //     window.location.href ="./page.html";
    // }
    // else{
    //     alert("invalid username and passwords");
    // }
// }






















// validation

// var email=document.forms['form']['email'];
// var password=document.forms['form']['password'];

// var email_error =document.getElementById('email_error');
// var pass_error =document.getElementById('pass_error');



// function validated(){
    
//         if(email.value.length<9){
//             email.style.border="1px solid red";
//             email_error.style.display="block";
//             email.focus();
//             return false;
//         }
//         if(password.value.length<8){
//             password.style.border="1px solid red";
//             pass_error.style.display="block";
//             password.focus();
//             return false;
//         }
// }

 
    


// click();
// validated()