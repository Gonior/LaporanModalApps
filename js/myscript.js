const _ = (id) => {
    return document.getElementById(id);
}

const __= (className) => {
    return document.getElementsByClassName(className)
}

function validasiPIN(a) {
    var pin = _(a).value.trim();
        if (pin == "") {
            Swal.fire({
                icon: "error",
                title: "Ooppss",
                text: "PIN tidak boleh Kosong",
            });
            return false
        }
    return true    
}
const formatRupiah = (angka, prefix) => {
    let str
    if (typeof(angka) === "number" || typeof(angka) === 'float') {
        str = angka.toString()
    } else str = angka
    let number_string = str.replace(/[^,\d]/g, '').toString()
    let split = number_string.split(',')
	let sisa = split[0].length % 3
	let rupiah = split[0].substr(0, sisa)
	let ribuan = split[0].substr(sisa).match(/\d{3}/gi)
	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == undefined ? rupiah : (rupiah ? 'Rp ' + rupiah : '');
}
//JQUERY
$(document).ready(function(){
    $("#btnAdmin").click(function() {
        if (validasiPIN($('pinAdmin'))) {
            $('#adminForm').submit();
        }
    })
    $('#adminForm').on('keypress' , function(e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            if (validasiPIN('pinAdmin')) {
                $('#adminForm').submit();
            }
        }
    })
    $("#btnKasir").click(function() {
        if (validasiPIN('pinKasir')) {
            $('#kasirForm').submit();
        }
    })
    $('#kasirForm').on('keypress' , function(e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            if (validasiPIN('pinKasir')) {
                $('#kasirForm').submit();
            }
        }
    })
    $("#btnTO").click(function() {
        if (validasiPIN('pinWaiter')) {
            $('#TOForm').submit();
        }
    })
})