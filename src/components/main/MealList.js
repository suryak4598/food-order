import classes from "./MealList.module.css"
import Card from "../UI/Card"

const mealList = [
  {
    id: 1,
    title: "Chicken Gravy",
    incred: "Chicken and gravy",
    amount: "RS.200",
  },
  {
    id: 2,
    title: "Briyani",
    incred: "Chicken and Masala",
    amount: "RS.110",
  },
  {
    id: 3,
    title: "Burger",
    incred: "Bun and Vegetables",
    amount: "RS.180",
  },
  {
    id: 4,
    title: "Pizza",
    incred: "Chicken and toppins",
    amount: "RS.400",
  },
]
const MealList = () => {
  return (
    <section className={classes.meals}>
      <Card>
        {mealList.map((meal) => {
          return (
            <div className={classes.meal}>
              <div>
                <h3>{meal.title}</h3>
                <div className={classes.description}>{meal.incred}</div>
                <div className={classes.price}>{meal.amount}</div>
              </div>
              <div className={classes.full_side_menu}>
                <div className={classes.side_menu}>
                  <p style={{fontWeight: "bold", marginRight: "0.5rem"}}>
                    Amount
                  </p>
                  <input type="number"></input>
                </div>
                <button type="button">+Add</button>
              </div>
            </div>
          )
        })}
      </Card>
    </section>
  )
}

export default MealList
