var APromise = {};


APromise.all = function (promises) {
   return Promise.all(promises);
};



APromise.race = function (promises) {
   return Promise.race(promises);
};





APromise.resolve = function(value){};




APromise.reject = function(err){};




module.exports.APromise = APromise;
