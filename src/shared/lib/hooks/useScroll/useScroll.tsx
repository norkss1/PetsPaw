import { RefObject, useState } from 'react';

interface UseScrollProps {
    ref?: RefObject<HTMLDivElement>;
}

export function useScroll({ ref } : UseScrollProps) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const element = ref?.current;
        if (element) {
            const { scrollTop, scrollHeight, clientHeight } = element;

            const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollPosition(scrollPercentage);
        }
    };

    return { scrollPosition, handleScroll };
}
