import { useState, useEffect } from "react";

const LEFT_BOUNDARY = 10;
const RIGHT_BOUNDARY = 100;
const MOVE_INCREMENT = 5;
const INTERVAL_MS = 250;
const ROUNDS_LIMIT = 3;
const RESTART_DELAY_MS = 3000;

const useWhatsAppPosition = () => {
    const [whatsappXposition, setWhatsappXposition] = useState(50);
    const [direction, setDirection] = useState('left');
    const [rounds, setRounds] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(true);
        }, 4000); // 4 seconds

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        let interval;

        if (isAnimating) {
            interval = setInterval(() => {
                setWhatsappXposition(prevPosition => {
                    const newDirection = direction === 'left' ? 'right' : 'left';
                    const isAtLeftBoundary = prevPosition <= LEFT_BOUNDARY;
                    const isAtRightBoundary = prevPosition >= RIGHT_BOUNDARY;

                    if (isAtLeftBoundary && direction === 'left') {
                        setDirection(newDirection);
                        return prevPosition + MOVE_INCREMENT; // Move right
                    } else if (isAtRightBoundary && direction === 'right') {
                        setDirection(newDirection);
                        return prevPosition - MOVE_INCREMENT; // Move left
                    }

                    return direction === 'left' ? prevPosition - MOVE_INCREMENT : prevPosition + MOVE_INCREMENT;
                });
            }, INTERVAL_MS);
        }

        return () => clearInterval(interval);
    }, [direction, isAnimating]);

    useEffect(() => {
        if (!isAnimating && rounds >= ROUNDS_LIMIT) {
            const timeout = setTimeout(() => {
                setRounds(0);
                setIsAnimating(true);
                setWhatsappXposition(50);
                setDirection('left');
            }, RESTART_DELAY_MS);

            return () => clearTimeout(timeout);
        }
    }, [isAnimating, rounds]);

    return whatsappXposition;
};

export default useWhatsAppPosition;
