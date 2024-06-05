import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedText = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the element is in the viewport
      }
    );

    const currentRef = textRef.current; // Store the current ref value

    if (currentRef) {
      observer.observe(currentRef);
    } 

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [isVisible, controls]);

  return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        ref={textRef}
        style={props.Styles}
        className={props.CN}
      >
        {props.Body}
      </motion.div>
  );
};

export default AnimatedText;
