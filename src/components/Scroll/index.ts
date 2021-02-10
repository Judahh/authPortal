// file deepcode ignore no-any: any needed
/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react';
// @ts-ignore
import { default as map } from '../../pages/map.json';

const Scroll = () => {
  // const [section, setSection] = useState("#home");
  let currentSection = '#home';

  const indexOfSmallest = (a) => {
    let lowest = 0;
    for (let i = 1; i < a.length; i++) {
      if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
  };
  const onScroll = () => {
    const els: number[] = [];
    const hrefs: any[] = [];
    const mapS: any = (map.sections as unknown) as any[];
    for (const key in mapS) {
      const element = document.getElementById(key);
      if (
        mapS.hasOwnProperty(key) &&
        element &&
        element.getBoundingClientRect() &&
        element.getBoundingClientRect().y
      ) {
        const y: number = element.getBoundingClientRect().y as number;
        const absY: number = Math.abs(y);
        els.push(absY);
        hrefs.push(mapS[key]);
      }
    }
    const cEl = hrefs[indexOfSmallest(els)];
    if (currentSection !== cEl && cEl) {
      currentSection = cEl;
      // console.log("section:" + currentSection);
      window.history.pushState('', '', '/' + currentSection);
    }
  };

  useEffect(
    () => {
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    },
    [
      /*section*/
    ]
  );

  return null;
};

export default Scroll;
