import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import './Home.css'

const Home = ({location}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const {name} = queryString.parse(location.search);

    setName(name);

  },[location.search]);


  return (
    <div className="container-home">
      <div className="game-container">
        <div className="game-container-body">Tic Toc Toi</div>
        <div className="game-container-button">
          <Link to={`/chat?name=${name}&room=test2`}>
            <button className="button-style" type="submit">Play</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;