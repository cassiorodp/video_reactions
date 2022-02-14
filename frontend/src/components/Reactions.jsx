import React, { useEffect, useState } from 'react'
import socket from '../utils/socketClient';
import sad from '../images/sad.png'
import happy from '../images/happy.png'
import loved from '../images/loved.png'
import { Button } from 'react-bootstrap';

export default function Reactions({id, votes, name}) {
  const [currentVotes, setCurrentVotes] = useState(votes);

  const imgDictionary = {
    sad,
    happy,
    loved
  }

  useEffect(() => {
    socket.on('refreshCurrentVotes', (reaction) => {
      if (reaction._id === id) setCurrentVotes(reaction.votes);
    })
  }, [id]);

  const handleClick = (id) => {
    socket.emit('increaseVotes', { id } );
  }

  return (
    <div className='reactions'>
      <img src={imgDictionary[name]} alt={name}/>
      <p>{currentVotes}</p>
      <Button onClick={() => handleClick(id)}>Reagir!</Button>
    </div>
  )
}
