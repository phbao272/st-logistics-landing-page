import { mergeRefs } from '@mantine/hooks';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import { useCountUp } from 'react-countup';

export const CountUpExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const countUpRef = React.useRef(null);
  const { pauseResume } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 10,
    delay: 1000,
    duration: 5,
    smartEasingAmount: 0.5,
  });

  useEffect(() => {
    if (inView) {
      pauseResume();
    }
  }, [inView, pauseResume]);

  return <div ref={mergeRefs(ref, countUpRef)} />;
};
