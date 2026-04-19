import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaRegStar } from 'react-icons/fa';

const Book = ({ book }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    className='rounded-3xl bg-gray-50 p-9'
                    src={book.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex gap-5 items-center'>
                    {book.tags.map(tag => <div className="badge text-green-400 font-bold bg-gray-50">{tag}</div>)}

                </div>
                <h2 className="card-title font-bold text-2xl">
                    {book.bookName}
                </h2>
                <p className='font-medium mb-4'>By: {book.author}</p>

                <div className="card-actions border-t-2 border-dashed border-gray-400 pt-4 justify-between">
                    <div className="">Fiction</div>
                    <div className="flex gap-2 justify-center items-center">
                        <h3>{book.rating}</h3>
                        <span><FaRegStar /></span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;