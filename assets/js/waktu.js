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
