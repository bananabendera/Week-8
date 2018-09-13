module.exports = function(db) {
        db.collection('products').update({"id": "3"}, {$set:{"name": "Multigrain Bread"}})
}