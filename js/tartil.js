document.getElementById("btn_simpan_tartil").addEventListener('click', kirimdata_tartil, false);

$(document).ready(function(){   
  $("#btn_back").click(function(){
    window.location.href = "mainmenu.html";
  });
});


function mintadata(){

  // var ipserver = document.getElementById("server_tartil").value;

  var ipserver = window.localStorage.getItem("serverip");

  cordova.plugin.http.get(ipserver + 'kirimtartil', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);
      document.getElementById("sel_tar_imsak").value = response.data.imsak;
      document.getElementById("sel_tar_subuh").value = response.data.subuh;
      document.getElementById("sel_tar_dzuhur").value = response.data.dzuhur;
      document.getElementById("sel_tar_ashar").value = response.data.ashar;
      document.getElementById("sel_tar_maghrib").value = response.data.maghrib;
      document.getElementById("sel_tar_isya").value = response.data.isya;
      document.getElementById("sel_tar_jumat").value = response.data.jumat;
    }, 
    function(response) {
      alert(response.error);
    });
  
}

function kirimdata_tartil(){

  // var ipserver = document.getElementById("server_tartil").value;

  var ipserver = window.localStorage.getItem("serverip");

  var imsak = document.getElementById("sel_tar_imsak").value;
  var subuh = document.getElementById("sel_tar_subuh").value;
  var dzuhur = document.getElementById("sel_tar_dzuhur").value;
  var ashar = document.getElementById("sel_tar_ashar").value;
  var maghrib = document.getElementById("sel_tar_maghrib").value;
  var isya = document.getElementById("sel_tar_isya").value;
  var jumat = document.getElementById("sel_tar_jumat").value;

  cordova.plugin.http.post(ipserver + 'tartil', {
      imsak : imsak,
      subuh : subuh,
      dzuhur : dzuhur,
      ashar : ashar,
      maghrib : maghrib,
      isya : isya,
      jumat : jumat
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });


}