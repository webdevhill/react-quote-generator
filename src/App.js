import React, { useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then( res => res.json())
    .then(data => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    })
  }

  useEffect(() => {
    getQuote();
  }, []);


  return (
    <div>
      <h1 className='header'>Click to Retweet or Get a New Quote</h1>
      <div className='App'>
      <div className='quote'>
        <p>{quotes.text}</p>
        <p className='author'>{quotes.author}</p>
        <div className='btn-container'>
          <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
          target="_blank"
          rel="no-opener noreferrer"
          className='twitter-btn'>
          <i className="fab fa-twitter"></i>
          </a>
          <button className='btn' onClick={getQuote}>Get Quote</button>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default App;
