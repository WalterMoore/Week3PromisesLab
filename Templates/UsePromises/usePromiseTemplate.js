function mapAsync(iterator, obj, context) {
	var arr = [];
	var n = obj.length;
	for (var i = 0; i < n; i++){
		var collect = iterator.call(context,obj[i],i,obj);
		arr.push(collect);
	}
	return arr;
};
//------------------------
		/*map : function(list, iterator) {
			var arr = [];
			var n = list.length;
			for (var i = 0; i < n; i++){
            iterator(list[i]);
			arr.push(iterator(list[i]));
			//--the below also works instead of the one line above:
			//var temp = iterator(list[i]);
			//	arr.push(temp);
			}
			return arr;

		},*/
//------------------------



function mapAsyncInOrder(iterator, array, context) {
	
};



function mapAsyncInDescendingOrder(iterator, array, context) {
	
};