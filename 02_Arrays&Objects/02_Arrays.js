const marvelHeros = ["thor", "spiderman", "ironman"];
const dcHeros = ["superman", "flash" , "batman"];
const boolleanValue = [true, false, true];
// marvelHeros.push(dcHeros, boolleanValue);
// console.log(marvelHeros);
// // Lets extract values from the arrays we have created
// console.log(marvelHeros[3][2]); //batman should be printed


// -----------------------------But we should use concat instead------------------------------------

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// -----------------------------But again we should use spread instead------------------------------
const all_new_heroes = [...marvelHeros, ...dcHeros,...boolleanValue];
console.log(all_new_heroes); //this will return array of all elements and are turned into individual