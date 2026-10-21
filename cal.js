let input = [];
let Z = document.querySelector("#display h1");

let A = document.getElementById("AC");
A.addEventListener("click",function(){
    
    A.classList.add("shake");
    setTimeout(function(){
        A.classList.remove("shake");
    }, 500);
       
    input = [];
    Z.innerText = "0";//click karne per all clear ho jayega 
});


let B = document.getElementById("round_left");
B.addEventListener("click",function(){
    
    B.classList.add("shake");
    setTimeout(function(){
        B.classList.remove("shake");
    }, 500);

    input.push(B.innerText);     //click karne per number input hoga
    Z.innerText = input.join("");
});


let C = document.getElementById("round_right");
C.addEventListener("click",function(){
    
    C.classList.add("shake");
    setTimeout(function(){
        C.classList.remove("shake");
    }, 500);

    input.push(C.innerText);     //click karne per number input hoga
    Z.innerText = input.join("");
});


let D = document.getElementById("divide");
D.addEventListener("click",function(){
    
    D.classList.add("shake");
    setTimeout(function(){
        D.classList.remove("shake");
    }, 500);

    input.push(D.innerText);     //click karne per number input hoga
    Z.innerText = input.join("");
});


let E = document.getElementById("seven");
E.addEventListener("click",function(){
    
    E.classList.add("shake");
    setTimeout(function(){
        E.classList.remove("shake");
    }, 500);

    input.push(Number(E.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let F = document.getElementById("eight");
F.addEventListener("click",function(){
    
    F.classList.add("shake");
    setTimeout(function(){
        F.classList.remove("shake");
    }, 500);

    input.push(Number(F.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let G = document.getElementById("nine");
G.addEventListener("click",function(){
    
    G.classList.add("shake");
    setTimeout(function(){
        G.classList.remove("shake");
    }, 500);

    input.push(Number(G.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let H = document.getElementById("multiply");
H.addEventListener("click",function(){
    
    H.classList.add("shake");
    setTimeout(function(){
        H.classList.remove("shake");
    }, 500);

    input.push(H.innerText);     //click karne per number input hoga
    Z.innerText = input.join("");
});


let I = document.getElementById("four");
I.addEventListener("click",function(){
    
    I.classList.add("shake");
    setTimeout(function(){
        I.classList.remove("shake");
    }, 500);

    input.push(Number(I.innerText));
    Z.innerText = input.join("");     //click karne per number input hoga
});


let J = document.getElementById("five");
J.addEventListener("click",function(){
    
    J.classList.add("shake");
    setTimeout(function(){
        J.classList.remove("shake");
    }, 500);

    input.push(Number(J.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let K = document.getElementById("six");
K.addEventListener("click",function(){
    
    K.classList.add("shake");
    setTimeout(function(){
        K.classList.remove("shake");
    }, 500);

    input.push(Number(K.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let L = document.getElementById("sub");
L.addEventListener("click",function(){
    
    L.classList.add("shake");
    setTimeout(function(){
        L.classList.remove("shake");
    }, 500);

    input.push(L.innerText);     //click karne per number input hoga
    Z.innerText = input.join("");
});


let M = document.getElementById("one");
M.addEventListener("click",function(){
    
    M.classList.add("shake");
    setTimeout(function(){
        M.classList.remove("shake");
    }, 500);

    input.push(Number(M.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let N = document.getElementById("two");
N.addEventListener("click",function(){
    
    N.classList.add("shake");
    setTimeout(function(){
        N.classList.remove("shake");
    }, 500);

    input.push(Number(N.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let O = document.getElementById("three");
O.addEventListener("click",function(){
    
    O.classList.add("shake");
    setTimeout(function(){
        O.classList.remove("shake");
    }, 500);

    input.push(Number(O.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let P = document.getElementById("add");
P.addEventListener("click",function(){
    
    P.classList.add("shake");
    setTimeout(function(){
        P.classList.remove("shake");
    }, 500);

    input.push(P.innerText);     //click karne per number input hoga
    Z.innerText = input.join("");
});


let Q = document.getElementById("zero");
Q.addEventListener("click",function(){
    
    Q.classList.add("shake");
    setTimeout(function(){
        Q.classList.remove("shake");
    }, 500);

    input.push(Number(Q.innerText));     //click karne per number input hoga
    Z.innerText = input.join("");
});


let R = document.getElementById("dot");
R.addEventListener("click",function(){
    
    R.classList.add("shake");
    setTimeout(function(){
        R.classList.remove("shake");
    }, 500);

    input.push(R.innerText);     //click karne per number input hoga
    Z.innerText = input.join("");
});


let S = document.getElementById("equal");
S.addEventListener("click",function(){
    
    S.classList.add("shake");
    setTimeout(function(){
        S.classList.remove("shake");
    }, 500);

    let expression = input.join("");
    let result = eval(expression);
    Z.innerText = result; 
});


let T = document.getElementById("clear");
T.addEventListener("click",function(){
    
    T.classList.add("shake");
    setTimeout(function(){
        T.classList.remove("shake");
    }, 500);

    input.pop();
    Z.innerText = input.join("");
    
});