// components/Cart/add.jsx
import React, { useState } from "react"
import { cartItems } from "./cart-data"

export default function ShoppingCart() {
  const [counts, setCounts] = useState(
    cartItems.map(() => 1)
  )

  const handleCountChange = (index, delta) => {
    setCounts((prevCounts) => {
      return prevCounts.map((count, i) => {
        if (i !== index) return count
        const newCount = count + delta
        return Math.max(1, Math.min(newCount, cartItems[i].maxCount))
      })
    })
  }

  const totalPrice = counts.reduce(
    (acc, count, index) => acc + count * cartItems[index].price,
    0
  )

  return (
    <div className="shopping-cart">
      {cartItems.map((item, index) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-info">
            <h3>{item.name}</h3>
            <p>{item.price.toLocaleString()}원</p>
            <div className="counter">
              <button
                onClick={() => handleCountChange(index, -1)}
                disabled={counts[index] <= 1}
              >
                -
              </button>
              <span>{counts[index]}</span>
              <button
                onClick={() => handleCountChange(index, +1)}
                disabled={counts[index] >= item.maxCount}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        총액: {totalPrice.toLocaleString()}원
      </div>
    </div>
  )
}
