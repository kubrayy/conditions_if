/*
Dizel : 23.38
Benzin : 21.06
LPG : 10.56

müşteriden alınacak bilgiler:
1-yakıt tipi
2-yüklenecek yakıt litresi
*/

let dizel = 23.38, benzin = 21.06, lpg=10.56;
const newLine = "\r\n";

const yakitMetni = "1-Dizel" + newLine
+ "2-Benzin" + newLine
+ "3-LPG" + newLine
+"Yakıt türünü seçiniz";

let yakitTipi = prompt(yakitMetni);
if (yakitTipi=="1" || yakitTipi =="2" || yakitTipi=="3") {
  let yakitLitresi = Number(prompt("Yakıt litresini giriniz: "));
let bakiye = Number(prompt("bakiyenizi giriniz: "));

if (yakitTipi == "1") {
  let odenecekTutar = dizel*yakitLitresi;
  if (odenecekTutar<bakiye) {
    //bakiye yeterli
    alert("yakıt alma işlemi başarılı")
  }
  else {
    //bakiye yeterli değil
    alert("bakiye yeterli değil" + newLine
    + "odenecek tutar:" + odenecekTutar + newLine
    + "bakiye: " + bakiye + newLine
    + "eksik tutar: " + (odenecekTutar-bakiye))
  }
}else if (yakitTipi == "2") {
  let odenecekTutar = benzin*yakitLitresi;
  if (odenecekTutar<bakiye) {
    alert("yakıt alma işlemi başarılı")
  }
  else {
    alert("bakiye yeterli değil" + newLine
    + "odenecek tutar:" + odenecekTutar + newLine
    + "bakiye:" + bakiye + newLine
    +"eksik tutar: " + (odenecekTutar-bakiye))
  }
}else if (yakitTipi == "3") {
  let odenecekTutar = lpg*yakitLitresi;
  if (odenecekTutar<bakiye) {
    alert("yakıt alma işlemi başarılı")
  }
  else {
    alert("bakiye yeterli değil" + newLine
    + "odenecek tutar:" + odenecekTutar + newLine
    + "bakiye:" + bakiye + newLine
    +"eksik tutar: " + (odenecekTutar-bakiye))
  }
}
}
else{
  alert("lütfen geçerli bir yakıt türü giriniz")
}