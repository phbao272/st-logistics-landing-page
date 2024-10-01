'use client';

import React, { PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { tss } from '@libs/utils/tss-style';

interface Props extends ButtonProps {}

export const ButtonCustom = ({ children, className, ...props }: PropsWithChildren<Props>) => {
  const { classes, cx } = useStyles({
    isOutline: props.variant === 'outline',
  });

  return (
    <Button className={cx(classes.button, classes.gradientBorderRefill, className)} {...props}>
      {children}
    </Button>
  );
};

const useStyles = tss.withParams<{ isOutline: boolean }>().create(({ isOutline }) => ({
  button: {
    color: isOutline ? '#000' : '#FFFFFF',
    fontSize: 'clamp(0.6875rem, 0.4012rem + 0.4469vw, 0.9375rem)',
    fontWeight: 600,
    transition: 'transform 0.3s ease',
    textTransform: 'uppercase',
    position: 'relative',
    borderRadius: '20px',

    '&:hover': {
      transform: 'translateY(-8px)',
      color: isOutline ? '#000' : '#FFFFFF',
    },
  },

  gradientBorderRefill: {
    background: isOutline
      ? `linear-gradient(#fff 0 0) padding-box, linear-gradient(138deg, #455589 0%, #B4B4B4 100%) border-box`
      : `linear-gradient(#1B264A 0 0) padding-box, linear-gradient(138deg, #455589 0%, #B4B4B4 100%) border-box`,
    borderRadius: '20px',
    border: '2px solid transparent',
  },
}));
