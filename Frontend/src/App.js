import React,{useState,useEffect} from "react";
import Form from "./components/Form";
import Citas from "./components/Citas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from './config/axios'

function App() {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await axios.get('/pacientes')
        setDatos(response.data)
      }catch{
        throw new Error('something was wrong with the data')
      }
    }
    fetchData()
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/" component={()=> <Citas datos={datos}/>} />
      </Switch>
    </Router>
  );
}

export default App;
