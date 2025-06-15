document.getElementById("btn_simpan_tpl_jadwal").addEventListener('click', kirimdata_tpl_jadwal, false);

$(document).ready(function(){   
  $("#btn_back").click(function(){
    window.location.href = "mainmenu.html";
  });
});


function mintadata(){
  // var ipserver = document.getElementById("server_tpljadwal").value;

  var ipserver = window.localStorage.getItem("serverip");

  cordova.plugin.http.get(ipserver + 'kirimtpljdwl', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);
      // --------------------
      if(response.data.tpl_imsak == 1){
        document.getElementById("tpl_imsak").checked = true;
      }
      else
      {
        document.getElementById("tpl_imsak").checked = false;
      }
      // --------------------
      if(response.data.tpl_subuh == 1){
        document.getElementById("tpl_subuh").checked = true;
      }
      else
      {
        document.getElementById("tpl_subuh").checked = false;
      }
      // --------------------
      if(response.data.tpl_terbit == 1){
        document.getElementById("tpl_terbit").checked = true;
      }
      else
      {
        document.getElementById("tpl_terbit").checked = false;
      }
      // --------------------
      if(response.data.tpl_dhuha == 1){
        document.getElementById("tpl_dhuha").checked = true;
      }
      else
      {
        document.getElementById("tpl_dhuha").checked = false;
      }
      // --------------------
      if(response.data.tpl_dzuhur == 1){
        document.getElementById("tpl_dzuhur").checked = true;
      }
      else
      {
        document.getElementById("tpl_dzuhur").checked = false;
      }
      // --------------------
      if(response.data.tpl_ashar == 1){
        document.getElementById("tpl_ashar").checked = true;
      }
      else
      {
        document.getElementById("tpl_ashar").checked = false;
      }
      // --------------------
      if(response.data.tpl_maghrib == 1){
        document.getElementById("tpl_maghrib").checked = true;
      }
      else
      {
        document.getElementById("tpl_maghrib").checked = false;
      }
      // --------------------
      if(response.data.tpl_isya == 1){
        document.getElementById("tpl_isya").checked = true;
      }
      else
      {
        document.getElementById("tpl_isya").checked = false;
      }
    }, 
    function(response) {
      alert(response.error);
    });
}

function kirimdata_tpl_jadwal(){
  var tpl_imsak,tpl_subuh,tpl_terbit,tpl_dhuha,tpl_dzuhur,tpl_ashar,tpl_maghrib,tpl_isya;

  // var ipserver = document.getElementById("server_tpljadwal").value;

  var ipserver = window.localStorage.getItem("serverip");

  var chk_tpl_imsak = document.getElementById("tpl_imsak").checked;
  var chk_tpl_subuh = document.getElementById("tpl_subuh").checked;
  var chk_tpl_terbit = document.getElementById("tpl_terbit").checked;
  var chk_tpl_dhuha = document.getElementById("tpl_dhuha").checked;
  var chk_tpl_dzuhur = document.getElementById("tpl_dzuhur").checked;
  var chk_tpl_ashar = document.getElementById("tpl_ashar").checked;
  var chk_tpl_maghrib = document.getElementById("tpl_maghrib").checked;
  var chk_tpl_isya = document.getElementById("tpl_isya").checked;

  if(chk_tpl_imsak == true){ tpl_imsak = "1" } else {tpl_imsak = "0"}
  if(chk_tpl_subuh == true){ tpl_subuh = "1" } else {tpl_subuh = "0"}
  if(chk_tpl_terbit == true){ tpl_terbit = "1" } else {tpl_terbit = "0"}
  if(chk_tpl_dhuha == true){ tpl_dhuha = "1" } else {tpl_dhuha = "0"}
  if(chk_tpl_dzuhur == true){ tpl_dzuhur = "1" } else {tpl_dzuhur = "0"}
  if(chk_tpl_ashar == true){ tpl_ashar = "1" } else {tpl_ashar = "0"}
  if(chk_tpl_maghrib == true){ tpl_maghrib = "1" } else {tpl_maghrib = "0"}
  if(chk_tpl_isya == true){ tpl_isya = "1" } else {tpl_isya = "0"}

  cordova.plugin.http.post(ipserver + 'tampilkanjadwal', {
      tpl_imsak : tpl_imsak,
      tpl_subuh : tpl_subuh,
      tpl_terbit : tpl_terbit,
      tpl_dhuha : tpl_dhuha,
      tpl_dzuhur : tpl_dzuhur,
      tpl_ashar : tpl_ashar,
      tpl_maghrib : tpl_maghrib,
      tpl_isya : tpl_isya
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });

}