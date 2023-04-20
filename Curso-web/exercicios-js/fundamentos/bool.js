let teste = true

console.log("verdadeiros")
console.log(!!"texto")
console.log(!!1)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!! (teste = true))

console.log("falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!! (teste = true))

console.log("isso aqui e doidera")
console.log(!!('' || null || 0 || ' '))
console.log("sem o '!!' ele escreve o primeiro que fo verdadeiro tipo assim:")
console.log('' || null || 0 || 'esse')
console.log('eita' || null || 0 || 'esse')

let nome = ""
console.log(nome ||"desconhecido")
nome = "dede"
console.log(nome ||"desconhecido")