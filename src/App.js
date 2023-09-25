import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Salir a caminar', completed: false },
  { text: 'Desayunar', completed: true },
  { text: 'Estudiar', completed: true },
  { text: 'Trabajar', completed: false },
  { text: 'Emprender', completed: true }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText);
    }
  );

  console.log('Los usuarios buscan todos de ' + searchValue);

  return (
      <>
        <TodoCounter 
          completed={completedTodos} 
          total={totalTodos}/>
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}/>

        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text} 
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton/>
      </>
  );
}

export default App;
