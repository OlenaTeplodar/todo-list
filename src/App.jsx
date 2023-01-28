import React, { Component } from 'react';

import TodoList from "components/TodoList";
import initialtodos from './todos.json';

class App extends Component {
  state = {
    todos: initialtodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
    //повератємо до масиву тільки ті елементи, в яких id не співпадають. якщо співпав - видаляємо
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Количество выполненных: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
