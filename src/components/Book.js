import React from 'react';


const Book = ({ book, changeBookShelf }) => {

   if(book.authors !=null)
   {
 
    return (
        <div className="book">
            <div className="book-top">
          
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:book.imageLinks !== undefined? `url(${book.imageLinks.thumbnail})`:"" }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf ? book.shelf : "none"} onChange={(e) => changeBookShelf(book, e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.publisher}</div>
            <div >
              
            <div className="book-authors">authors:</div>
            {
            
            
          
            book.authors.map(b => (
               
                            <div key={b} className="book-authors">{b}</div>
                         
              
                    ))}
            
            </div>
        </div>
    )}
    else{
        return (
            <div className="book">
                <div className="book-top">
              
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:book.imageLinks !== undefined? `url(${book.imageLinks.thumbnail})`:`` }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf ? book.shelf : "none"} onChange={(e) => changeBookShelf(book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.publisher}</div>
              
            </div>
        )

        
    }
}



export default Book;
