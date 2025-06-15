document.getElementById("min_vol_adzan").addEventListener('click', kurang_vol_adzan, false);
document.getElementById("plus_vol_adzan").addEventListener('click', tambah_vol_adzan, false);

document.getElementById("min_vol_jam").addEventListener('click', kurang_vol_jam, false);
document.getElementById("plus_vol_jam").addEventListener('click', tambah_vol_jam, false);

document.getElementById("min_cerah").addEventListener('click', kurang_cerah, false);
document.getElementById("plus_cerah").addEventListener('click', tambah_cerah, false);

document.getElementById("min_speed").addEventListener('click', kurang_speed, false);
document.getElementById("plus_speed").addEventListener('click', tambah_speed, false);

document.getElementById("btn_simpan_pengaturan").addEventListener('click', kirimdata_pengaturan, false);




$(document).ready(function(){
     $("#btn_back").click(function(){
        window.location.href = "mainmenu.html";
     });
    
     $( function() { $( "#accordion" ).accordion(); });

    // buka kecerahan
      $( function() {
        var handle = $( "#custom-handle-cerah" );
        $( "#slider_cerah" ).slider({
        range: "max",
        min: 1,
        max: 200,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value );
          }
        });
      });

    // buka volume adzan & jam
    $( function() {
        var handle = $( "#custom-handle-adzan" );
        $( "#slider_adzan" ).slider({
        range: "max",
        min: 1,
        max: 50,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value );
          }
        });
      });

    // buka relay
    $( function() {
        var handle = $( "#custom-handle-jam" );
        $( "#slider_jam" ).slider({
        range: "max",
        min: 1,
        max: 50,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value );
          }
        });
      });

    // buka kecepatan
    $( function() {
        var handle = $( "#custom-handle-speed" );
        $( "#slider_speed" ).slider({
        range: "max",
        min: 1,
        max: 150,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value );
          }
        });
      });
    
    
});

function mintadata(){

    // var ipserver = document.getElementById("server_pengaturan").value;

    var ipserver = window.localStorage.getItem("serverip");

    cordova.plugin.http.get(ipserver + 'kirimatur', {}, 
    { Authorization: 'OAuth2: token' }, 
    function(response) {
      response.data = JSON.parse(response.data);

      document.getElementById("sel_hijriyah").value = response.data.adjhijr;
      document.getElementById("txt_cerah").value = response.data.adjcerah;
      document.getElementById("txt_vol_adzan").value = response.data.adjvolumeadzan;
      document.getElementById("txt_vol_jam").value = response.data.adjvolume;

      // --------------------
      if(response.data.beepstatus == 1){ document.getElementById("atur_beep").checked = true; }
      else { document.getElementById("atur_beep").checked = false; }

      // "relayon": "03:00:00", "relayoff": "21:00:00",

      document.getElementById("sel_jam_relayon").value = (response.data.relayon).substring(0, 2);
      document.getElementById("sel_menit_relayon").value = (response.data.relayon).substring(3, 5);
      document.getElementById("sel_jam_relayoff").value = (response.data.relayoff).substring(0, 2);
      document.getElementById("sel_menit_relayoff").value = (response.data.relayoff).substring(3, 5);
      
      document.getElementById("txt_speed").value = response.data.speedtext;

      document.getElementById("mati_sholat").value = response.data.msholbi;
      document.getElementById("mati_jumat").value = response.data.msholju;

      document.getElementById("mati_jam_besar").value = response.data.jambesar;

    }, 
    function(response) {
      alert(response.error);
    });
  
}

function kirimdata_pengaturan(){
    var beepstatus;

    // var ipserver = document.getElementById("server_pengaturan").value;

    var ipserver = window.localStorage.getItem("serverip");

    var adjhijr = document.getElementById("sel_hijriyah").value;
    var adjcerah = document.getElementById("txt_cerah").value;
    var adjvolumeadzan = document.getElementById("txt_vol_adzan").value;
    var adjvolume = document.getElementById("txt_vol_jam").value;

    var speedtext = document.getElementById("txt_speed").value;
    
    var msholbi = document.getElementById("mati_sholat").value;
    var msholju = document.getElementById("mati_jumat").value;
    var jambesar = document.getElementById("mati_jam_besar").value;

    var chk_beep = document.getElementById("atur_beep").checked;
    if(chk_beep == true){ beepstatus = "1" } else {beepstatus = "0"}

  

    var relayon = document.getElementById("sel_jam_relayon").value + ":" + document.getElementById("sel_menit_relayon").value;
    var relayoff = document.getElementById("sel_jam_relayoff").value + ":" + document.getElementById("sel_menit_relayoff").value;

    cordova.plugin.http.post(ipserver + 'atur', {
      adjhijr : adjhijr,
      adjcerah : adjcerah,
      adjvolumeadzan : adjvolumeadzan,
      modetampil : 1,
      beepstatus : beepstatus,
      adjvolume : adjvolume,
      speedtext : speedtext,
      msholju : msholju,
      msholbi : msholbi,
      jambesar : jambesar,
      relayon : relayon,
      relayoff : relayoff
    }, {
      Authorization: 'OAuth2: token'
    }, function(response) {
      // console.log(response.status);
    }, function(response) {
      // console.error(response.error);
    });
}

function kurang_vol_adzan(){
    var vol_adzan = document.getElementById("txt_vol_adzan").value;
    vol_adzan = parseInt(vol_adzan) - 1;
    document.getElementById("txt_vol_adzan").value = vol_adzan;
}

function tambah_vol_adzan(){
    var vol_adzan = document.getElementById("txt_vol_adzan").value;
    vol_adzan = parseInt(vol_adzan) + 1;
    document.getElementById("txt_vol_adzan").value = vol_adzan;
}

function kurang_vol_jam(){
    var vol_jam = document.getElementById("txt_vol_jam").value;
    vol_jam = parseInt(vol_jam) - 1;
    document.getElementById("txt_vol_jam").value = vol_jam;
}

function tambah_vol_jam(){
    var vol_jam = document.getElementById("txt_vol_jam").value;
    vol_jam = parseInt(vol_jam) + 1;
    document.getElementById("txt_vol_jam").value = vol_jam;
}

function kurang_cerah(){
    var isi_cerah = document.getElementById("txt_cerah").value;
    isi_cerah = parseInt(isi_cerah) - 1;
    document.getElementById("txt_cerah").value = isi_cerah;
}

function tambah_cerah(){
    var isi_cerah = document.getElementById("txt_cerah").value;
    isi_cerah = parseInt(isi_cerah) + 1;
    document.getElementById("txt_cerah").value = isi_cerah;
}

function kurang_speed(){
    var isi_speed = document.getElementById("txt_speed").value;
    isi_speed = parseInt(isi_speed) - 1;
    document.getElementById("txt_speed").value = isi_speed;
}

function tambah_speed(){
    var isi_speed = document.getElementById("txt_speed").value;
    isi_speed = parseInt(isi_speed) + 1;
    document.getElementById("txt_speed").value = isi_speed;
}