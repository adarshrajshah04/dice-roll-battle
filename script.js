function fun1() {
    var val1 = document.getElementById("inp1").value;
    var val2 = document.getElementById("inp2").value;

    // set values
    document.getElementById("p1").innerHTML = val1;
    document.getElementById("p2").innerHTML = val2;
    document.getElementById("p1s").innerHTML=val1;
    document.getElementById("p2s").innerHTML=val2

    // hide form
    document.getElementById("box1").style.display = "none";
    // display
    document.getElementById("page2").style.display = "block";
}


var countp1 = 0;
var countp2 = 0;

function roll() {
    var img1 = document.getElementById("img1");
    var img1r = Math.ceil(Math.random() * 6);
    img1.setAttribute("src", img1r + ".png");


    var img2 = document.getElementById("img2");
    var img2r = Math.ceil(Math.random() * 6);
    img2.setAttribute("src", img2r + ".png");

    var name1 = document.getElementById("inp1").value;
    var name2 = document.getElementById("inp2").value;


    
    if (img1r > img2r) {
        countp1++;
        document.getElementById("win").innerHTML=name1+" "+"win"
    } else if (img2r > img1r) {
        countp2++;
        document.getElementById("win").innerHTML=name2+" "+"win"
    }else if(img1r === img2r){
        document.getElementById("win").innerHTML="Draw match"
    }
    
    document.getElementById("p1s").innerHTML = name1 + "  " + countp1;
    document.getElementById("p2s").innerHTML = name2 + "  " + countp2;
}