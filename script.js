function appendvalue(nilai) {
    document.getElementById('Display').vaule +=nilai;
    console.log("nilai :"+ nilai);
}
function clearhDisplay (){
    document.getElementById('Display').vaule ="";
    console.log("clear Display")
}
function calculate (){
    const Display = document.getElementById('Display');

    try {
        Display.vaule =eval(Display.vaule);
        console.log ("hasil:" + Display.vaule);
    } catch {
        Display.vaule ='error';
        console.log("error")
    }

}function lagsunghitungakarpangkat() {
    const nilai = document.getElementById('Display');
    try {
        const bilangan = parseFloat(nilai.vaule);
        if (bilangan < 0) throw new Error ("tidak dapat menghitung" + bilangan);
        nilai.vaule = Math.sqrt(bilangan);
        console.log("akar kuadrat :" + nilai.vaule)

    } catch {
        nilai.vaule ="error"
        console.log(nilai.vaule)
    }
}
function langsunghitungpersen() {
    const nilai = document.getElementById('Display');
    try {
        const bilangan = parsenFloat(nilai.vaule);
        nilai.vaule = bilangan / 100;
        console.log("persen:" + nilai.vaule);
    }catch {
        nilai.vaule = "error"
        console.log(nilai.vaule)
    }
}
