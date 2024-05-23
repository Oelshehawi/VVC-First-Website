import { sendEmail } from '../../data/actions';
import { LoadAndErrorButton } from './butttonSendEmail';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const contactForm = () => {
  return (
    <div className='md:grid grid-cols-3 place-content-center md:p-4'>
      <div className='text-white place-content-center md:text-2xl'>
        <div className='border-t-4 p-4 flex flex-row items-center gap-4 '>
          <FaEnvelope className='size-6' />
          <div>adam@vancouverventcleaning.ca</div>
        </div>
        <div className='border-t-4 p-4 flex flex-row items-center gap-4'>
          <FaPhone className='size-6' />
          <div>604-273-8717</div>
        </div>
      </div>
      <form className='flex flex-col col-span-2 md:p-20 gap-4' action={sendEmail}>
        <input
          className='p-4 rounded outline-none '
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='p-4 rounded outline-none '
          type='email'
          placeholder='Email Address'
          name='email'
          required
        />
        <input
          className='p-4 rounded outline-none '
          type='text'
          placeholder='Phone Number'
          name='number'
        />
        <textarea className='p-4 rounded outline-none ' placeholder='Details' name='details' required />
        <LoadAndErrorButton />
      </form>
    </div>
  );
};

export default contactForm;
