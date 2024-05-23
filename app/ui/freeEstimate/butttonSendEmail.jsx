import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiCheck, FiLoader, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast'


export const LoadAndErrorButton = (onSubmit) => {
  const [variant, setVariant] = useState('neutral');

  const classNames =
    variant === 'neutral'
      ? 'bg-indigo-500 hover:bg-indigo-600'
      : variant === 'error'
      ? 'bg-red-500'
      : variant === 'success'
      ? 'bg-green-500'
      : 'bg-indigo-300 pointer-events-none';

  const handleClick = (e) => {
    if (variant !== 'neutral') return;
    setVariant('loading');
    setTimeout(() => {
      setVariant('success' /* or 'error' */);
      toast.success('Email sent successfully');
      setTimeout(() => {
        setVariant('neutral');
      }, 2500);
    }, 1500);

    e.currentTarget.form?.requestSubmit();
  };

  return (
    <motion.button
      disabled={variant !== 'neutral'}
      onClick={(e) => handleClick(e)}
      className={`relative rounded-md px-4 py-2 font-medium text-white transition-all ${classNames}`}
    >
      <motion.span
        animate={{
          y: variant === 'neutral' ? 0 : 6,
          opacity: variant === 'neutral' ? 1 : 0,
        }}
        className='inline-block'
      >
        Send Email
      </motion.span>
      <IconOverlay Icon={FiLoader} visible={variant === 'loading'} spin />
      <IconOverlay Icon={FiX} visible={variant === 'error'} />
      <IconOverlay Icon={FiCheck} visible={variant === 'success'} />
    </motion.button>
  );
};

const IconOverlay = ({ Icon, visible, spin = false }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: -12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 12,
            opacity: 0,
          }}
          className='absolute inset-0 grid place-content-center'
        >
          <Icon className={`text-xl duration-300 ${spin && 'animate-spin'}`} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
