document.getElementById("btn_simpan_informasi").addEventListener('click', kirimdata_informasi, false);

$(document).ready(function(){  
  $("#btn_back_info").click(function(){
    window.location.href = "mainmenu.html";
  });
});

function mintadata(){
  // var ipserver = document.getElementById("server_informasi").value;

  var ipserver = window.localStorage.getItem("serverip");

  cordova.plugin.http.get(ipserver + 'kirimmasjidinfo', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);
      document.getElementById("txt_namamasjid").value = response.data.namamasjid;
      document.getElementById("txt_info1").value = response.data.info1;
      document.getElementById("txt_info2").value = response.data.info2;
      document.getElementById("txt_info3").value = response.data.info3;
      document.getElementById("txt_stlhiqomah").value = response.data.stlhiqomah;
    }, 
    function(response) {
      alert(response.error);
    });
}

function kirimdata_informasi() {

    // var ipserver = document.getElementById("server_informasi").value;

    var ipserver = window.localStorage.getItem("serverip");

    var txt_namamasjid = document.getElementById("txt_namamasjid").value;
    var txt_info1 = document.getElementById("txt_info1").value;
    var txt_info2 = document.getElementById("txt_info2").value;
    var txt_info3 = document.getElementById("txt_info3").value;
    var txt_stlhiqomah = document.getElementById("txt_stlhiqomah").value;

    cordova.plugin.http.post(ipserver + 'info', {
      namamasjid : txt_namamasjid,
      info1 : txt_info1,
      info2 : txt_info2,
      info3 : txt_info3,
      stlhiqomah : txt_stlhiqomah
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });
    
}


