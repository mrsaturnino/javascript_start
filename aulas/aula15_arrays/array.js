let num = [5, 6, 2, 3]
num.sort()
/*
for (let nums = 0 ; nums < num.length ; nums++) {
    console.log(`A posição ${nums} do vetor é igual a ${num[nums]}`)
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} do vetor é igual a ${num[pos]}`)
}