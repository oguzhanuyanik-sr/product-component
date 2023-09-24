import ProductMobile from '../assets/image-product-mobile.jpg';
import ProductDesktop from '../assets/image-product-desktop.jpg';
import { BsCart3 } from 'react-icons/bs';

const Card = () => {
  return (
    <div className='rounded-[10px] overflow-hidden max-w-[343px] lg:max-w-[600px] bg-white flex flex-col lg:flex-row'>
      <div>
        <img className='lg:hidden' src={ProductMobile} alt='Product' />
        <img className='hidden lg:block' src={ProductDesktop} alt='Product' />
      </div>

      <div className='px-6'>
        <div>
          <p className='text-grey text-overline mt-6 mb-3'>Perfume</p>
          <h1 className='text-display font-fraunces mb-4'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='text-body mb-6'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className='mb-5 text-display text-green font-fraunces flex items-center'>
            $149.99{' '}
            <span className='ml-5 font-montserrat text-[13px] font-medium leading-[23px] text-grey line-through'>
              $169.99
            </span>
          </p>
          <button className='bg-green w-full rounded-lg text-white text-button flex justify-center items-center gap-2 font-normal py-4 mb-6 hover:bg-darkGreen transition-all'>
            <BsCart3 /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
