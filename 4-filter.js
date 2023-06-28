const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newWords = words.filter(word => word.length >= 6)

console.log(newWords) // [ 'elites', 'exuberant' ]
console.log(words) // [ 'elites', 'exuberant' ]