import React,{useState,useEffect} from "react";
import Form from "./components/Form";
import Citas from "./components/Citas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from './config/axios'

function App() {
  const [datos, setDatos] = useState([])
  //state to fetch api
  const [fetch, setFetch] = useState(true)
  useEffect(() => {
    //check the fetch is true to request to the api
    if(fetch){
      const fetchData = async()=>{
      try{
        const response = await axios.get('/pacientes')
        setDatos(response.data)
        setFetch(false) //change the state, to the effect work right
      }catch{
        throw new Error('something was wrong with the data')
      }
    }
    fetchData()
    }
  }, [fetch])
  return (
    <Router>
      <Switch>
        <Route exact path="/form" component={()=><Form setFetch={setFetch}/>}/>
        <Route exact path="/" component={()=> <Citas datos={datos}/>} />
      </Switch>
    </Router>
  );
}

export default App;
