export const totalPriceItems = order => {
    const countToppings = order.topping && order.topping.filter(item => item.checked).length;
    const priceToppings = order.price * 0.1;    
    return (order.price + priceToppings * countToppings) * order.count;
};

export const formatCurrency = value => value.toLocaleString('ru-RU',
    { style: 'currency', currency: 'RUB'});