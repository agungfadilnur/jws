document.getElementById("btn_log").addEventListener('click', cek_login, false);

function cek_login(){


    var username = document.getElementById("log_username").value;
    var password = document.getElementById("log_password").value;
      

    if(username == "admin" && password == "admin"){
        window.location.href = "mainmenu.html";
    }
    else
    {
        alert("Login Salah...");
    }

}

