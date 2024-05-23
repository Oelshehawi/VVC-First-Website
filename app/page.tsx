'use client';
import { useState } from 'react';
import { TabsFAQ } from './ui/home/TabsFaq';
import ModernCarousel from './ui/home/Carousel';
import { DarkGridHero } from './ui/home/Hero';
import { DragCloseDrawer } from './ui/freeEstimate/EstimateDrawer';

export default function Home() {
  const [open, setOpen] = useState(false); 
  return (
    <>
       <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className='mx-auto max-w-2xl space-y-4 text-neutral-400'></div>
      </DragCloseDrawer>
      <DarkGridHero onClick = {() => setOpen(true)} />
      <ModernCarousel />
      <TabsFAQ />
    </>
  );
}
