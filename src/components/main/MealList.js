import classes from "./MealList.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem"
import {useEffect, useState, ReactDOM} from "react"
import Modal from "../UI/Modal"

const MealList = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-2cccb-default-rtdb.firebaseio.com/meals.json"
      )
      if (!response.ok) {
        throw new Error("Sorry, Food is not available. Try after sometimes")
      }

      const data = await response.json()
      let mealList = []
      for (const key in data) {
        mealList.push({
          id: key,
          title: data[key].title,
          incred: data[key].incred,
          price: data[key].price,
        })
      }
      setMeals(mealList)
      setIsLoading(false)
    }
    fetchMeals().catch((error) => {
      setIsLoading(false)
      setHasError(error.message)
    })
  }, [])

  if (isLoading) {
    return <p className={classes.mealsLoading}>Loading...</p>
  }

  if (hasError) {
    return <p className={classes.error}>{hasError}</p>
  }
  let availableMeals = meals.map((meal) => (
    <MealItem meal={meal} key={meal.id} id={meal.id} />
  ))

  return (
    <section className={classes.meals}>
      <Card>{availableMeals}</Card>
    </section>
  )
}

export default MealList
