import React, {memo } from 'react'
import {PayPalButtons} from '@paypal/react-paypal-js'

function PaypalButton({ totalValue, invoice }) {
    return (
        <PayPalButtons
            createOrder={async (data, actions) => {
                return new Promise((resolve, reject) => {
                    actions.order.create({
                        purchase_units: [
                            {
                                description: invoice.description,
                                amount: {
                                    value: totalValue.pay
                                }
                            },
                        ]
                    }).then((orderID) => {
                        resolve(orderID);
                    }).catch((error) => {
                        reject(error);
                    });
                });
            }}

            onApprove={async (data, actions) => {
                const order = await actions.order?.capture();
                console.log("order: ", order);
            }}
        />
    );
}

export default memo(PaypalButton);