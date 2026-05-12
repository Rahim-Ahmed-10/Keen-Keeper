import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Phone, MessageSquare, Video, Clock, Archive, Trash2 } from 'lucide-react';


const statusColors= {
    'overdue': 'bg-red-500 text-white',
    'active': 'bg-green-600 text-white',
    'inactive': 'bg-orange-400 text-white',
    'work': 'bg-blue-100 text-blue-700',
    'family': 'bg-purple-100 text-purple-700'
    }

const FriendDetails = () => {
    const { friendId } = useParams();
    
    const friends = useLoaderData();

    const expectedFriend = friends.find(friend => friend.id === Number(friendId));

    const [callTimeLine, setCallTimeLine] = useState([]);

    const handleCallTimeLine = () => {
        setCallTimeLine([...callTimeLine, expectedFriend])
    }
    console.log(callTimeLine, "handleCallTimeLine")

    return (



        <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
            <div className="container mx-auto flex flex-col md:flex-row gap-6">
                
            
                <div className="w-full md:w-1/3 space-y-4">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                        <img 
                            src={expectedFriend.picture} 
                            alt={expectedFriend.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-100"
                        />
                        <h2 className="text-2xl font-bold text-gray-800">{expectedFriend.name}</h2>
                        <div className="flex flex-col gap-2 mt-3 items-center">

                           {expectedFriend.tags.map((tag, index)=>(
            <span key={index} className='px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-green-100 text-green-700'>
                {tag}
            </span>
        ))}
                        </div>
                        <p className="text-gray-500 italic text-sm mt-6">{expectedFriend.bio}</p>
                        <p className="text-gray-400 text-xs mt-2">{expectedFriend.email}</p>
                    </div>

                    
                    <div className="rounded-2xl shadow-sm border border-gray-100 space-y-2 overflow-hidden">
                        <button className="w-full flex items-center bg-white  justify-center gap-3 p-4 hover:bg-gray-50 text-gray-600 border-b border-gray-50 transition-colors">
                            <Clock size={18} /> <span className="text-sm font-medium">Snooze 2 Weeks</span>
                        </button>
                        <button className="w-full flex items-center bg-white  justify-center gap-3 p-4 hover:bg-gray-50 text-gray-600 border-b border-gray-50 transition-colors">
                            <Archive size={18} /> <span className="text-sm font-medium">{expectedFriend.status}</span>
                        </button>
                        <button className="w-full flex items-center bg-white  justify-center gap-3 p-4 hover:bg-red-50 text-red-500 transition-colors">
                            <Trash2 size={18} /> <span className="text-sm font-medium cursor-pointer">Delete</span>
                        </button>
                    </div>
                </div>

               
                <div className="w-full md:w-2/3 space-y-6">
                    
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <p className="text-3xl font-bold text-gray-800">{expectedFriend.days_since_contact}</p>
                            <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <p className="text-3xl font-bold text-gray-800">{expectedFriend.goal}</p>
                            <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <p className="text-lg font-bold text-gray-800">{expectedFriend.next_due_date}</p>
                            <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase">Next Due</p>
                        </div>
                    </div>

                    
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
                        <button className="absolute top-6 right-6 text-[10px] bg-gray-50 text-gray-400 px-2 py-1 rounded font-bold uppercase border border-gray-100 cursor-pointer">Edit</button>
                        <h3 className="text-gray-400 text-xs font-bold uppercase mb-2">Relationship Goal</h3>
                        <p className="text-gray-700">Connect every <span className="font-bold">30 days</span></p>
                    </div>

                 
                    <div>
                        <h3 className="text-gray-400 text-xs font-bold uppercase mb-4 ml-2">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={handleCallTimeLine} className="flex flex-col items-center gap-3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:bg-blue-50 transition-all cursor-pointer">
                                <Phone className="text-gray-600" />
                                <span className="text-sm font-bold text-gray-500">Call</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:bg-blue-50 transition-all cursor-pointer">
                                <MessageSquare className="text-gray-600" />
                                <span className="text-sm font-bold text-gray-500">Text</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:bg-blue-50 transition-all cursor-pointer">
                                <Video className="text-gray-600" />
                                <span className="text-sm font-bold text-gray-500">Video</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default FriendDetails;