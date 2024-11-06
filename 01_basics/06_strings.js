const name = "manail"
const repoCount = 50
console.log(name + repoCount + "value");// not a good syntax nowadays
// use backtext (string interpulation)
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mana-il')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('l'));
 const newString = gameName.substring(0,4)
 console.log(newString);
 const anotherString = gameName.slice(-4,4)
 console.log(anotherString);
 const newStringone = "    hitesh    "
 console.log(newStringone);
 
 console.log(newStringone.trim());
 const url = "https://hitesh,com/hitesh%20choudhary"
 console.log(url.replace('%20','-' ))
 

console.log(url.includes('izzu'))
console.log(gameName.split('-'))




