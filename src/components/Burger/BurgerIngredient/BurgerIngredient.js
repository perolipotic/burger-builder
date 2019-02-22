import React, { Component } from 'react'
import styles from './BurgerIngredients.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
  render() {

    let ingredient = null;
    const { type } = this.props
    switch (type) {
      case ('bread-bottom'):
        ingredient = <div className={styles.BreadBottom}></div>
        break;
      case ('bread-top'):
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds1}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={styles.Meat}></div>;
        break;
      case ('chesee'):
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={styles.Bacon}></div>;
        break;
      case ('salad'):
        ingredient = <div className={styles.Salad}></div>;
        break;
      default:
        ingredient = null
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}
export default BurgerIngredient