setTimeout("jam()", 1000);
var target_jam = 9;
function jam(){
	a = document.getElementById('jam')
	var date = new Date();
	var tanggal = date.getDate();
	var bulan = date.getMonth();
	var hari = date.getDay();
	var namabulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September','Oktober','November','Desember'];
	var jam = date.getHours();
	if (jam < 9) {
		jam = target_jam - jam;
	}
	else {
		
	}
	var menit = 59 - date.getMinutes();
	var detik = 59 - date.getSeconds();
	a.innerHTML = cekwaktu(jam)+':'+cekwaktu(menit)+':'+cekwaktu(detik);
	if (tanggal > 13 && bulan == 11 && tahun == 117) {
		tanggal = 31 - 13;
	}
	else if(tanggal == 13 && bulan == 0 && tahun == 118){
		bulan = tanggal = 0;
	}
	document.getElementById('tanggal').innerHTML = cekwaktu(tanggal);
	setTimeout("jam()", 1000);
}

function cekwaktu(nominal){
	return (nominal>9&&nominal>0?nominal:'0'+nominal)
}

function tes(){
	document.getElementById('menu').innerHTML = Date();
}
