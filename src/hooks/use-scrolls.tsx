import { useCallback, useEffect, useState } from 'react';

export default function useScroll(threshold: number) {
    const [scrolled, setScrolled] = useState(false);

    const onScroll = useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    // also check on first load
    useEffect(() => {
        onScroll();
    }, [onScroll]);

    return scrolled;
}

//functon that has input of number that has a threshold to see how far the user has scrolled 
//set to a boolean