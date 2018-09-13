module.exports = function (db) {
        db.collection('products').insertMany([{
            id: 1,
            name: "Milk",
            price: "2.50",
            type: "Drink",
            description: "The finest milk from maleny"
        }, {
            id: 2,
            name: "Chocolate Milk",
            price: "3.00",
            type: "Drink",
            description: "The finest milk from maleny, now chocolate"
        }, {
            id: 3,
            name: "Bread",
            price: "1.50",
            type: "Food",
            description: "Staple item in every pantry"
        }])
}