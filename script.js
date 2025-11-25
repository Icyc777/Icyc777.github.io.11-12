let slovo1 = [
  {ua:"яблуко", angl:"apple"},
  {ua:"курка", angl:"chicken"},
  {ua:"огірок", angl:"cucumber"},
  {ua:"молоко", angl:"milk"},
  {ua:"молоток", angl:"hammer"},
  {ua:"ігра", angl:"game"},
  {ua:"вода", angl:"water"},
  {ua:"зелений", angl:"green"},
  {ua:"книга", angl:"book"},
  {ua:"щур", angl:"rat"}
];
let slovo2 = [
  {ua:"конституція", angl:"constitution"},
  {ua:"навчання", angl:"training"},
  {ua:"катаклізм", angl:"cataclysm"},
  {ua:"дедукція", angl:"deduction"},
  {ua:"вбивство", angl:"murder"},
  {ua:"еволюція", angl:"evolution"},
  {ua:"навушники", angl:"headphones"},
  {ua:"відродження", angl:"revives"},
  {ua:"автобус", angl:"bus"},
  {ua:"перелом", angl:"fracture"}
];
let slovo3 = [
  {ua:"середовище проживання", angl:"habitat"},
  {ua:"винищити", angl:"exterminate"},
  {ua:"боєприпас", angl:"ammunition"},
  {ua:"розробка", angl:"development"},
  {ua:"фобія", angl:"phobia"},
  {ua:"кондиціонер", angl:"air conditioner"},
  {ua:"телефон", angl:"phone"},
  {ua:"визволення", angl:"release"},
  {ua:"потепління", angl:"warming"},
  {ua:"зарядка", angl:"exercise"}
];
slovo1 = slovo1.sort(() => Math.random() - 0.5);
slovo2 = slovo2.sort(() => Math.random() - 0.5);
slovo3 = slovo3.sort(() => Math.random() - 0.5);
let step = 0;
let t = 0;
let f = 0;
document.getElementById("check").disabled = true;
document.getElementById("slovo").disabled = true;
document.getElementById("trues").disabled = true;
document.getElementById("falses").disabled = true;
function start(){
    if(!document.getElementById('easy').checked 
    && !document.getElementById('medium').checked 
    && !document.getElementById('Hard').checked){
        alert('Ви не обрали уровень')
    }
    else if(document.getElementById('easy').checked){
        document.getElementById("start").disabled = true;
        document.getElementById("check").disabled = false;
        loadslovo1();
        document.getElementById("medium").disabled = true;
        document.getElementById("Hard").disabled = true;
    }
    else if(document.getElementById('medium').checked){
        document.getElementById("start").disabled = true;
        document.getElementById("check").disabled = false;
        loadslovo2();
        document.getElementById("easy").disabled = true;
        document.getElementById("Hard").disabled = true;
    }
    else if(document.getElementById('Hard').checked){
        document.getElementById("start").disabled = true;
        document.getElementById("check").disabled = false;
        loadslovo3();
        document.getElementById("medium").disabled = true;
        document.getElementById("easy").disabled = true;
    }
}
function loadslovo1() {
    document.getElementById("slovo").value =slovo1[step].angl;
}
function loadslovo2() {
    document.getElementById("slovo").value =slovo2[step].angl;
}
function loadslovo3() {
    document.getElementById("slovo").value =slovo3[step].angl;
}
function check(){

    if(document.getElementById("pereclad").value == ""){
        alert("Ви не вели слово")
    }
    else{
        let input = document.getElementById("pereclad").value;
        if(document.getElementById('easy').checked){       
            if(input == slovo1[step].ua){
                t++;
                document.getElementById("trues").value = t;
            }
            else{
                f++;
                document.getElementById("falses").value = f;
            }
            step++;    
            if(step >= slovo1.length){
                showResult();
            } else {
                loadslovo1();
            }
        }
        else if(document.getElementById('medium').checked){
                if(input == slovo2[step].ua){
                    t++;
                    document.getElementById("trues").value = t;
                }
                else{
                    f++;
                    document.getElementById("falses").value = f;
                }
                step++;    
                if(step >= slovo2.length){
                    showResult();
                } else {
                    loadslovo2();
                }
        }
        else if(document.getElementById('Hard').checked){
            if(input == slovo3[step].ua){
                t++;
                document.getElementById("trues").value = t;
            }
            else{
                f++;
                document.getElementById("falses").value = f;
            }
            step++;    
            if(step >= slovo3.length){
                showResult();
            } else {
                loadslovo3();
            }
        }
 
    }

}
function showResult(){
    if(document.getElementById('easy').checked){
        let percent = (t / slovo1.length) * 100;
        if(percent >= 90) {alert("Відмінно!");}
        else if(percent >= 70)  {alert("Добре!");}
        else if(percent >= 50)  {alert("Середній рівень.");}
        else { 
            alert("Потрібна практика.");
        }
    }
    if(document.getElementById('medium').checked){
        let percent = (t / slovo2.length) * 100;
        if(percent >= 90) {alert("Відмінно!");}
        else if(percent >= 70)  {alert("Добре!");}
        else if(percent >= 50)  {alert("Середній рівень.");}
        else { 
            alert("Потрібна практика.");
        }
    }
    if(document.getElementById('Hard').checked){
        let percent = (t / slovo3.length) * 100;
        if(percent >= 90) {alert("Відмінно!");}
        else if(percent >= 70)  {alert("Добре!");}
        else if(percent >= 50)  {alert("Середній рівень.");}
        else { 
            alert("Потрібна практика.");
        }
    }
}