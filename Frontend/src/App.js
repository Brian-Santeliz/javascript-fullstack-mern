import React,{useState,useEffect} from "react";
import About from "./components/About";
import Citas from "./components/Citas";
import AboutDinamic from "./components/AboutDinamic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from './config/axios'

function App() {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await axios.get()
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
        <Route exact path="/about" component={()=><About/>} />
        <Route exact path="/" component={()=> <Citas datos={datos}/>} />
        <Route exact path="/about/:id" component={AboutDinamic} />
      </Switch>
    </Router>
  );
}

export default App;
