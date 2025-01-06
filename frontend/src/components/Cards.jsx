import React from 'react'

const Cards = ({item}) => {
    // console.log(item)
    return (
        <>
            <div className='my-6'>
                <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt={item.name} 
                            className='h-[400px] w-full object-fill'
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.price===0 ? "Free" : "Paid"}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline p-3">Rs. {item.price}</div>
                            <div className="badge badge-outline cursor-pointer p-3 hover:bg-[#FF00D3] hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards