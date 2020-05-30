import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CharCard from './charCard'

const App = (props) => {
  const [data, setData] = useState([])
  // useEffect(() => {
  //   axios
  //     .get('https://swapi.py4e.com/api/people/1/?format=wookiee')
  //     .then(res => {
  //       // console.log(res)
  //       setData(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])
  useEffect(() => {
    const one = 'https://swapi.py4e.com/api/people/1/'
    const two = 'https://swapi.py4e.com/api/people/2/'
    const three = 'https://swapi.py4e.com/api/people/3/'
    const four = 'https://swapi.py4e.com/api/people/4/'
    const five = 'https://swapi.py4e.com/api/people/5/'
    
    const requestOne = axios.get(one)
    const requestTwo = axios.get(two)
    const requestThree = axios.get(three)
    const requestFour = axios.get(four)
    const requestFive = axios.get(five)
    axios
    .all([requestOne, requestTwo, requestThree, requestFour, requestFive])
    .then(axios.spread((...responses) => 
      setData(responses))
    )
    .catch(err => {
      console.log(err)
  })
}, [])
console.log(data)
  return (
  // <charCard name={data.name}/>
  data.map(e => {
        return <CharCard name={e.data.name} height={e.data.height} home={e.data.homeworld} skin={e.data.skin_color} eye={e.data.eye_color}/>
      })
  );
}

export default App;
