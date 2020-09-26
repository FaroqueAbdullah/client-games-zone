import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './Join.css'

const Join = () => {
  const [name, setName] = useState('');


  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/></div>
        {/* <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}/></div> */}
        <Link onClick={e => !name  ? e.preventDefault() : null} to={`/home?name=${name}`}>
          <button className={'button mt-20'} type="submit">Join</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;