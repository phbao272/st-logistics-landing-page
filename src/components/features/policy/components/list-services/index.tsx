import { Container } from '@mantine/core';
import React from 'react';

export const ListServices = () => {
  return (
    <Container size="lg" className="flex w-full flex-col gap-5 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">CHÍNH SÁCH</h1>
      </div>

      <iframe
        title="Policy"
        src="https://drive.google.com/file/d/1fBLSzRT6_uUato-W6aBNohmlm2NDuqfy/preview"
        allow="autoplay"
        scrolling="auto"
        height="100%"
        style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '90vh',
          width: '900px',
          margin: 'auto',
        }}
      />
    </Container>
  );
};
