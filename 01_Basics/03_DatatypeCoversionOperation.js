let score = "33";
let gameID = 23122;
let likes = "100k";

//type conversion in Number and you can also do for String etc.
let modifiedScore = Number(score);
let modifiedLikes = Number(likes);
// ------------------------------------------------------------
console.log(modifiedScore);
console.log(typeof (modifiedScore)); //string to number
// ------------------------------------------------------------
console.log(gameID);
console.log(typeof (String(gameID)));
// ------------------------------------------------------------
console.log(likes);
console.log(typeof (modifiedLikes)); //This can't be converted because likes is mix-up of int and string so: NaN
// ----------------------------------------------------------------
// And same kind of investigation you can do learn more and more...