import React, { useState, useEffect } from 'react';
import Basket from './Basket';
import Mango from './Mango';
import Obstacle from './Obstacle';
import './Game.css'; // For styling

const Game = () => {
  const [mangoes, setMangoes] = useState([]);
  const [obstacles, setObstacles] = useState([]);
  const [basketPosition, setBasketPosition] = useState(window.innerWidth / 2);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30); // 30 seconds
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // Handle basket movement
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setBasketPosition((prev) => Math.max(prev - 20, 0));
      } else if (e.key === 'ArrowRight') {
        setBasketPosition((prev) => Math.min(prev + 20, window.innerWidth - 100));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Game loop
    const gameLoop = setInterval(() => {
      // Update positions
      setMangoes((prev) =>
        prev
          .map((mango) => ({ ...mango, top: mango.top + 10 })) // Increase falling speed
          .filter((mango) => mango.top < window.innerHeight)
      );
      setObstacles((prev) =>
        prev
          .map((obstacle) => ({ ...obstacle, top: obstacle.top + 10 })) // Increase falling speed
          .filter((obstacle) => obstacle.top < window.innerHeight)
      );

      // Generate new mangoes and obstacles
      if (Math.random() < 0.02) {
        setMangoes((prev) => [...prev, createItem('mango')]);
      }
      if (Math.random() < 0.01) {
        setObstacles((prev) => [...prev, createItem('obstacle')]);
      }

      // Check for collisions
      const basketWidth = 100;
      const basketLeft = basketPosition;
      const basketRight = basketLeft + basketWidth;

      setMangoes((prev) => {
        return prev.reduce((acc, mango) => {
          if (
            mango.top > window.innerHeight - 70 &&
            mango.left > basketLeft &&
            mango.left < basketRight
          ) {
            setScore((prevScore) => prevScore + 10);
          } else {
            acc.push(mango);
          }
          return acc;
        }, []);
      });

      setObstacles((prev) => {
        return prev.reduce((acc, obstacle) => {
          if (
            obstacle.top > window.innerHeight - 70 &&
            obstacle.left > basketLeft &&
            obstacle.left < basketRight
          ) {
            setScore((prevScore) => prevScore - 10);
          } else {
            acc.push(obstacle);
          }
          return acc;
        }, []);
      });
    }, 100);

    // Timer for the game
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(gameLoop);
      clearInterval(timer);
    };
  }, [basketPosition]);

  const createItem = (type) => ({
    type,
    left: Math.random() * (window.innerWidth - 50),
    top: -50,
  });

  return (
    <div className="game-container">
      <Basket position={basketPosition} />
      {mangoes.map((mango, index) => (
        <Mango key={index} position={{ top: mango.top, left: mango.left }} />
      ))}
      {obstacles.map((obstacle, index) => (
        <Obstacle key={index} position={{ top: obstacle.top, left: obstacle.left }} />
      ))}
      <div className="score">Score: {score}</div>
      <div className="timer">Time Remaining: {timeRemaining}s</div>
      {gameOver && <div className="game-over">Game Over! Final Score: {score}</div>}
    </div>
  );
};

export default Game;
