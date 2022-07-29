import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const PAST_EXPENSES = [
  {
    id: "e1",
    title: "Electric cooker",
    amount: 3000,
    date: new Date(2021, 1, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2019, 6, 21) },
  {
    id: "e3",
    title: "Mutual funds",
    amount: 5000,
    date: new Date(2018, 2, 28),
  },
  {
    id: "e4",
    title: "Bean bag",
    amount: 1500,
    date: new Date(2017, 5, 12),
  },
  {
    id: "e5",
    title: "Yoga Mat",
    amount: 900,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(PAST_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
