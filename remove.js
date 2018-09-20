module.exports = function(db) {
        db.collection('products').remove({"id": 1})
        console.log("REMOVE DONE")
}