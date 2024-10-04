'use client';

import { mergeRefs } from '@mantine/hooks';
import { Rubik } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { twMerge } from 'tailwind-merge';

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

interface NumberCountUpProps {
  number: number;
}

const NumberCountUp = ({ number }: NumberCountUpProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const countUpRef = useRef(null);
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: number,
    duration: 3,
    smartEasingAmount: 0.5,
    separator: ',',
  });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <p
      ref={mergeRefs(ref, countUpRef)}
      className={twMerge(
        'w-full max-w-[360px] text-center text-[clamp(3.75rem,1.6027rem_+_3.352vw,5.625rem)] font-semibold text-stroke',
        rubik.className,
      )}
    >
      {number}
    </p>
  );
};

export { NumberCountUp };
