module.exports = function(db) {
        db.collection('products').find().toArray(function(err, result){
            if (err) throw err;
            console.log(result);
        }
        );
}