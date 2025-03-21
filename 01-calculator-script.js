
const addition = document.querySelector("#addition");
addition.addEventListener('click', ()=>{
    const numOne = +document.querySelector("#inputOne").value;
    const numTwo = +document.querySelector("#inputTwo").value;
    confirm("Do you want to see the result of addition?");
    alert(`Congratulations !!! You're result of addition is ${numOne+numTwo}`);
});

const subtraction = document.querySelector("#subtraction");
subtraction.addEventListener('click', ()=>{
    const numSubOne = +document.querySelector("#inputOne").value;
    const numSubTwo = +document.querySelector("#inputTwo").value;
    confirm("Do you want to see the result of subtraction?");
    alert(`Congratulations !!! You're result of subtraction is ${numSubOne-numSubTwo}`);
});

const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener('click', ()=>{
    const numSubOne = +document.querySelector("#inputOne").value;
    const numSubTwo = +document.querySelector("#inputTwo").value;
    confirm("Do you want to see the result of multiplication?");
    alert(`Congratulations !!! You're result of multiplication is ${numSubOne*numSubTwo}`);
});

const division = document.querySelector("#division");
division.addEventListener('click', ()=>{
    const numSubOne = +document.querySelector("#inputOne").value;
    const numSubTwo = +document.querySelector("#inputTwo").value;
    confirm("Do you want to see the result of division?");
    alert(`Congratulations !!! You're result of division is ${numSubOne/numSubTwo}`);
});