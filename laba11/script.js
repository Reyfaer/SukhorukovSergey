let input = document.querySelector("input[rel=phone]");

input.oninput = function() {
    let dig = this.value.replace(/[\D]/g, "");
    this.value = "+";
    if(dig.substr(0,1)!=7){
        this.value+="7";
    }
    else this.value+=dig.substr(0,1);
    if(dig.length>1){
    this.value += "-("+dig.substr(1,3);
    }
    if(dig.length>4){
    this.value += ")-"+dig.substr(4,3);
    }
    if(dig.length>7){
    this.value += "-"+dig.substr(7,2);
    }
    if(dig.length>9){
    this.value += "-"+dig.substr(9,2);
    }
}