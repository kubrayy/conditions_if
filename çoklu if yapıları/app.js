/*
kullanıcıdan ad, tckn istenecek.
ad boş geçilemez
tckn 11 karakterden oluşmalı
*/

let ad = prompt("ismiizi giriniz: ");
let tckn = prompt("tckn giriniz: ")
check(ad,tckn);

function check(ad, tckn) {
  if (ad !=="") {
    if(tckn.length == 11) {
      console.log("isim ve tckn başarıyla girildi");
    }else {
      console.log("tckn 11 karakter olmalıdır");
    }
  }else {
    console.log("lütfen isim alanını boş bırakmayın!");
  }
}

