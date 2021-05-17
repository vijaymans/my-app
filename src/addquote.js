import React from 'react'
import Quotesform from './Quotesform'

const AddQuote =(props) =>
{
    const {addItem} = props

    const formSubmit = (formdata) =>
    {
        addItem(formdata)
    }
    return ( <div>
                <h2>Add quote</h2>
                <Quotesform formSubmit ={formSubmit}/>
    </div>)
}
export default AddQuote