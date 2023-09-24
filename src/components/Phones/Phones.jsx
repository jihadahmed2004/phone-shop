import React from 'react';
import PhoneCard from './PhoneCard';

const Phones = ({phones}) => {

    console.log(phones);
    return (
        <div className='py-10'>
            <h1 className='text-xl text-center py-4'>All Catagories Phone</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                    phones?.map(phone => <PhoneCard key={phone.id} phone={phone}> </PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;