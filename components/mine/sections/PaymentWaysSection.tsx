import React from 'react';
import { CreditCard, Banknote, Smartphone, ReceiptText, CircleAlert } from 'lucide-react';

const PaymentWaysSection = () => {
  return (
    // Se elimina 'lg:h-screen' para que la altura sea fluida y adaptable.
    <section className='bg-white py-12 sm:py-16 md:py-20 font-sans'> 
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Encabezado de la Sección Compacto */}
        <div className='text-center mb-10 md:mb-12'>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight'>
            ¡Comprar es <span className='text-green-700'>fácil y cómodo!</span> 
          </h2>
          <p className='mt-3 text-lg text-gray-600 max-w-2xl mx-auto'>
            Aceptamos diversos medios de pago para que elijas el que mejor se adapte a vos.
          </p>
        </div>

        {/* Grid de Medios de Pago (Tarjetas más pequeñas) */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12'> 
          
          {/* Tarjeta: Efectivo */}
          <div className='flex flex-col items-center bg-green-50/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-100'>
            <div className='bg-green-600 p-3 rounded-full mb-4 shadow-md'>
              <Banknote size={28} className='text-white' /> {/* Icono más pequeño */}
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-1'>Efectivo</h3>
            <p className='text-gray-500 text-center text-sm'>
              Pago directo en sitio.
            </p>
          </div>

          {/* Tarjeta: Transferencia */}
          <div className='flex flex-col items-center bg-green-50/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-100'>
            <div className='bg-green-600 p-3 rounded-full mb-4 shadow-md'>
              <Smartphone size={28} className='text-white' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-1'>Transferencia</h3>
            <p className='text-gray-500 text-center text-sm'>
              Desde tu banca online.
            </p>
          </div>

          {/* Tarjeta: Débito */}
          <div className='flex flex-col items-center bg-green-50/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-100'>
            <div className='bg-green-600 p-3 rounded-full mb-4 shadow-md'>
              <CreditCard size={28} className='text-white' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-1'>Débito</h3>
            <p className='text-gray-500 text-center text-sm'>
              Pago con tarjeta.
            </p>
          </div>

          {/* Tarjeta: Crédito */}
          <div className='flex flex-col items-center bg-green-50/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-100'>
            <div className='bg-green-600 p-3 rounded-full mb-4 shadow-md'>
              <ReceiptText size={28} className='text-white' />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-1'>Crédito</h3>
            <p className='text-gray-500 text-center text-sm'>
              Mayor flexibilidad.
            </p>
          </div>
        </div>

        {/* Aclaración Importante (Más compacta) */}
        <div className='max-w-3xl mx-auto p-4 bg-yellow-50 rounded-lg shadow-inner border border-yellow-200 flex items-center space-x-4'>
          <CircleAlert size={24} className='text-yellow-600 flex-shrink-0' />
          <div>
            <p className='text-sm text-yellow-700 font-medium'>
              Aclaración Importante: Los pagos con tarjeta de crédito pueden incurrir en intereses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentWaysSection;