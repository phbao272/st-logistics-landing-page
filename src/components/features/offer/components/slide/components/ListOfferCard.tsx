import { Container } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import PinSvg from '@assets/svgs/offer/pin.svg';
import PetSvg from '@assets/svgs/offer/pet.svg';
import FoodSvg from '@assets/svgs/offer/food.svg';
import styles from '../styles.module.css';
import { twMerge } from 'tailwind-merge';
import { changeActiveTabAtom } from '@/components/shared/tabs/atom/active-tab-atom';
import { useSetAtom } from 'jotai';

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
};

interface CardProps {
  icon: string;
  title: string;
  activeTab: string;
}

const CARDS: CardProps[] = [
  {
    icon: PetSvg.src,
    title: 'Thương mại điện tử',
    activeTab: '1',
  },
  {
    icon: FoodSvg.src,
    title: 'Chính ngạch',
    activeTab: '2',
  },
  {
    icon: PinSvg.src,
    title: 'Tiểu ngạch',
    activeTab: '3',
  },
];

const Card = ({ icon, title, activeTab }: CardProps) => {
  const setActiveTab = useSetAtom(changeActiveTabAtom);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        scrollToElement('tmdt');
        setActiveTab(activeTab);
      }}
      className="transition-background flex w-full flex-col items-center justify-center gap-5 rounded-[30px] bg-[#fff] p-[30px_20px] text-center shadow-[0px_0px_52.2px_-17px_rgba(0,0,0,0.5)] duration-300"
    >
      <div className="flex h-[96px] w-[96px] items-center justify-center self-center rounded-[50%] bg-primary">
        <Image src={icon} alt={title} width={48} height={48} priority />
      </div>
      <div className={`mb-[27px] text-xl font-semibold text-primary`}>{title}</div>
    </button>
  );
};

export const ListOfferCard = () => {
  return (
    <Container
      size={'lg'}
      className={twMerge(
        'flex-responsive absolute bottom-[-75%] left-0 right-0 z-10 justify-center gap-5 px-2 md:bottom-[-50px] md:gap-[50px]',
        styles.fadeInUp,
      )}
    >
      {CARDS.map((offer) => (
        <Card key={offer.title} {...offer} />
      ))}
    </Container>
  );
};
