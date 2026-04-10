var id = localStorage.getItem('id');
var product_name = localStorage.getItem('product_name');
var price = localStorage.getItem('price');
var active_for = localStorage.getItem('active_for');
var bot_name = localStorage.getItem('bot_name');

var doge_address = localStorage.getItem('doge_address');
var qr_address = localStorage.getItem('qr_address');
var whatsapp_order = localStorage.getItem('whatsapp_order');

$(".doge_address").html(doge_address);

$("#product_name").html(product_name);
$("#price").html(price);
$("#active_for").html(active_for);
$("#bot_name").html(bot_name);



var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = jam + ":" + menit + ":" + detik;

function sendWhatsapp(number, text)
{
    window.location.href = 'https://api.whatsapp.com/send?phone='+number+'&text='+text
}

function sendOrderConfirmation()
{
    var message = 'Halo, saya telah melakukan pembayaran untuk produk lisensi *'+product_name+'* dengan masa aktif *'+active_for+'* yang saya pesan sebelumnya. Saya ingin mengirimkan bukti pembayaran sebagai konfirmasi.%0a%0aBerikut ini adalah detail pembayaran yang telah saya lakukan:%0a%0aTanggal: '+tampilTanggal+' '+tampilWaktu+'%0aProduk: *'+product_name+'*%0aMetode pembayaran: *DOGE*%0aAlamat Doge: *'+doge_address+'*%0aJumlah pembayaran: *'+price+'*%0a%0aSaya juga sudah menyiapkan foto/scan bukti pembayaran.%0aTerima kasih atas bantuannya.%0aSaya akan segera mengirimkan bukti pembayaran setelah mendapat informasi dari Anda.';
    sendWhatsapp(whatsapp_order, message);
}