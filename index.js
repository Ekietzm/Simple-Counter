let total = 0;

document.getElementById("add").onclick = function(){
    total+=1;
    document.getElementById("counter").innerText = total;
};

document.getElementById("sub").onclick = function(){
    total-=1;
    document.getElementById("counter").innerText = total;
};

document.getElementById("reset").onclick = function(){
    total=0;
    document.getElementById("counter").innerText = total;
};