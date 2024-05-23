'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import WetPaintButton from './WetPaintButton';
import { DragCloseDrawer } from '../freeEstimate/EstimateDrawer';
import InspectionSchedule from './InspectionSchedule';

const Process = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className='mx-auto max-w-2xl space-y-4 text-neutral-400'></div>
      </DragCloseDrawer>
      <div className='flex h-48 flex-col items-center justify-center bg-slate-900'>
        <span className='font-semibold uppercase text-white'>
          Our Services:
        </span>
      </div>
      <SwapColumnFeatures />
      <div className='flex h-48 items-center justify-center bg-slate-900'>
        <WetPaintButton onClick={() => setOpen(true)} />
      </div>
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className='relative mx-auto max-w-7xl'>
      <SlidingFeatureDisplay featureInView={featureInView} />
      <div className='-mt-[100vh] hidden md:block' />
      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }: { featureInView: any }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === 'l' ? 'flex-end' : 'flex-start',
      }}
      className='pointer-events-none sticky top-0 z-10 hidden h-[100vh] w-full items-center justify-center md:flex '
    >
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className='h-fit w-3/5 rounded-xl p-8 '
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: any;
  featureInView: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-150px',
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className='relative z-0 flex h-fit md:h-screen text-white'
      style={{
        justifyContent:
          featureInView.contentPosition === 'l' ? 'flex-start' : 'flex-end',
      }}
    >
      <div className='grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <span className='rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white'>
            {featureInView.callout}
          </span>
          <p className='my-3 text-5xl font-bold'>{featureInView.title}</p>
          <p className='text-slate-600'>{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='mt-8 block md:hidden'
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: any }) => {
  return (
    <div className='relative h-[60vh] w-full rounded-xl bg-slate-800 shadow-xl'>
      <div className='flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3'></div>
      <div className='absolute inset-0 p-10 overflow-scroll'>
        <featureInView.Image />
      </div>
    </div>
  );
};

export default Process;

const features = [
  {
    id: 1,
    callout: 'Get everything you need',
    title: 'What We Offer:',
    description:
      'We provide ASTTBC certified stamps, stickers, and reports. Our team has extensive experience in commercial kitchen exhaust cleaning and is certified in hood vent and duct cleaning.',
    contentPosition: 'r',
    Image: () => (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src='/Fixing.jpg'
        alt='Experienced Technician'
        className='object-fit w-full h-full rounded-xl'
      />
    ),
  },
  {
    id: 2,
    callout: 'Specifics',
    title: 'What We Do:',
    description:
      'We specialize in commercial kitchen exhaust cleaning, including the thorough cleaning of hoods, ducts, rooftop fans, access panels, and filters. Additionally, we offer comprehensive duct crawl cleaning services to ensure the highest standards of cleanliness and safety.',
    contentPosition: 'l',
    Image: () => (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src='/ExhaustSystem.jpg'
        alt='Exhaust System'
        className='object-fit w-full h-full rounded-xl'
      />
    ),
  },
  {
    id: 3,
    callout: 'Safe and Thorough!',
    title: 'The Process:',
    description:
      'We cover your line equipment with heavy mil plastic, drape your entire hood in plastic to catch water and grease runoff, protect your floor from runoff and chemicals, clean the roof fan(s) with high pressure and temperature solution, clean all ductwork to the hood using specialized equipment, clean the plenum (area behind the filters), clean all the surfaces of the hood, completely clean up our work area and attach a certification sticker to the hood.',
    contentPosition: 'r',
    Image: () => (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src='/Covering.jpg'
        alt='Covering line equipment with heavy mil plastic'
        className='object-fit w-full h-full rounded-xl'
      />
    ),
  },
  {
    id: 4,
    callout: 'Frequency!',
    title: 'Ensuring Your Kitchen is Up to Standard:',
    description:
      'Regular inspection and cleaning of your kitchen exhaust system are crucial for maintaining safety and compliance with NFPA 96 standards. The frequency of these inspections depends on the type and volume of cooking operations. High-volume and solid fuel cooking operations require more frequent inspections to prevent grease buildup and reduce fire hazards.',
    contentPosition: 'l',
    Image: InspectionSchedule,
  },
];
