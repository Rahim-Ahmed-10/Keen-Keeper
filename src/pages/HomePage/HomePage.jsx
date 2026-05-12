import React, { useEffect, useState } from 'react';
import Banner from '../../components/homePage/Banner';
import Rank from '../../components/homePage/Rank';
import Friends from '../../components/homePage/Friends';

const HomePage = () => {
const [friends, setFriends]= useState([]);
const [loading, setLoading] = useState(true);
      useEffect(() => {
        const fetchData = async () => {
        const res = await fetch("/data.json");
        const data = await res.json();
        
        setTimeout (() =>{
            setFriends(data);
        setLoading(false);
        },1000);

        
        };
        fetchData();

    },[])

    return (
        <>
            <Banner />
            <Rank  friends={friends}/>
            <Friends friends={friends} loading={loading}/>
        </>
    );
};

export default HomePage;