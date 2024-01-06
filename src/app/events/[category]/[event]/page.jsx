'use client'
import { useRouter } from 'next/navigation';

const CategoryPage = ({params}) => {
 
  

  // Fetch events for the specific category and display them

  return (
    <div>
      <h1 className='text-white text-2xl'>{params.event} </h1>
      {/* Display list of events within this category */}
    </div>
  );
};

export default CategoryPage;
