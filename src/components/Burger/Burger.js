import React from 'react'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import style from './Burger.css'

const Burger = ({ ingredients }) => {

  let transformedIngredients = Object.keys(ingredients).map(igKey => {
    return [...Array(ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}
export default Burger;