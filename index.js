// setTimeout("jam()", 1000);
setInterval("jam()", 1000);
var target_jam = 8;
var target_menit = 59;
var target_detik = 60;
var target_tanggal = 13;
var target_bulan = 0;
var target_tahun = 2018;
var tanggal;
var bulan;
var hari;
var tahun;
var sisa_hari = 0;
var sisa_jam = 23;
var sisa_menit = 59;
var sisa_detik = 59;

function jam(){
	el_jam = document.getElementById('jam');
	menit = document.getElementById('menit');
	detik = document.getElementById('detik');
	
	var date = new Date();
	tanggal = date.getDate();
	bulan = date.getMonth();
	hari = date.getDay();
	tahun = date.getFullYear();
	sisa_hari = 0;
	sisa_jam = 23;
	sisa_menit = 59;
	sisa_detik = 59;

	var namabulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September','Oktober','November','Desember'];
	var jam = date.getHours();
	if(bulan == 11){
		sisa_hari = 31 - tanggal + target_tanggal;
	}
	else if (bulan == 0) {
		sisa_hari = target_tanggal - hari;
	}
	if (jam <= target_jam) {
		sisa_jam = target_jam - jam;
	}
	else {
		sisa_jam = 24 - jam + target_jam;
		sisa_hari--;
	}
	sisa_menit =  target_menit - date.getMinutes();
	/*if(sisa_menit == 60){
		sisa_menit = 0;
	}*/
	sisa_detik = target_detik - date.getSeconds();
	if(sisa_detik == 60){
		sisa_detik = 0;
		sisa_menit++;
	}
	el_jam.innerHTML = cekwaktu(sisa_jam) + " Jam";
	menit.innerHTML = cekwaktu(sisa_menit) + " Menit";
	detik.innerHTML = cekwaktu(sisa_detik) + " Detik";

	if (tanggal > 13 && bulan == 11 && tahun == 117) {
		tanggal = 31 - 13;
	}
	else if(tanggal == 13 && bulan == 0 && tahun == 118){
		bulan = tanggal = 0;
	}

	if(sisa_hari){
		document.getElementById('hari').innerHTML = cekwaktu(sisa_hari) + " Hari";
	}

	if (sisa_hari < 0 || sisa_jam < 0 || sisa_menit < 0 || sisa_detik < 0) {
		
	}
	else{
		document.getElementById('status').innerHTML	= 'Menuju Acara';
	}
	// karena setTimeout hanya menjalankan kode sekali
	// setTimeout("jam()", 1000);
}

function cekwaktu(nominal){
	return (nominal>9?nominal:'0'+nominal)
}

function tes(){
	document.getElementById('menu').innerHTML = Date();
}
