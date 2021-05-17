import React, {useState,useEffect} from 'react'
import Quoteslist from  './Quoteslist'

import AddQuote from './addquote'


const QuotesContainer = (props) =>
{
    const [quotes , setQuotes] = useState([])

     useEffect ( () =>
    {
        const result1 =  JSON.parse(localStorage.getItem('quotes')) || []
        console.log('res1',result1)
        setQuotes(result1)
    },[])  

     useEffect( () =>
    {
        localStorage.setItem('quotes',  JSON.stringify(quotes))
        console.log(localStorage)
    },[quotes]) 
 
    const addItem =(quote) =>
    {
       const result =[quote,...quotes]
       
       setQuotes(result)
    }

    const removeItem = (Id) =>
    {
       const remove = quotes.filter ( ele =>
        {
            return ele.id != Id
        })
        
        setQuotes(remove)
    }

    const editItem =(quote) =>
    {
        const result = quotes.map(q =>
            {
                if(q.id == quote.id)
                {
                    return {...q ,...quote}
                }
                else{
                    return {...q}
                }
            })
        setQuotes(result)
    }

    return ( <div>
                <h1> QuotesContainer </h1>
                <Quoteslist quotes ={quotes} removeItem ={removeItem} editItem={editItem}/>
                <AddQuote addItem ={addItem}/>
             </div>
             )
}
export  default QuotesContainer