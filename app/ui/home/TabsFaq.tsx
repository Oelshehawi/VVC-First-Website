import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

export const TabsFAQ = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className='overflow-hidden bg-slate-900 px-4 py-12 rounded-b text-slate-50'>
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
    </section>
  );
};

const Heading = () => {
  return (
    <>
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <span className='mb-8 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text font-medium text-transparent'>
          {"Let's answer some questions"}
        </span>
        <span className='mb-8 text-5xl font-bold'>FAQs</span>
      </div>

      <span className='absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl' />
    </>
  );
};

const Tabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className='relative z-10 flex flex-wrap items-center justify-center gap-4'>
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
            selected === tab
              ? 'border-violet-500 text-slate-50'
              : 'border-slate-600 bg-transparent text-slate-400'
          }`}
          key={tab}
        >
          <span className='relative z-10'>{tab}</span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                exit={{ y: '100%' }}
                transition={{
                  duration: 0.5,
                  ease: 'backIn',
                }}
                className='absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600'
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

const Questions = ({ selected }: { selected: string }) => {
  return (
    <div className='mx-auto mt-12 max-w-3xl'>
      <AnimatePresence mode='wait'>
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: 'backIn',
              }}
              className='space-y-4'
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
        open ? 'bg-slate-800' : 'bg-slate-900'
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='flex w-full items-center justify-between gap-4 py-4'
      >
        <span
          className={`text-left text-lg font-medium transition-colors ${
            open ? 'text-slate-50' : 'text-slate-400'
          }`}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: '45deg',
            },
            closed: {
              rotate: '0deg',
            },
          }}
        >
          <FiPlus
            className={`text-2xl transition-colors ${
              open ? 'text-slate-50' : 'text-slate-400'
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className='overflow-hidden text-slate-400'
      >
        <p ref={ref}>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const TABS = ['Home', 'Services', 'Free Estimate'];

const QUESTIONS = {
  Home: [
    {
      question: 'What is Vancouver Vent Cleaning?',
      answer:
        'Vancouver Vent Cleaning specializes in commercial kitchen vent cleaning and hood exhaust systems cleaning according to BC Fire Code. We use industrial strength degreasers and hot water pressure washers with techniques that most others do not, including an innovative foaming technology during the cleaning process. We guarantee professional cleaning of all fans, ducts, and filters.',
    },
    {
      question: 'Why choose us?',
      answer:
        'Lowest Price, Highest Quality, and Guarantee to Beat All Prices! Pay less for a professional vent cleaning with less downtime. We save you time and money by reducing your frustration with consolidated billing and single transaction costs. You benefit from our experience and efficiency.',
    },
    {
      question: 'What areas do you service?',
      answer:
        'We service Vancouver, Coquitlam, Pitt Meadows, North Vancouver, Abbotsford, Mission, Richmond, Surrey, Burnaby, Squamish, Whistler, Hope, Chilliwack, and many more!',
    },
    {
      question: 'How long have you been in business?',
      answer:
        'Vancouver Vent Cleaning has been in business since 2008, consistently providing high-quality vent cleaning services for commercial kitchens.',
    },
  ],
  Services: [
    {
      question: 'What services do you offer?',
      answer:
        'We offer professional and specialized cleaning services for commercial kitchens, including cleaning the interior of hood systems to bare metal and providing a detailed polish of all stainless steel exposures. Standard service includes cleaning all fans, ducts, and filters.',
    },
    {
      question: 'Do you offer free estimates?',
      answer:
        'Yes, we offer free estimates to help you understand the cost and scope of our services before making any commitments.',
    },
    {
      question: 'What is your cleaning process?',
      answer:
        'Our cleaning process involves using industrial strength degreasers, hot water pressure washers, and an innovative foaming technology to ensure a thorough and efficient cleaning. We follow the BC Fire Code to ensure all systems are cleaned to bare metal.',
    },
    {
      question: 'Can you service any commercial kitchen?',
      answer:
        'Yes, we service commercial kitchens in restaurants, hotels, schools, and hospitals, ensuring all hoods, ducts, fans, and ventilation exhaust systems are professionally cleaned.',
    },
  ],
  'Free Estimate': [
    {
      question: 'How can I get a free estimate?',
      answer:
        'You can request a free estimate by visiting our website and filling out the estimate form, or by contacting us directly via phone or email.',
    },
    {
      question: 'What information do I need to provide for an estimate?',
      answer:
        'To provide an accurate estimate, we need details about your commercial kitchen, including the size of the kitchen, the number of hoods and ducts (preferably pictures), and any specific cleaning requirements you may have.',
    },
    {
      question: 'How quickly can I get an estimate?',
      answer:
        'We strive to provide estimates promptly, typically within a 1 business day of receiving your request.',
    },
    {
      question: 'Is there any obligation after receiving an estimate?',
      answer:
        'No, there is no obligation to use our services after receiving an estimate. The estimate is provided to help you make an informed decision about your vent cleaning needs.',
    },
  ],
};
