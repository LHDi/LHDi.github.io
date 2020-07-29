import React, { useRef, useEffect } from 'react';
// @ts-ignore
import style from '../css/carousel.module.css';


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        if (!(savedCallback.current instanceof Function)) return;
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Carousel = ({ images = [] }) => {
    const reversedScroll = useRef(false);

    const slider = useRef(null);

    const scrollAmount = useRef(0);

    useInterval(() => {
        if (slider.current === null) return;
        const maxScrollAmount = slider.current.scrollWidth - slider.current.offsetWidth;
        if (reversedScroll.current === false) scrollAmount.current++;
        if (reversedScroll.current === true) scrollAmount.current--;
        slider.current.scrollTo(scrollAmount.current, 0);

        if (scrollAmount.current >= maxScrollAmount || scrollAmount.current <= 0) reversedScroll.current = !reversedScroll.current;
    }, 50);

    return (
        <div id={style.container}>
            <div ref={slider} id={style.images}>
                {images.map(function (image) {
                    return (
                        <div className={style.element}>
                            <div style={{ width: `${Math.floor(Math.random() * 60) + 20}%` }} id={style.topBorder} />
                            <div style={{ height: `${Math.floor(Math.random() * 80) + 10}%` }} id={style.leftBorder} />
                            <img src={image} alt={image} />
                            <div style={{ width: `${Math.floor(Math.random() * 60) + 20}%` }} id={style.bottomBorder} />
                            <div style={{ height: `${Math.floor(Math.random() * 80) + 10}%` }} id={style.rightBorder} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
