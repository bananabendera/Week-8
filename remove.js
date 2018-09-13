module.exports = function(db) {
        db.collection('products').remove({"id": 1})
}