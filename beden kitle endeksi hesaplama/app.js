/*Vücut ağırlığının boy uzunluğunun karesine bölünmesiyle hesaplanır.
18.5 kg altındaki sonuçlar ideal kilonun altında
18.5-24.9 arası ideal kilo
25-29.9 ideal kilo üstü
30 kg üstü obez
40 kg üzeri morbid obez 
*/

let weight = Number(prompt("Lütfen kilonuzu giriniz: "));
let height = Number(prompt("Lütfen boy ölçünüzü giriniz: "));
let sum = weight/(height*2);

if (sum<18.5) {
  console.log("İdeal kilonun altındasınız --> " + sum);
}
else if (sum>=18.5 && sum<=24.9) {
  console.log("İdeal kilodasınız --> " + sum);
}
else if (sum>=25 && sum<=29.9) {
  console.log("İdeal kilonun üstündesiniz --> " + sum);
}
else if (sum>=30 && sum<=39.9) {
  console.log("Obezsiniz " + sum);
}
else if (sum>=40) {
  console.log("Sağlık kurumuna müracat ediniz " + sum);
}
