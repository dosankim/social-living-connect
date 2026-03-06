import { useState, useEffect } from 'react';

export function useCounter(end, duration = 2000, start = 0, isPlaying = true) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!isPlaying) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutExpo
            const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easing * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration, start, isPlaying]);

    return count;
}
