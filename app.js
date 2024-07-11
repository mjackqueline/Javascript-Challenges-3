function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings +=  "*";
        if (i !== Math.floor(rating) - 1) {
            ratings += " ";
        }        
    }
    if (!Number.isInteger(rating)) {
        ratings = ratings + " .";
    }
    return ratings;
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));


function sortLowToHigh(numbers) {
    return numbers.sort((a,b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))
console.log(sortLowToHigh([5, 10, 0, -5]))
console.log(sortLowToHigh([3, 2, 1, 0]))


function sortHightoLow(prices) {
    return prices.sort((a,b) => b.price - a.price)
}

console.log(sortHightoLow([
    {id:1, price:50},
    {id:2, price:30},
    {id:3, price:60},
    {id:4, price:10},
]))
console.log(sortHightoLow([
    {id:1, price:50},
    {id:2, price:40},
    {id:3, price:60},
    {id:4, price:100},
]))


// async function postsByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const result = await promise.json()
    
//     const posts = result.filter(element => element.userId === userId)
    
//     console.log(posts)
// }

// postsByUser(4);

async function firstSixIncomplete(todo){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json()

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0,6);

    console.log(incompleteTasks);
}

firstSixIncomplete(6);


