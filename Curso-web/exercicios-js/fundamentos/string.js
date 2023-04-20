const nome = "dedezim"

console.log(nome.charAt(4))
console.log(nome.charCodeAt(4))
console.log(nome.indexOf('m'))
console.log(nome.substring(4, 6))

console.log("Eu me chamo ".concat(nome).concat("!"))
console.log("Eu me chamo",(nome),"!")

console.log(nome.replace("e", "i"))
console.log(nome.replace(/\w/g, "i"))/*substitui tudo por i o "g" e de global*/
console.log("de. de. zim".split("."))

const nome2 = `${nome} é legal`
console.log(nome2)
console.log(`${nome} é legal`)
console.log(`1 + 1 = ${1 + 1} ${nome}`)
console.log(`Ei...${("ele está aqui").toUpperCase()}`)
const up = texto => texto.toUpperCase() + ", o tal do dedezim"
console.log(`Ei...${up("ele está aqui")}`)