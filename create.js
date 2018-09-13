module.exports = function (db) {
        db.createCollection('products');
        console.log('added collection');
}