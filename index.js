// create a function to check for const object
// if statement to check for subscription and coupon = true
// if yes multiply refill by cost, then give 25% discount, then $10 discount
// else if subscription is true, give 25% discount
// else if coupon is true, give $10 discount
// return value
// log value: "Your grand total is ${finalAmount}."

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function priceTotal (customer) {
    let subtotal = customer.pricePerRefill * customer.refills

    if (customer.subscription && customer.coupon) {
        subtotal = subtotal * 0.75 - 10
    } else if (customer.subscription) {
        subtotal = subtotal * 0.75
    } else if (customer.coupon) {
        subtotal = subtotal - 10
    }

    return subtotal
}

const finalAmount = priceTotal(rocky)

console.log("Your grand total is " + finalAmount + ".")