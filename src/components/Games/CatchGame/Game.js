import React, { useState, useEffect, useRef } from 'react';
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

  const previousTime = useRef(0); // To keep track of previous time for deltaTime calculation
  const fallingSpeed = 200; // Constant falling speed (pixels per second)
  const maxWidth = 600; // Maximum width for the gameplay area
  const maxItems = 10; // Maximum number of items on screen

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setBasketPosition((prev) => Math.max(prev - 20, 0));
      } else if (e.key === 'ArrowRight') {
        setBasketPosition((prev) => Math.min(prev + 20, maxWidth - 100));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const gameLoop = (time) => {
      // Calculate deltaTime
      const deltaTime = (time - previousTime.current) / 1000; // Convert to seconds
      previousTime.current = time;

      // Update positions based on falling speed
      setMangoes((prev) =>
        prev
          .map((mango) => ({ ...mango, top: mango.top + fallingSpeed * deltaTime })) // Use fallingSpeed
          .filter((mango) => mango.top < window.innerHeight)
      );

      setObstacles((prev) =>
        prev
          .map((obstacle) => ({ ...obstacle, top: obstacle.top + fallingSpeed * deltaTime })) // Use fallingSpeed
          .filter((obstacle) => obstacle.top < window.innerHeight)
      );

      // Generate new mangoes and obstacles less frequently
      if (Math.random() < 0.0005 && mangoes.length + obstacles.length < maxItems) { // Reduced generation rate
        setMangoes((prev) => [...prev, createItem('mango')]);
      }
      if (Math.random() < 0.0005 && mangoes.length + obstacles.length < maxItems) { // Reduced generation rate
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

      if (!gameOver) {
        requestAnimationFrame(gameLoop);
      }
    };

    requestAnimationFrame(gameLoop);

    // Timer for the game
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          setGameOver(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [basketPosition, gameOver]);

  const createItem = (type) => ({
    type,
    left: Math.random() * (maxWidth - 50), // Constrain item generation within maxWidth
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
