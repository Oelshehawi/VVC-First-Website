'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { DragCloseDrawer } from './freeEstimate/EstimateDrawer';

export const NavBar = () => {
  return <SimpleFloatingNav />;
};

const SimpleFloatingNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className='mx-auto max-w-2xl space-y-4 text-neutral-400'></div>
      </DragCloseDrawer>
      <nav className='z-50 fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500'>
        <Logo />
        <NavLink link='/'>Home</NavLink>
        <NavLink link='/services'>Services</NavLink>
        <NavLink link='/clients'>Our Clients</NavLink>
        <FreeEstimateButton onClick={() => setOpen(true)} />
      </nav>
    </>
  );
};

const Logo = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='ml-2'
    >
      <circle cx='25' cy='25' r='24' fill='green' />
      <text
        x='25'
        y='28'
        fontFamily='Arial'
        fontSize='36'
        fill='white'
        textAnchor='middle'
        dominantBaseline={'middle'}
      >
        V
      </text>
    </svg>
  );
};

const NavLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <a href={link} rel='nofollow' className='block overflow-hidden'>
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: 'backInOut', duration: 0.5 }}
        className='h-[20px]'
      >
        <span className='flex h-[20px] items-center'>{children}</span>
        <span className='flex h-[20px] items-center text-neutral-50'>
          {children}
        </span>
      </motion.div>
    </a>
  );
};

interface FreeEstimateButtonProps {
  onClick: () => void;
}

const FreeEstimateButton = ({ onClick }: FreeEstimateButtonProps) => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}
      onClick={onClick}
    >
      Get Free Estimate
    </button>
  );
};
