document.getElementById("btn_simpan_lokasi").addEventListener('click', kirimdata_lokasi, false);
document.getElementById("btn_ambil_lokasi").addEventListener('click', getLocation, false);

$(document).ready(function(){   
  $("#btn_back").click(function(){
    window.location.href = "mainmenu.html";
  });
});

// minta data ke esp32
function mintadata(){
  // var ipserver = document.getElementById("server_lokasi").value;

  var ipserver = window.localStorage.getItem("serverip");

  cordova.plugin.http.get(ipserver + 'kirimlokasi', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);
      document.getElementById("txt_latitude").value = response.data.latitude;
      document.getElementById("txt_longitude").value = response.data.longitude;
      document.getElementById("sel_timezone").value = response.data.zonawaktu;
    }, 
    function(response) {
      alert(response.error);
    });
}

// kirim data ke esp32
function kirimdata_lokasi() {

    // var ipserver = document.getElementById("server_lokasi").value;
  
    var ipserver = window.localStorage.getItem("serverip");

    var txt_lat = document.getElementById("txt_latitude").value;
    var txt_long = document.getElementById("txt_longitude").value;
    var txt_tz = document.getElementById("sel_timezone").value;

    cordova.plugin.http.post(ipserver + 'koordinat', {
      latitude : txt_lat,
      longitude : txt_long,
      zonawaktu : txt_tz
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });
    
}

// ambil lokasi
function getLocation() { 
  navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
}

// sukses ambil lokasi
function onSuccess(position) {
  var offset = new Date().getTimezoneOffset();
  var t_zone =  -1 * (offset / 60);

  document.getElementById("txt_latitude").value = position.coords.latitude;
  document.getElementById("txt_longitude").value = position.coords.longitude;
  document.getElementById("sel_timezone").value = t_zone
}

// gagal ambil lokasi
function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}
