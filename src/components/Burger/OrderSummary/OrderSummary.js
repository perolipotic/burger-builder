import React from 'react'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (<li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
      : {props.ingredients[igKey]}
    </li>)
  })
  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger wht the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>

      <Button
        clicked={props.purchaseCancel}
        btnType='Danger'>CANCEL</Button>
      <Button
        clicked={props.purchaseContinue}
        btnType='Success'
      >
        CONTINUE</Button>
    </>
  )
}

export default OrderSummary