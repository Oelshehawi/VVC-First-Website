'use client';
import { motion } from 'framer-motion';

const RibbonLogos = () => {
  return (
    <div className='bg-slate-900 rounded-xl py-24'>
      <h2 className='mx-4 mb-12 text-center text-2xl font-medium text-white md:text-4xl '>
        Trusted Clients like...
      </h2>
      <div className='flex translate-y-[50%] rotate-[7deg] scale-110  overflow-hidden border-y-4 border-white bg-slate-900'>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className='flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-white bg-slate-900'>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </div>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      className='flex px-2'
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ src, alt, name }) => {
  return (
    <a
      href='/'
      rel='nofollow'
      target='_blank'
      className='flex items-center justify-center gap-4 px-20 py-4transition-colors hover:bg-neutral-200 md:py-6 text-white'
    >
      <img src={src} alt={alt} className='h-12 w-auto md:h-16' />
      <span className='whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl'>
        {name}
      </span>
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem
      src='/attira.png'
      alt='Attira'
      name='Atira'
    />
    <LogoItem
      src='/bostonPizza.png'
      alt='Boston Pizza'
      name='Boston Pizza'
    />
    <LogoItem
      src='/chitChat.png'
      alt='Chit Chat Restaurant'
      name='Chit Chat Restaurant'
    />
    <LogoItem
      src='/dairyQueen.png'
      alt='Dairy Queen'
      name='Dairy Queen'
    />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem
      src='/oebBreakfast.png'
      alt='Oeb Breakfast'
      name='Oeb Breakfast'
    />
    <LogoItem
      src='/panago.png'
      alt='Panago Pizza'
      name='Panago Pizza'
    />
    <LogoItem
      src='/dominos.png'
      alt="Domino's Pizza"
      name="Domino's Pizza"
    />
    <LogoItem
      src='/papajohns.png'
      alt="Papa John's Pizza"
      name="Papa John's Pizza"
    />
  </>
);

export default RibbonLogos;
