import React from 'react';
import { Link } from 'react-router';
import { FadeLoader } from 'react-spinners';
// import { useLoaderData } from 'react-router';

// const friendPromise = fetch("/data.json").then ((res) => res.json());


const Friends = ({friends, loading}) => {

    

    // const friend = use(friendPromise);
    // console.log(friend, "");

    // const friends = useLoaderData();
    // console.log(friends, "Friend")
const statusColors= {
    'overdue': 'bg-red-500 text-white',
    'active': 'bg-green-600 text-white',
    'inactive': 'bg-orange-400 text-white',
    'work': 'bg-blue-100 text-blue-700',
    'family': 'bg-purple-100 text-purple-700'
    }
  

    return (
        <div className='container mx-auto'>
            <h2 className='text-xl font-bold mb-8'>Your Friends</h2>
        
        {loading ? <div className='flex justify-center mb-16'>
            <FadeLoader />
        </div> :
         (<div className='grid grid-cols-4 gap-4 mb-17'>
            {
            friends.map((friend) =>{
                return <Link to={`/FriendsDetails/${friend.id}`} key={friend.id} className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt={friend.name}
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>{friend.days_since_contact}day age</p>
    <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {friend.tags.map((tag, index)=>(
            <span key={index} className='px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-green-100 text-green-700'>
                {tag}
            </span>
        ))}
        <div className='mt-4 w-full'>
            <button className={`px-4 py-1 rounded-md text-xs font-bold uppercase ${statusColors[friend.status.toLowerCase()] || 'bg-gray-200'}`}>
        {friend.status}
</button>

        </div>
    </div>
  </div>
</Link>
            })       
            }
        </div>
    )}
        </div>
    )
};

export default Friends;