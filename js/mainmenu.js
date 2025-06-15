$(document).ready(function(){
    $("#btn_waktu").click(function(){
        window.location.href = "waktu.html";
    });
    
    $("#btn_pengaturan").click(function(){
        window.location.href = "pengaturan.html";
    });
    
    $("#btn_lokasi").click(function(){
        window.location.href = "lokasi.html";
    });
    
    $("#btn_koreksi").click(function(){
        window.location.href = "koreksi.html";
    });
    
    $("#btn_tpl_jadwal").click(function(){
        window.location.href = "tampiljadwal.html";
    });
    
    $("#btn_informasi").click(function(){
        window.location.href = "informasi.html";
    });
    
    $("#btn_tpl_informasi").click(function(){
        window.location.href = "tampilinformasi.html";
    });
    
    $("#btn_adzan_iqomah").click(function(){
        window.location.href = "adzaniqomah.html";
    });
    
    $("#btn_tartil").click(function(){
        window.location.href = "tartil.html";
    });
    
    $("#btn_warna").click(function(){
        window.location.href = "warna.html";
    });  

    $("#btn_server").click(function(){ //ganti alamat server

        let serverip = prompt("Masukkan IP SERVER:", window.localStorage.getItem("serverip"));

        if (serverip == null || serverip == "") {
            alert("Data belum dimasukkan");
        } else {
            window.localStorage.setItem("serverip", serverip);
            alert(window.localStorage.getItem("serverip"));
        }
    });   
});

function cek_server() {
        // window.localStorage.setItem("akses", "1");
        if (window.localStorage.getItem("akses") == "1") {
            let serverip = prompt("Masukkan IP SERVER:", "http://192.168.4.1/");
              if (serverip == null || serverip == "") {
                alert("Data belum dimasukkan");
              } else {
                window.localStorage.setItem("akses", "2");
                window.localStorage.setItem("serverip", serverip);
                alert(window.localStorage.getItem("serverip"));
              }
        } 
        else
        {
             // alert(window.localStorage.getItem("serverip"));
        }
}; 

