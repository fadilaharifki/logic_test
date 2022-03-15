// A man needs to cross a river in a canoe. With him, he has a bag of grain, a chicken,
// and a fox. He can only carry one of the three at a time. If he leaves the grain and the
// chicken, the chicken will eat the grain. If he takes the grain, the fox will eat the chicken.
// How does he successfully cross the river with his load?

function logic(param1, param2) {
    if (param1 === "fox" && param2 === "chicken") {
        return false + ', because the fox will eat the chicken'
    } else if (param1 === "chicken" && param2 === "grain") {
        return false + ', because the chicken will eat the grain'
    } else if (param1 === "fox" && param2 === "grain") {
        return true + ', because the fox not eat the grain and man can successfully cross the river'
    }
}

console.log(logic('fox', 'chicken'));
console.log(logic('chicken', 'grain'));
console.log(logic('fox', 'grain'));