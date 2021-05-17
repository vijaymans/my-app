import React from 'react'
import QuotesItem from './quotesitem'

const QuotesList = (  (props) =>
{
    const {quotes,removeItem,editItem} = props
    return ( <div>
                {
                    quotes.length === 0 ? 
                    ( <div>
                        <h2> No Quotes found </h2>
                        <p>Add your first Quote</p>
                    </div> )
                    : (
                    <div>
                        <h2>My Quotes - {quotes.length}</h2>
                        {quotes.map ( quote =>
                            {
                                return <QuotesItem key ={quote.id} id ={quote.id} name ={quote.name} body ={quote.body}
                                removeItem ={removeItem} editItem ={editItem}/>
                            } )
                        }
                        
                    </div>)
                }
          </div>)
})
export default QuotesList