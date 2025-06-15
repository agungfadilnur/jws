document.getElementById("btn_simpan_waktu").addEventListener('click', kirimdata_waktu, false);
document.getElementById("btn_simpan_auto").addEventListener('click', kirimdata_auto, false);

$(document).ready(function(){   
    jam();
  $("#btn_back").click(function(){
    window.location.href = "mainmenu.html";
  });
    
  $("#txt_tanggal").datepicker({dateFormat: "yy-mm-dd "});
});

function jam(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    var tanggal = new Date().getDate();
    var _bulan = (new Date().getMonth())+1;
    var _tahun = new Date().getYear();
    var tahun = (_tahun < 1000) ? _tahun + 1900 : _tahun;
    var isi_tanggal = tahun + '-' + checkTime(_bulan) + '-' + checkTime(tanggal);
    
    $(txt_jam_auto).val(h + ":" + m)
    
    $(txt_tanggal_auto).val(isi_tanggal)
    setTimeout(jam, 1000);
};
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
};

function kirimdata_waktu() {
    // var ipserver = document.getElementById("server_waktu").value;

    var ipserver = window.localStorage.getItem("serverip");

    var man_jam = document.getElementById("sel_jam").value;
    var man_menit = document.getElementById("sel_menit").value;
    var man_tanggal = document.getElementById("txt_tanggal").value;

    var man_waktu = man_jam + ":" + man_menit;
    

      cordova.plugin.http.post(ipserver + 'waktu', {
          isi_jam : man_waktu,
          isi_tanggal : man_tanggal
        }, {
          Authorization: 'OAuth2: token'
        }, function(response) {
          // console.log(response.status);
        }, function(response) {
          // console.error(response.error);
        });  
}

function kirimdata_auto(){
    // var ipserver = document.getElementById("server_waktu").value;

    var ipserver = window.localStorage.getItem("serverip");

    var man_jam_auto = document.getElementById("txt_jam_auto").value;
    var man_tanggal_auto = document.getElementById("txt_tanggal_auto").value;


      cordova.plugin.http.post(ipserver + 'waktu', {
          isi_jam : man_jam_auto,
          isi_tanggal : man_tanggal_auto
        }, {
          Authorization: 'OAuth2: token'
        }, function(response) {
          // console.log(response.status);
        }, function(response) {
          // console.error(response.error);
        });  

}