import React from 'react';
import styled from "styled-components";
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { CountItem } from './CountItem';
import { Toppings } from './Toppings';
import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 120;
`;

const Modal = styled.div`
    background-color: white;
    width: 600px;
    height: 600px;
`;

const Content = styled.div`
    min-height: calc(100% - 200px);
    padding: 20px 37px 43px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ModalProduct = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: Pacifico, cursive;
    font-size: 30px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();
    const toppings = useToppings(openItem);

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
    };

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <ModalProduct>
                        <div>{openItem.name}</div>
                        <div>{formatCurrency(openItem.price)}</div>
                    </ModalProduct>
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    <TotalPriceItem>
                        <span>????????:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout onClick={addToOrder}>????????????????</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    );
};