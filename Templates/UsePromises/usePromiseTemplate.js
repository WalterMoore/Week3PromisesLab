function mapAsync(iterator, obj, context) {
	var arr = obj.map(iterator);
	//^Jeff's one line above does same as the 5 lines below
	//var arr = [];
	//var n = obj.length;
	//for (var i = 0; i < n; i++){
	//	var collect = iterator.call(context,obj[i],i,obj);
	//	arr.push(collect);
//}
	return Promise.all(arr);
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
function mapAsyncWithOrder(iterator,array,context,descending) {
	var initialValue = Promise.resolve([]);
	if (!Array.isArray(array)){
		return initialValue;
	}
	iterator = iterator.bind(context);
	var inOrder = function(prevValue,nextValue,nextIndex,array){
		return prevValue.then(function(items){
			return iterator(nextValue,nextIndex,array).then(function(moreItems){
				return items.concat(moreItems);
			});
		});
	}
	if (descending){
		return array.reduceRight(inOrder,initialValue);
	}
	return array.reduce(inOrder,initialValue);
}


function mapAsyncInOrder(iterator, array, context) {
	return mapAsyncWithOrder(iterator,array,context,false);
	/*var arr = [];
	var n = array.length;
	for (var i = 0; i < n; i++){
		var collect = iterator.call(context,array[i],i,array);
		arr.push(collect);
	}
	return Promise.all(arr);*/
};



/*function mapAsyncInDescendingOrder(iterator, array, context) {
	var arr = [];
	var n = array.length-1;
	for (var i = n; i > -1; i--){
		var collect = iterator.call(context,array[i],i,array);

		arr.push(collect);
		//arr.reduceRight();
	}
	return Promise.all(arr);
};*/

function mapAsyncInDescendingOrder(iterator, array, context) {
	return mapAsyncWithOrder(iterator,array,context,true);

};