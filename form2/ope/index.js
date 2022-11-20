let response = "Your registration is successful. Thank you. ";
let userName = document.forms["myform"]["username"].value;
let fname = document.forms["myform"]["firstname"].value;
let lastname = document.forms["myform"]["lastname"].value;
let email = document.forms["myform"]["email"].value;
let password = document.forms["myform"]["password"].value;
let terms = document.forms["myform"]["terms"];
function assign(){
    if(userName ==="")
}

function assign(){
    if(userName === ""){
        alert("Username must be filled");
            }

            if(fname === ""){
                alert("First name must be filled");
                    }
                   if(lastname === ""){
                        alert("Last name must be filled");
                      }
                   if(email === ""){
                        alert("Email Address must be filled");
                            }
                           if(password === ""){
                                alert("You forgot to input your password");
                                    }
                                     if(!terms.checked){
                                         alert("you must check the box");
                                           }

                                           else{
                                            alert(response);
                                           }
                    

                           

}