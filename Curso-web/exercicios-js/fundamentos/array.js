const vetor = [7.6, 8.2, 1.3, 5]
console.log(vetor[0], "e", vetor[3])

vetor[11] = 111
console.log(vetor)
console.log(vetor.length)

vetor.push({id: 3}, false, null, 'teste')
console.log(vetor)

console.log(vetor.pop())
delete vetor[0]
console.log(vetor)