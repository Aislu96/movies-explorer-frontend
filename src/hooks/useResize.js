import {useState, useEffect, useCallback} from 'react';
import {WIDTH_SCREEN_600, WIDTH_SCREEN_800} from "../utils/constants";

export const useResize = () => {
    const getWidth = useCallback(() => window.innerWidth, []);
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        function handleResize(event) {
            setWidth(getWidth());
        };
        window.addEventListener('resize', resizeThrottler, false);

        let resizeTimeout;

        function resizeThrottler() {
            if (!resizeTimeout) {
                resizeTimeout = setTimeout(() => {
                    resizeTimeout = null;
                    handleResize();
                }, 1500);
            }
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [getWidth]);

    return {
        width,
        isScreenSm: width <= WIDTH_SCREEN_600,
        isScreenMd: width <= WIDTH_SCREEN_800,
        isScreenLg: width > WIDTH_SCREEN_800,
    };
};

