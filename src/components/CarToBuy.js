import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaypalButton from './Paypal/PaypalButton';


function CarToBuy({ setCarBuy ,carBuy, totalPrice, setTotalPrice }) {
  const [sumaPrice, setSumaPrice] = useState(0)
const urlPay = 'http://localhost:4000/create-checkout-session'

// const totalPrice = carBuy.reduce((product, index) => {
//   return product + index.value
//       }, 0)

const allDescriptions = carBuy.map(product => product.description)
  useEffect(() => {
    if (!carBuy) return; // Evitar que se ejecute si carBuy es null

    const totalProducts = carBuy.map(product => {
      return product;
    });

  
    const totalPrice = carBuy.reduce((product, index) => {
return product + index.value
    }, 0)
setSumaPrice(totalPrice)
    setTotalPrice({ products: totalProducts, pay: totalPrice });
  }, [carBuy]);

  const handlePurchase = async () => {
    try {
      const response = await axios.post(urlPay, {
        pay: totalPrice.pay,
        products: totalPrice.products
      });
      console.log('Compra exitosa:', response.data);
      // Realiza cualquier acción adicional después de una compra exitosa
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      // Maneja el error de manera adecuada (por ejemplo, muestra un mensaje al usuario)
    }
  };

  const deleteItem = (itemThrash) => {
    const filterCar =carBuy.filter((item) =>  { return item.name !== itemThrash} ) 
    setCarBuy(filterCar)
  }


  return (
    <div className='car-buy-container'>
      <h1>Carbuy</h1>
      {
        carBuy.map((buy, index) => {
          return (
            <div key={index}>
              <h2>Product: {buy.name} Price: {buy.value} <button onClick={() => deleteItem(buy.name)}>x</button></h2>
            </div>
          );
        })
      }
      <h2>Total Price: ${sumaPrice}<button className='btn-buy' onClick={handlePurchase}>Do Buy</button> </h2>
      <PaypalButton totalValue={totalPrice} invoice={allDescriptions} />
    </div>
  );
}

export default CarToBuy;