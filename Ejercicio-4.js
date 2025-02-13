function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const numero1 = 18092859; 
const numero2 = 15890992; 

const mayor = encontrarMayor(numero1, numero2);
console.log("El número mayor es: " + mayor);