import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";


const Coffees = () => {

    const data = useLoaderData()

    const [coffees, setCoffees] = useState(data)

    const handleShort = (shortBy) => {
        if(shortBy === 'popularity'){
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffees(sorted)
        }else if(shortBy === 'rating'){
            const sorted = [...data].sort((a, b) => a.rating - b.rating)
            setCoffees(sorted)
        }
    }

    return (
       <>
        <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-thin'>
            Sort Coffee&apos;s by Popularity & Rating-&gt;
          </h1>
        </div>
        <div className='space-x-4'>
          <button
            className='btn btn-warning'
            onClick={()=>handleShort('popularity')}
          >
            Sort By Popularity (DSC)
          </button>
          <button
            className='btn btn-warning'
            onClick={()=>handleShort('rating')}
          >
            Sort By Rating (ASC)
          </button>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
        {
            coffees.map((coffee) => <Card key={coffee.id} coffee={coffee}></Card>)
        }
        </div>
       </>
    );
};

export default Coffees;