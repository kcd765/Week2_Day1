import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    stock: [{
      id: 1,
      name: 'oreo',
      category: 'biscuit',
      price: 4.50,
      count: 99
    }, {
      id: 2,
      name: 'lipton',
      category: 'tea',
      price: 3.00,
      count: 47
    }, {
      id: 3,
      name: 'pepsi',
      category: 'canned_drink',
      price: 1,
      count: 200
    }, {
      id: 4,
      name: 'lays',
      category: 'chips',
      price: 6.10,
      count: 39
    }],

    employee: {
      firstName: "John",
      lastName: "Smith",
      age: 40,
      job: "Teacher"
    }
  }

  changeJob = () => {
    this.setState(prev => ({
      employee: { ...prev.employee, job: "Software Developer" }
    }))
  }

  render() {
    return (
      <div>
        <h2>Qn2</h2>
        <ul>
          {this.state.stock.map(d => (<li key={d.id}>
            Item: {d.name}
            <ul>
              <li>Category: {d.category}</li>
              <li>Price: ${d.price.toFixed(2)}</li>
              <li>Count: {d.count}</li>
            </ul>
          </li>))}
        </ul>

        <h2>Qn3</h2>
        <p>Employee Details: </p>
        <ul>
          <li>First Name: {this.state.employee.firstName}</li>
          <li>Last Name: {this.state.employee.lastName}</li>
          <li>Age: {this.state.employee.age}</li>
          <li>Job: {this.state.employee.job}</li>
        </ul>

        <button onClick={this.changeJob}>Update Job</button>

      </div>
    );
  }
}

export default App;