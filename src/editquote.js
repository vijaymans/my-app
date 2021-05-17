import  React from 'react'
import Quotesform  from './Quotesform'

const EditQuote = (props) =>
{
    const {id,name,body,editItem,handleToggle} = props

    const formSubmit =(formData) =>
    {
        console.log('edit' ,formData)
        editItem(formData)
    }
    
    return ( <div>
                <Quotesform id ={id} name ={name} body ={body} formSubmit={formSubmit} handleToggle ={handleToggle}/>
            </div>)
}

export default EditQuote