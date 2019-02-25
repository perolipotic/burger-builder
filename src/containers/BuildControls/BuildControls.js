import React from 'react'
import style from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {
  console.log(props)
  return (
    <div className={style.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl =>
        <BuildControl
          removed={() => props.ingredientRemoved(ctrl.type)}
          added={() => props.ingredientAdded(ctrl.type)}
          key={ctrl.label}
          disabled={props.disabled[ctrl.type]}
          label={ctrl.label} />)}

      <button
        disabled={!props.purchasable}
        className={style.OrderButton}>ORDER NOW</button>
    </div>
  )
}
export default BuildControls