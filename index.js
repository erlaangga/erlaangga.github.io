setTimeout("jam()", 1000);
function jam(){
	a = document.getElementById('jam')
	var date = new Date();
	var tahun = date.getYear();
	var tanggal = date.getDate();
	var bulan = date.getMonth();
	var hari = date.getDay();
	var namabulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September','Oktober','November','Desember'];
	var jam = date.getHours();
	var menit = date.getMinutes();
	var detik = date.getSeconds();
	a.innerHTML = cekwaktu(jam)+':'+cekwaktu(menit)+':'+cekwaktu(detik);
	document.getElementById('tanggal').innerHTML = tanggal + ' ' + namabulan[bulan] + ' ' + (tahun+1900);
	setTimeout("jam()", 1000);
}

function cekwaktu(nominal){
	return (nominal>9?nominal:'0'+nominal)
}

function tes(){
	document.getElementById('menu').innerHTML = Date();
}