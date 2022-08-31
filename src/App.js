import { useReducer } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist'
import { MainContext } from './context/context';
import reducer, { initialState } from './context/reducer';


function App() {

  const data = useReducer(reducer , initialState)

  return (
    <MainContext.Provider value ={data}>
      <Todoinput/>
      <Todolist/>
    </MainContext.Provider>
  );
}

export default App;
