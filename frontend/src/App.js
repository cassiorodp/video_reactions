import axios from 'axios';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './App.css';
import Reactions from './components/Reactions';

function App() {
  const [reactions, setReactions] = useState([]);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ reactions", reactions)

  useEffect(() => {
    const getReactions = async () => {
      const { data } = await axios.get('http://localhost:3001/reactions');
      setReactions(data);
    }
    getReactions()

  }, []);

  return (
    <section className="App">
      <YouTube videoId='7BpfaezgWCg' />
      <div>
        {reactions.map(({ _id, name, votes }) => (
          <Reactions
            key={_id}
            name={name}
            id={_id}
            votes={votes}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
