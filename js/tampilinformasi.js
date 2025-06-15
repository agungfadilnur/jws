document.getElementById("btn_simpan_tpl_informasi").addEventListener('click', kirimdata_tpl_informasi, false);


$(document).ready(function(){   
  $("#btn_back").click(function(){
    window.location.href = "mainmenu.html";
  });
});

function mintadata(){
  // var ipserver = document.getElementById("server_tplinfo").value;

  var ipserver = window.localStorage.getItem("serverip");

  cordova.plugin.http.get(ipserver + 'kirimtampilinfo', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);
      // --------------------
      if(response.data.tpl_nama == 1){
        document.getElementById("tpl_namamasjid").checked = true;
      }
      else
      {
        document.getElementById("tpl_namamasjid").checked = false;
      }
      // --------------------
      if(response.data.tpl_pesan == 1){
        document.getElementById("tpl_info1").checked = true;
      }
      else
      {
        document.getElementById("tpl_info1").checked = false;
      }
      // --------------------
      if(response.data.tpl_pesan2 == 1){
        document.getElementById("tpl_info2").checked = true;
      }
      else
      {
        document.getElementById("tpl_info2").checked = false;
      }
      // --------------------
      if(response.data.tpl_pesan3 == 1){
        document.getElementById("tpl_info3").checked = true;
      }
      else
      {
        document.getElementById("tpl_info3").checked = false;
      }
      // --------------------
      if(response.data.tpl_hijriyah == 1){
        document.getElementById("tpl_hijriyah").checked = true;
      }
      else
      {
        document.getElementById("tpl_hijriyah").checked = false;
      }
      // --------------------
      if(response.data.tpl_masehi == 1){
        document.getElementById("tpl_masehi").checked = true;
      }
      else
      {
        document.getElementById("tpl_masehi").checked = false;
      }
      // --------------------
      if(response.data.tpl_matikan == 1){
        document.getElementById("tpl_stlhiqomah").checked = true;
      }
      else
      {
        document.getElementById("tpl_stlhiqomah").checked = false;
      }
    }, 
    function(response) {
      alert(response.error);
    });
  
}

function kirimdata_tpl_informasi(){

  var tpl_namamasjid,tpl_info1,tpl_info2,tpl_info3,tpl_hijriyah,tpl_masehi,tpl_stlhiqomah;

  // var ipserver = document.getElementById("server_tplinfo").value;

  var ipserver = window.localStorage.getItem("serverip");

  var chk_tpl_namamasjid = document.getElementById("tpl_namamasjid").checked;
  var chk_tpl_info1 = document.getElementById("tpl_info1").checked;
  var chk_tpl_info2 = document.getElementById("tpl_info2").checked;
  var chk_tpl_info3 = document.getElementById("tpl_info3").checked;
  var chk_tpl_hijriyah = document.getElementById("tpl_hijriyah").checked;
  var chk_tpl_masehi = document.getElementById("tpl_masehi").checked;
  var chk_tpl_stlhiqomah = document.getElementById("tpl_stlhiqomah").checked;

  if(chk_tpl_namamasjid == true){ tpl_namamasjid = "1" } else {tpl_namamasjid = "0"}
  if(chk_tpl_info1 == true){ tpl_info1 = "1" } else {tpl_info1 = "0"}
  if(chk_tpl_info2 == true){ tpl_info2 = "1" } else {tpl_info2 = "0"}
  if(chk_tpl_info3 == true){ tpl_info3 = "1" } else {tpl_info3 = "0"}
  if(chk_tpl_hijriyah == true){ tpl_hijriyah = "1" } else {tpl_hijriyah = "0"}
  if(chk_tpl_masehi == true){ tpl_masehi = "1" } else {tpl_masehi = "0"}
  if(chk_tpl_stlhiqomah == true){ tpl_stlhiqomah = "1" } else {tpl_stlhiqomah = "0"}
  
  cordova.plugin.http.post(ipserver + 'tampilkaninfo', {
      tpl_nama : tpl_namamasjid,
      tpl_pesan : tpl_info1,
      tpl_pesan2 : tpl_info2,
      tpl_pesan3 : tpl_info3,
      tpl_hijriyah : tpl_hijriyah,
      tpl_masehi : tpl_masehi,
      tpl_matikan : tpl_stlhiqomah
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });
}

