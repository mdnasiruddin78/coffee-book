/* eslint-disable react/prop-types */


const Heading = ({title,subtitle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center my-12">
           <h3 className="text-xl md:text-2xl lg:text-4xl mb-4">{title}</h3> 
           <p className="text-xs md:text-base text-gray-600 text-center font-thin">{subtitle}</p>
        </div>
    );
};

export default Heading;