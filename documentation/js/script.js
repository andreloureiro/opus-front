(function(document, undefined){
  'use strict';
  
  var itemGraph = [{
    name: 'base',
    value: 0.94
  }, {
    name: 'grid',
    value: 1.42
  }, {
    name: 'buttons',
    value: 1.14
  }, {
    name: 'forms',
    value: 1.26
  }, {
    name: 'tables',
    value: 1.06
  }, {
    name: 'menus',
    value: 1.15
  }, {
    name: 'messages',
    value: 1.02
  }];

  var package = 2.60;

  var totalSize = function() {
    var total = 0;
    for (var i = 0; i < itemGraph.length; i++) {
      total = total += itemGraph[i].value
    }
    return total;
  };

  document.querySelector('.graph .total').innerHTML = package.toFixed(2) + 'kb';

  for (i = 0; i < itemGraph.length; i++) {

    var setItemSize = function(item, itemSize) {

      var el = document.querySelector('.graph .' + item),
        elPercentage = function() {
          return itemSize / totalSize() * 100;
        };

      el.style.width = elPercentage() + '%';
      var text = document.createElement('p');
      text.innerHTML = itemGraph[i].name.toUpperCase() + '<br>' + itemSize.toFixed(2) + 'kb';
      el.appendChild(text)
    };

    setItemSize(itemGraph[i].name, itemGraph[i].value);
  };
})(document)