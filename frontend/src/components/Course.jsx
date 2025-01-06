import React, { useEffect, useState } from 'react'
import Cards from "./Cards.jsx";
// import list from "../../public/constants/list.json";
import {Link} from "react-router-dom";
import axios from "axios";

const Course = () => {
    // console.log(list);
    const [book,setBook]=useState([]);
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res=await axios.get("/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    },[])
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='py-28 items-center justify-center text-center'>
                    <h1 className='text-3xl font-semibold md:text-4xl'>
                        Invest in Yourself with Our <span className='text-[#FF00D3]'>Premium Courses!</span>
                    </h1>
                    <p className='mt-12'>
                        Unlock exclusive content, expert insights, and in-depth learning experiences with our carefully curated paid courses. Designed by industry professionals and subject matter experts, these courses offer advanced knowledge, and practical skills to help you excel in your personal and professional journey.
                    </p>

                    <Link to="/">
                        <button className='bg-[#FF00D3] text-white px-3 py-2 rounded-md mt-10 hover:bg-pink-400 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        book.filter((item)=>item.price!==0).map((item)=>(
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course