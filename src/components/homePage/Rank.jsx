import React from 'react';

const Rank = ({friends}) => {
   // ১. Total: Inactive ছাড়া সবাই (ধরি স্ট্যাটাস 'inactive' না হলেই হবে)
    const totalCount = friends?.filter(f => f.status !== 'inactive').length || 0;

    // ২. On Track: যারা শুধুমাত্র 'active'
    const onTrackCount = friends?.filter(f => f.status === 'active').length || 0;

    // ৩. Need Attention: যারা 'overdue'
    const needCount = friends?.filter(f => f.status === 'overdue').length || 0;

    // ৪. Interactions: সব ডাটার যোগফল (সবগুলো বন্ধুর length)
    const interactionCount = friends?.length || 0;
   
    
    return (
        <div className='grid  gap-4 justify-center m-8 container mx-auto md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex items-center justify-center '>
                <div className='w-60 h-60 flex flex-col  justify-center items-center  rounded-2xl shadow-xl'>
                    <span className='font-bold text-2xl'>{totalCount}</span>
                <p className='font-medium'>Total Friends</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-60 h-60 flex flex-col  justify-center items-center  rounded-2xl shadow-xl'>
                    <span className='font-bold text-2xl'>{onTrackCount}</span>
                <p className='font-medium text-green-500'>On Track</p>
                </div>
            </div>
            <div className='flex items-center justify-center '>
                <div className='w-60 h-60 flex flex-col  justify-center items-center  rounded-2xl shadow-xl'>
                    <span className='font-bold text-2xl'>{needCount}</span>
                <p className='font-medium text-red-500'>Need Attention</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>

                <div className='w-60 h-60 flex flex-col  justify-center items-center rounded-2xl shadow-xl'>
                    <span className='font-bold text-2xl'>{interactionCount}</span>
                <p className='font-medium'>Interactions This Month</p>
                </div>
            </div>
            
        </div>
    );
};

export default Rank;