let layar=document.querySelector("#layar"), tombol=document.querySelector(".container-tombol");
    tombol.addEventListener("click", function(e) {
    let tombolClick=e.target, nilaiTombol=tombolClick.innerText;
    layar.value="C"==nilaiTombol?"": "<"==nilaiTombol?layar.value.slice(0, -1):"="==nilaiTombol?eval(layar.value):layar.value+nilaiTombol;
}
);
    