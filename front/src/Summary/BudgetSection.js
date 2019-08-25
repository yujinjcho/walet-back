import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './BudgetSection.css'

const BudgetSection = (props) => {
  const [originalBudget, setOriginalBudget] = useState({});
  const [budgets, setBudgets] = useState({});

  useEffect(() => {
    const budget = [
      {"category_name": "Food and Drink", "budget":500},
      {"category_name": "Grocery", "budget":400},
      {"category_name": "Recreation", "budget":200},
      {"category_name": "Travel", "budget":100},
      {"category_name": "Misc", "budget":100},
      {"category_name": "Shops", "budget":300}
    ];
    const budgetByName = budget.reduce((acc, x) => {acc[x.category_name] = x.budget; return acc}, {})

    setOriginalBudget(budgetByName);
    setBudgets(budgetByName);
  }, []);

  const handleBudgetChange = (categoryName) => (data) => {
    const newBudgetValue = data.target.valueAsNumber || 0;
    setBudgets({...budgets, ...{[categoryName]: newBudgetValue}});
  }

  const { categories } = props;
  const totalBudget = Object.values(budgets).reduce((a,b) => a + b, 0);
  const totalSpent = categories.map(x => x.amount).reduce((acc,x) => acc + x, 0);
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th style={{width:"55%"}}>Category</th>
            <th style={{width:"15%"}}>Spent</th>
            <th style={{width:"15%"}}>Budget</th>
            <th style={{width:"15%"}}>Remaining</th>
          </tr>
        </thead>

        <tbody>

          { categories.map(category =>
            <tr key={category.category}>
              <td>{category.category}</td>
              <td>{Math.round(category.amount)}</td>
              <td>
                <Form>
                  <Form.Control
                    value={ budgets[category.category] || "0" }
                    as='input'
                    type="number"
                    onChange={handleBudgetChange(category.category)}
                  />
                </Form>
              </td>
              <td>{Math.round((budgets[category.category] || 0) - category.amount)}</td>
            </tr>
          )}

          <tr className='budget-total'>
            <td>Total</td>
            <td>{Math.round(totalSpent)}</td>
            <td>{Math.round(totalBudget)}</td>
            <td>{Math.round(totalBudget - totalSpent)}</td>
          </tr>

        </tbody>
      </Table>

    </>
  );
}

export default BudgetSection;