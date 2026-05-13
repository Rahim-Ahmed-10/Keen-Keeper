import React, { useContext } from 'react';
import { TimeLineContext } from '../../context/TimeLineContext';
import { MessageSquare, Phone, Video } from 'lucide-react';


const Timeline = () => {

    const {callTimeLine, setCallTimeLine} = useContext(TimeLineContext);
    console.log(callTimeLine, "contextData")
    return (
        <div className='container mx-auto mt-20 mb-10'>
            <h2 className='font-bold text-2xl'>Timeline </h2>
        {
            callTimeLine.map((item) => {
                return <div key={item.id} className="flex items-center border-b p-2 ">
    {item.type === 'call' && <Phone className="text-gray-600" />}
    {item.type === 'text' && <MessageSquare className="text-gray-600" />}
    {item.type === 'video' && <Video  className="text-gray-600" />}

    <div className="ml-3">
      <div className=" flex gap-2 items-center p-1">
        {item.type === 'call' && <span className="text-blue-500">Call</span>}
      {item.type === 'text' && <span className="text-blue-500">Text</span>}
      {item.type === 'video' && <span className="text-blue-500">Video</span>}
      <p className='text-gray-400 font-semibold'>{item.name}</p>
      </div>
      <div>
        <h2 className='ml-3' >{item.data}</h2>
      </div>
    </div>
    
  </div>
            })
        }
        </div>
    );
};

export default Timeline;