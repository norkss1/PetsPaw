import { useState, useEffect } from 'react';

const useFormattedTime = () => {
    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        const getCurrentTime = () => {
            const currentDate = new Date();
            let hours: string | number = currentDate.getHours();
            let minutes: string | number = currentDate.getMinutes();

            hours = (hours < 10 ? '0' : '') + hours;
            minutes = (minutes < 10 ? '0' : '') + minutes;

            return `${hours}:${minutes}`;
        };

        setFormattedTime(getCurrentTime());

        const interval = setInterval(() => {
            setFormattedTime(getCurrentTime());
        }, 1);

        return () => clearInterval(interval);
    }, []);

    return formattedTime;
};

export default useFormattedTime;
