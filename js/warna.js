document.getElementById("btn_simpan_warna").addEventListener('click', kirimdata_warna, false);

$(document).ready(function(){   
  $("#btn_back").click(function(){
    window.location.href = "mainmenu.html";
  });

  // $(function () {
  //   $('#cp2').colorpicker();
  // });
});

function mintadata(){

  // var ipserver = document.getElementById("server_warna").value;

  var ipserver = window.localStorage.getItem("serverip");

  cordova.plugin.http.get(ipserver + 'kirimwarna', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);
      document.getElementById("btn_jam").value = response.data.col_jam;
      document.getElementById("btn_wktslt").value = response.data.col_waktu;
      document.getElementById("btn_info").value = response.data.col_info;
      document.getElementById("btn_jamadzan").value = response.data.col_jam_adzan;
      document.getElementById("btn_adzan").value = response.data.col_adzan;
      document.getElementById("btn_stliqo").value = response.data.col_shaf;
      document.getElementById("btn_tuliqo").value = response.data.col_iqomah;
      document.getElementById("btn_cdiqo").value = response.data.col_jam_iqomah;
    }, 
    function(response) {
      alert(response.error);
    });
  
}

function kirimdata_warna(){
  // var ipserver = document.getElementById("server_warna").value;

  var ipserver = window.localStorage.getItem("serverip");

  var btn_jam = document.getElementById("btn_jam").value;
  var btn_wktslt = document.getElementById("btn_wktslt").value;
  var btn_info = document.getElementById("btn_info").value;
  var btn_jamadzan = document.getElementById("btn_jamadzan").value;
  var btn_adzan = document.getElementById("btn_adzan").value;
  var btn_stliqo = document.getElementById("btn_stliqo").value;
  var btn_tuliqo = document.getElementById("btn_tuliqo").value;
  var btn_cdiqo = document.getElementById("btn_cdiqo").value;

  cordova.plugin.http.post(ipserver + 'warna', {
      col_jam : btn_jam,
      col_waktu : btn_wktslt,
      col_info : btn_info,
      col_jam_adzan : btn_jamadzan,
      col_adzan : btn_adzan,
      col_shaf : btn_stliqo,
      col_iqomah : btn_tuliqo,
      col_jam_iqomah : btn_cdiqo
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });
  
}
