var itemGraph = [
	{
		name : 'base',
		value : 0.564
	},
	{
		name : 'grid',
		value : 0.533
	},
	{
		name : 'buttons',
		value : 0.271
	},
	{
		name : 'forms',
		value : 0.353
	},
	{
		name : 'tables',
		value : 0.148
	},
	{
		name : 'menus',
		value : 0.268
	},
	{
		name : 'messages',
		value : 0.184
	}
];

var totalSize = function () {
	var total = 0;
	for (var i = 0; i < itemGraph.length; i++) {
		total = total += itemGraph[i].value
	}
	return total;
};

document.querySelector('.graph .total').innerHTML = totalSize().toFixed(2) + 'kb';

for (i = 0; i < itemGraph.length; i++) {

	var setItemSize = function (item, itemSize) {

		var el = document.querySelector('.graph .' + item),
			elPercentage = function () {
				return itemSize / totalSize() * 100;
			};

		el.style.width = elPercentage() + '%';
		var text = document.createElement('p');
		text.innerHTML = itemGraph[i].name.toUpperCase() + '<br>' + itemSize.toFixed(2) + 'kb';
		el.appendChild(text)
	};

	setItemSize(itemGraph[i].name, itemGraph[i].value);
};



