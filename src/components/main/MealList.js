import classes from "./MealList.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem"


const mealList = [
  {
    id: 1,
    title: "Chicken Gravy",
    incred: "Chicken and gravy",
    amount: 200,
  },
  {
    id: 2,
    title: "Briyani",
    incred: "Chicken and Masala",
    amount: 110,
  },
  {
    id: 3,
    title: "Burger",
    incred: "Bun and Vegetables",
    amount: 180,
  },
  {
    id: 4,
    title: "Pizza",
    incred: "Chicken and toppins",
    amount: 400,
  },
]

const MealList = () => {

  
  return (
    <section className={classes.meals}>
      <Card>
        {mealList.map((meal) => 
          <MealItem meal={meal} key={meal.id}  id={meal.id}/>
        )}
        
      </Card>
    </section>
  )
}

export default MealList
