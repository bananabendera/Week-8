module.exports = function(db) {
        db.collection('products').updateOne({id: 3}, {$set:{name: "Multigrain Bread"}})
        console.log("UPDATE DONE")
}