/*Observe a string abaixo.

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;*/

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
const minhaStringTrim = minhaString.trim()

/*b) exiba, em um console.log() a quantidade de caracteres da string, 
antes e depois da remoção dos espaços;*/

console.log(`Antes: ${minhaString.length} \nDepois: ${minhaStringTrim.length}`)

//c) Substitua os traços `________` por “sticioso”.

console.log(minhaStringTrim.replace("________","sticioso"))

