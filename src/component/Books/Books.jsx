import React, { use } from 'react';
import Book from './Book';

const allBooks = fetch("/booksData.json").then(res => res.json());


const Books = () => {

    const books = use(allBooks);
    console.log(books);
    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-bold text-4xl mb-5' >Books</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    books.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>

        </div>
    );
};

export default Books;