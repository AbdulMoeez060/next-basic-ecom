"use client"
import { CartContext } from '@/context/cartContext'
import React, { useContext } from 'react'
import CartListItem from './CartListItem'

const CartList = () => {
    const { cart } = useContext(CartContext)

    if (!cart?.cartItems || cart?.cartItems?.length === 0) {
        return (
            <div>
                No Products in the Cart
            </div>
        )
    }

    return (
        <ul className="flex flex-col">
            {cart.cartItems.map(item => (
                <CartListItem key={item.id} {...item} />
            ))}

        </ul>)
}

export default CartList