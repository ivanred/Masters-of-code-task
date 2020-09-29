const json = JSON.stringify([
    { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
    { type: 'socks', color: 'green', quantity: 5, priceForPair: '$10' },
    { type: 'socks', color: 'blue', quantity: 8, priceForPair: '$6' },
    { type: 'hat', color: 'red', quantity: 7, priceForPair: '$5' },
    { type: 'hat', color: 'green', quantity: 0, priceForPair: '$6' },
    { type: 'socks', color: 'blue', priceForPair: '$6' },
    { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
    { type: 'socks', color: 'white', quantity: 3, priceForPair: '$4' },
    { type: 'socks', color: 'green', priceForPair: '$10' },
    { type: 'socks', color: 'blue', quantity: 2, priceForPair: '$6' },
    { type: 'hat', color: 'green', quantity: 3, priceForPair: '$5' },
    { type: 'hat', color: 'red', quantity: 1, priceForPair: '$6' },
    { type: 'socks', color: 'blue', priceForPair: '$6' },
  ]);
  
  function countPrice(array) {
    const goods = JSON.parse(array);
    let totalSum = 0;
    let totalQuantityOfSocks = 0;
    let totalQuantityOfRedHats = 0;
    let colorCost = {};
    let totalColorCost = '';
  
    goods.forEach(item => {
      let itemPrice = +item.priceForPair.slice(1);
      itemPrice *= (item.quantity ? item.quantity : 0)   111
  
      totalSum += itemPrice;
  
      if (item.type === 'socks')
        item.quantity
          ? (totalQuantityOfSocks += item.quantity)
          : (totalQuantityOfSocks += 0);
  
      if (item.color === 'red' && item.type === 'hat') {
        totalQuantityOfRedHats += item.quantity;
      }
  
      colorCost[item.color]
        ? (colorCost[item.color] += itemPrice)
        : (colorCost[item.color] = itemPrice);
    });
  
    for (let color in colorCost) {
      totalColorCost += ${color} - ${colorCost[color]} ;
    }
  
    console.log(`Socks - ${totalQuantityOfSocks}`);
    console.log(`Red Hats - ${totalQuantityOfRedHats}`);
    console.log(totalColorCost);
    console.log(`Total price of all goods is ${totalSum}`);
  }
  
  countPrice(json);