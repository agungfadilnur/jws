document.getElementById("btn_simpan_adzan").addEventListener('click', kirimdata_adzan, false);

$(document).ready(function(){   
  $("#btn_back").click(function(){
    window.location.href = "mainmenu.html";
  });
});

function mintadata(){

  // var ipserver = document.getElementById("server_adzan").value;

  var ipserver = window.localStorage.getItem("serverip");

  cordova.plugin.http.get(ipserver + 'kirimadzan', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);
      document.getElementById("sel_adz_adzan").value = response.data.lamaadzan;
      document.getElementById("sel_adz_subuh").value = response.data.iqomahsubuh;
      document.getElementById("sel_adz_dzuhur").value = response.data.iqomahdzuhur;
      document.getElementById("sel_adz_ashar").value = response.data.iqomahashar;
      document.getElementById("sel_adz_maghrib").value = response.data.iqomahmaghrib;
      document.getElementById("sel_adz_isya").value = response.data.iqomahisya;
    }, 
    function(response) {
      alert(response.error);
    });
  
}

function kirimdata_adzan(){

  // var ipserver = document.getElementById("server_adzan").value;

  var ipserver = window.localStorage.getItem("serverip");

  var adzadzan = document.getElementById("sel_adz_adzan").value;
  var adzsubuh = document.getElementById("sel_adz_subuh").value;
  var adzdzuhur = document.getElementById("sel_adz_dzuhur").value;
  var adzashar = document.getElementById("sel_adz_ashar").value;
  var adzmaghrib = document.getElementById("sel_adz_maghrib").value;
  var adzisya = document.getElementById("sel_adz_isya").value;

  cordova.plugin.http.post(ipserver + 'adzaniqomah', {
      lamaadzan : adzadzan,
      iqomahsubuh : adzsubuh,
      iqomahdzuhur : adzdzuhur,
      iqomahashar : adzashar,
      iqomahmaghrib : adzmaghrib,
      iqomahisya : adzisya
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });
  
}

