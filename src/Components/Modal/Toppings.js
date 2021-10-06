import React from 'react';
import styled from "styled-components";

const ToppingWrap = styled.div`
    column-count: 2;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
`;

const ToppingCheckbox = styled.input`
    margin-right: 5px;
`;

export const Toppings = ({ toppings, checkTopping }) => {
    return (
        <>
            <h3>Добавки:</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox 
                            type='checkbox'
                            checked={item.checked}
                            onChange={() => checkTopping(i)}
                            />
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    )
}