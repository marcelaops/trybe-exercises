import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  /* Passo 1 olhei o gabarito p a resolução desses passos */
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  /* Passo 8 - Remo um item da lista */
  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    orderState.splice(indexPresentInList, 1);
    setOrderList({ ...orderList,
      [itemType]: orderState });
  };

  /* Passo 9 - atualização do produto na lista */
  const incrementItemInList = (orderState, indexPresentInList, newItem) => {
    orderState.splice(indexPresentInList, 1, newItem);
    setOrderList({ ...orderList, [newItem.itemType]: orderState });
  };

  /* Passo 7 - incrementa o valor de um produto */
  const manageItemsInList = (newItem) => {
    const noQuantity = 0;
    const orderState = orderList[newItem.itemType];
    const indexPresentInList = orderState.findIndex((e) => e.id === newItem.id);
    if (Number(newItem.quantity) === noQuantity) {
      return removeItemFromList(orderState, indexPresentInList, newItem.itemType);
    }
    incrementItemInList(orderState, indexPresentInList, newItem);
    // updateValueItemInList(orderState, indexPresentInList, newItem);
  };

  /* Passo 6 - apebas add um novo item */
  const addItemToList = (newItem) => {
    setOrderList({ ...orderList,
      [newItem.itemType]: [...orderList[newItem.itemType], newItem] });
  };

  /* Passo 2 */
  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    /* Passo 3 */
    const { value } = target;

    /* Passo 4 */
    const isPresentInList = orderList[itemType].some((item) => item.id === itemName);
    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    /* Passo 5 - atualiza um produto já existente na lista  e add um novo produto */
    if (!isPresentInList) return addItemToList(newItem);

    manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
