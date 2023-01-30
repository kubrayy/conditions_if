// let not = 65;
// if (not >50) {
//   console.log("tebrikler, notunuz: " + not);
// }

// let yas = Number(prompt("Lütfen yaşınızı giriniz: "));
// let para = Number(prompt("Lütfen bütçenizi giriniz: "));
// if (yas>18 && para >=3000) {
//   alert("Sınava girebilirsiniz");
// }else{
//   alert("Sınava katılamazsınız");
// }

//vize1 %30, vize2 %30, final %40
//geçme notu 60

let vize1 = Number(prompt("1. vize notunu giriniz: "));
let vize2 = Number(prompt("2. vize notunu giriniz: "));
let final = Number(prompt("Final notunu giriniz: "));
let average = ((0.3*(vize1+vize2) + (0.4*final)));

if (average>=60) {
  alert("Tebrikler geçtiniz --> " + average);
}else {
  alert("Kaldınız -->" + average);
}