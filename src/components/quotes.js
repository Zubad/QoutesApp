import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.css';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  const fetchRandomQuote = () => {
    axios.get('/quotes.txt')
      .then(response => {
        const quotes = response.data.split('\n');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      })
      .catch(error => {
        console.log('Error fetching quotes:', error);
      });
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="quotes-container">
        <article>
      <h1 className="headline">Famous Quotes by Businessmen</h1>
      </article>
      <p className="quote-text">{quote}</p>
      <button className="btn" onClick={fetchRandomQuote}>Get Another Quote</button>
    </div>
  );
};

export default Quotes;
