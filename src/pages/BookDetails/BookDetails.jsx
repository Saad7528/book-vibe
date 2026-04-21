import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();

    const books = useLoaderData();
    console.log(books, bookParamsId);

    const expectBook = books.find(book => book.bookId == bookParamsId);
    console.log(expectBook);
    const { bookName, author, image, review, tags, publisher, totalPages, rating, yearOfPublishing } = expectBook;


    const [readBook, setReadBook] = useState([]);

    const handleReadBook = (currentBook) => {

        const isExistBook = readBook.find(book => book.bookId === currentBook.bookId )
        
        if (isExistBook){
            alert("This Book Is already exist")
        }else{
            setReadBook([...readBook, currentBook])
        }
        
    }
    console.log(readBook);


    return (
        <div className='container mx-auto my-8 bg-gray-50'>
            <div className=" grid grid-cols-2 bg-base-100 shadow-sm ">
                <figure className='flex justify-center items-center bg-gray-200 max-h-[60vh] rounded-2xl'>
                    <img
                        className=' p-10 h-full'
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h1 className="card-title text-5xl">{bookName}</h1>
                    <h5 className="card-title text-2xl">{author}</h5>
                    <h5 className="card-title border-y py-3 border-gray-300 text-2xl">Fiction</h5>
                    <p className=' fontWork text-base/6 text-gray-500'><span className='text-black font-bold text-[20px]'>Review:</span> {review}</p>
                    <div className='flex gap-5 items-center py-2'>
                        <span className='font-bold'>Tag:</span>
                        {tags.map(tag => <div className="badge text-green-400 font-bold bg-gray-50">{tag}</div>)}

                    </div>

                    <div className=''>
                        <div className='flex gap-8 items-center'>
                            <span className='text-gray-400'>Number Of Pages:</span> <span className='font-bold'>{totalPages}</span>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <span className='text-gray-400'>Publisher:</span> <span className='font-bold'>{publisher}</span>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <span className='text-gray-400'>Year of Publishing:</span> <span className='font-bold'>{yearOfPublishing}</span>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <span className='text-gray-400'>Rating:</span> <span className='font-bold'>{rating}</span>
                        </div>
                    </div>
                    <div className="card-actions flex items-center-safe gap-4">
                        <button className="btn" onClick={()=> handleReadBook(expectBook)}>Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;