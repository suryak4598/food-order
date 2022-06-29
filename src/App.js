import Header from "./components/Layout/Header"
import React from "react"
import MealsSummary from "./components/main/MealsSummary"
import MealList from "./components/main/MealList"

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <MealsSummary></MealsSummary>
      <MealList />
    </React.Fragment>
  )
}

export default App
