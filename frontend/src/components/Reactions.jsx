import React, { useEffect, useState } from 'react'
import socket from '../utils/socketClient';

export default function Reactions({id, votes, name}) {
  const [currentVotes, setCurrentVotes] = useState(votes);


  useEffect(() => {
    socket.on('refreshCurrentVotes', (reaction) => {
      if (reaction._id === id) setCurrentVotes(reaction.votes);
    })
  }, [id]);

  const handleClick = (id) => {
    socket.emit('increaseVotes', { id } );
  }

  return (
    <div>
      <p>{name}</p>
      <p>{currentVotes}</p>
      <button onClick={() => handleClick(id)}>Reagir!</button>
    </div>
  )
}
