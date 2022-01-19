import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
    else if (active <= 0) setActive(active + (slides.length - 1));
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
    else if (active === slides.length - 1)
      setActive(active - (slides.length - 1));
  }
  return (
    <section className={styles.slideContainer}>
      <h1 className={styles.title}>
        Slider com <b className={styles.gradient}>REACT.JS</b>
      </h1>
      <div
        ref={contentRef}
        className={styles.slideContent}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map(({ id, titulo, imagem }) => (
          <div className={styles.slideContentItem} key={id}>
            <h1>{titulo.replace('<b>', '').replace('</b>', '')}</h1>
            <img src={imagem} alt="imagem people" />
          </div>
        ))}
      </div>
      <nav className={styles.slideNav}>
        <button onClick={slidePrev}>Prev</button>
        <button onClick={slideNext}>Next</button>
      </nav>
    </section>
  );
};

export default Slide;
