import React from 'react';

export default function List({id, title, year, url}) {
    return (
        <tr key={id}>
            <td className="px-6 py-4 font-normal font-sans text-gray-800">{id}</td>
            <td className="px-6 py-4 font-normal font-sans text-gray-800">{title}</td>
            <td className="px-6 py-4 font-normal font-sans text-gray-800">{year}</td>
            <td className="px-6 py-4 font-normal font-sans text-gray-800">
                <a href={'/' + url + '/edit'} className="text-green-600 hover:text-green-800">
                    Edit
                </a>
            </td>
        </tr>
    );
}