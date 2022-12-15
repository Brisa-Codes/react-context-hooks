import React, {createContext, useState} from 'react'; 

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'way of kings', id: 2},
        {title: 'Lazurus Heist', id: 3},
        {title: 'Lion King', id: 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;