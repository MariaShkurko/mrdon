import { useState } from "react";

const getToppings = toppings => {
    if (!toppings) return null;
    
    return toppings.map(item => ({
        name: item,
        checked: false
    }))
}

export function useToppings(openItem) {
    const [toppings, setTopping] = useState(getToppings(openItem.toppings));

    const checkTopping = index => {
        setTopping(toppings.map((item, i) => {
            const newItem = {...item};

            if (i === index) {
                newItem.checked = !newItem.checked;
            }

            return newItem;
        }));
    }

    return { toppings, checkTopping };
}