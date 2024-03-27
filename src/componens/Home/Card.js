import React from 'react';

export default function Movie({id, poster, title, year, plot, url}) {
    return (
        <div key={id} className="overflow-hidden transform transition-shadow duration-1000 bg-white border rounded-lg hover:-translate-y-2">
            <img src={poster} className="object-cover w-full h-auto" alt=""/>
            <div className="p-5">
                <h3 className="inline-block mb-3 text-lg sm:text-xl font-semibold">
                    {title} ({year})
                </h3>
                <p className="text-sm text-gray-700 sm:text-base">
                    {plot}
                </p>
                <a href={url+'/'+id} className="inline-flex items-center text-sm sm:text-base font-semibold cursor-pointer">Learn more</a>
            </div>
        </div>  
    );
}