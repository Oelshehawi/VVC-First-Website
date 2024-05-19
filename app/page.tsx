'use client';
import { TabsFAQ } from './ui/home/TabsFaq';
import ModernCarousel from './ui/home/Carousel';
import { DarkGridHero } from './ui/home/Hero';

export default function Home() {
  return (
    <>
      <DarkGridHero />
      <ModernCarousel />
      <TabsFAQ />
    </>
  );
}
