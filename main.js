//1
// let K = Number(prompt("K"))
// let N = Number(prompt("N"))
// for (let mean = 0; mean < N; mean++ ){
//     console.log(K)
// }

//2 
// let sum = 0
// let b = Number(prompt("b"))
// for (let a = Number(prompt("a")); a < b; a++) {
//     console.log(a)
//     sum+=1
// }
// console.log('Количество чисел:' + sum)

//3
// let sum = 0
// let a = Number(prompt("a"))
// for (let b = Number(prompt("b"))-1; a < b; b--) {
//     console.log(b)
//     sum+=1
// }
// console.log('Количество чисел:' + sum)

//4
// let c = Number(prompt("Цена за 1 кг: "))
// for (let a = 1; a <= 10; a++){
//     console.log(`Стоимость за ${a} кг равна ${c*a}`)
// }


//5
//let с=Number(prompt("Цена за 1 кг:"))
// for (let a=0.1; a<=1 ; a+=0.1 ){
//     console.log(`Стоимость за ${a} кг ${c*a}`)
// }


//6
// let c = Number(prompt("Цена за 1 кг:"))
// for (let a = 1; a<=2 ; a+=0.2 ){
//     console.log(`Стоимость за ${a} кг равна ${c*a}`)
// }

//7
// let sum = 0
// let b = Number(prompt("B "))
// for (let a = Number(prompt("A ")); a < b; a++) {
//     console.log(a)
//     sum = sum + a
// }
// console.log(sum)

//8
// let multi = 1
// let b = Number(prompt("Введите Б"))
// for (let a = Number(prompt("Введите A")); a<b; a++){
//     multi= multi*a
// }
// console.log(multi)

//9
// let sum = 0
// let b = Number(prompt("Введите число B: "))
// for (let a = Number(prompt("Введите число A: ")); a <= b; a++) {
//     console.log(Квадрат числа ${a} равен ${a**2})
//     step = a**2
//     sum = sum + step
 
// }
//console.log(Сумма квадратов равна ${sum})

//10
// let sum = 0
// let n = Number(prompt("N"))
// for (let a = 1; a<(1/n+1); a+=0.1){
//     sum=sum + a
// }
// console.log(sum)

//12
// let multi = 1
// let n = Number(prompt("N"))
// for (let a = 1.1;  a>0; a+=0.1){
//     multi=multi * a
// }
// console.log(multi)

//13
// let N = Number(prompt('N'))
// let sum = 0
// for (let a = 0; a<=10*(N-1); a++){
//     k = (1+(a/10))*(-1)**a
//     sum += k
// }
// console.log(sum)

//14
// let sum = 0
// let N = Number(prompt('N'))
// for(let a = 1; a<=N; a++){
//     sum += (2*a-1)
// }
// console.log(sum)

//15
// let step = 1
// let a = Number(prompt('a'))
// let N = Number(prompt('N'))
// for(let m = 0; m<N; m++){
//     step = a**N
// }
// console.log(step)

//16
let s = 1
let a = Number(prompt('a'))
let N = Number(prompt('N'))
for(let step = 1; step<=N; step++){
    s=a**step
    console.log(s)
}