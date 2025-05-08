import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPieceProps {
  x: number;
  y: number;
  size: number;
  color: string;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ x, y, size, color }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: Math.random() > 0.5 ? '50%' : '0%',
        top: y,
        left: x,
        zIndex: 100,
      }}
      initial={{ opacity: 1, y: 0, rotate: 0 }}
      animate={{
        opacity: 0,
        y: y + Math.random() * 200 + 100,
        rotate: Math.random() * 360,
        x: x + (Math.random() - 0.5) * 200,
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  );
};

interface ConfettiProps {
  count?: number;
}

const Confetti: React.FC<ConfettiProps> = ({ count = 50 }) => {
  const [pieces, setPieces] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    const colors = ['#FFD700', '#FFA500', '#FF6347', '#9370DB', '#3CB371', '#1E90FF'];
    const newPieces = [];
    
    // Create confetti pieces
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 10 + 5;
      const x = Math.random() * window.innerWidth;
      const y = -20 - Math.random() * 100; // Start above the viewport
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newPieces.push(
        <ConfettiPiece 
          key={i} 
          x={x} 
          y={y} 
          size={size} 
          color={color} 
        />
      );
    }
    
    setPieces(newPieces);
    
    // Clean up after animation
    const timer = setTimeout(() => {
      setPieces([]);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [count]);
  
  return <div className="confetti-container">{pieces}</div>;
};

export default Confetti;
