document.getElementById("btn_simpan_koreksi").addEventListener('click', kirimdata_koreksi, false);

$(document).ready(function(){   
  $("#btn_back").click(function(){
    window.location.href = "mainmenu.html";
  });
});

function mintadata(){

  // alert(window.localStorage.getItem("serverip"));
  // var ipserver = document.getElementById("server_koreksi").value;

  var ipserver = window.localStorage.getItem("serverip");

  cordova.plugin.http.get(ipserver + 'kirimkoreksi', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);
      document.getElementById("sel_kor_imsak").value = response.data.korimsak;
      document.getElementById("sel_kor_subuh").value = response.data.korsubuh;
      document.getElementById("sel_kor_terbit").value = response.data.korterbit;
      document.getElementById("sel_kor_dhuha").value = response.data.kordhuha;
      document.getElementById("sel_kor_dzuhur").value = response.data.kordzuhur;
      document.getElementById("sel_kor_ashar").value = response.data.korashar;
      document.getElementById("sel_kor_maghrib").value = response.data.kormaghrib;
      document.getElementById("sel_kor_isya").value = response.data.korisya;
    }, 
    function(response) {
      alert(response.error);
    });
  
}

function kirimdata_koreksi(){
  // var ipserver = document.getElementById("server_koreksi").value;
  
  var ipserver = window.localStorage.getItem("serverip");

  var korimsak = document.getElementById("sel_kor_imsak").value;
  var korsubuh = document.getElementById("sel_kor_subuh").value;
  var korterbit = document.getElementById("sel_kor_terbit").value;
  var kordhuha = document.getElementById("sel_kor_dhuha").value;
  var kordzuhur = document.getElementById("sel_kor_dzuhur").value;
  var korashar = document.getElementById("sel_kor_ashar").value;
  var kormaghrib = document.getElementById("sel_kor_maghrib").value;
  var korisya = document.getElementById("sel_kor_isya").value;

  cordova.plugin.http.post(ipserver + 'koreksi', {
      korimsak : korimsak,
      korsubuh : korsubuh,
      korterbit : korterbit,
      kordhuha : kordhuha,
      kordzuhur : kordzuhur,
      korashar : korashar,
      kormaghrib : kormaghrib,
      korisya : korisya
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });
  
}


