import React from 'react'
import Button from '../../components/UI/Button/Button'



class OrderSummary extends React.Component {

  componentDidUpdate() {
    console.log('[OrderSummary] will update')
  }


  render() {
    const { ingredients, price, purchaseCancel, purchaseContinue } = this.props

    const ingredientSummary = Object.keys(ingredients).map(igKey => {
      return (<li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
        : {ingredients[igKey]}
      </li>)
    })

    return (
      <>
        <h3>Your order</h3>
        <p>A delicious burger wht the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>

        <Button
          clicked={purchaseCancel}
          btnType='Danger'>CANCEL</Button>
        <Button
          clicked={purchaseContinue}
          btnType='Success'
        >
          CONTINUE</Button>
      </>
    )
  }

}

export default OrderSummary