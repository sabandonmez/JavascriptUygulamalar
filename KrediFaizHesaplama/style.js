let krediTutari = document.querySelector(".paraInput");
let vadeTuru=document.getElementById("vade");
let krediTuru=document.getElementById("type");
let hesaplaButton = document.querySelector(".hesapla-btn");
let sonucElement=document.querySelector("#sonuc");
let detayElement=document.querySelector("#detay");

let krediTuruFaiz , vadeTuruFaiz , OdenecekToplamTutar;



function Hesapla() {
  switch (krediTuru.value) {
        case "ihityac":
        krediTuruFaiz=1.2;
        break;
        case "konut":
        krediTuruFaiz=1.1;
        break;
        case "tasit":
        krediTuruFaiz=1.7;
        break;
        case "kobi":
        krediTuruFaiz=1.5;
        break;
    default:
        krediTuruFaiz=1.0;
        break;
  }  
  switch (vadeTuru.value) {
        case "vade12":
        vadeTuruFaiz=1.1;
        break;
        case "vade24":
        vadeTuruFaiz=1.2;
        break;
        case "vade36":
        vadeTuruFaiz=1.7;
        break;
        case "vade48":
        vadeTuruFaiz=1.9;
        break;
    default:
        vadeTuruFaiz=1.0;
        break;
  }   
  OdenecekToplamTutar=(krediTutari.value)*vadeTuruFaiz*krediTuruFaiz;
  
};

hesaplaButton.addEventListener("click",function () {
Hesapla();
sonucElement.textContent="Geri Ödeme Toplam : "+OdenecekToplamTutar.toFixed(1) + " Tl";

});
