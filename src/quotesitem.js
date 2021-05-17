import React, { useState } from 'react'
import EditQuote from './editquote'

const QuotesItem = (props) =>
{

    const {id,name,body,removeItem,editItem} = props
    const [toggle,setToggle] = useState(false)

    const handleToggle =() =>
    {
        setToggle(!toggle)
    }


    return ( <div>
                {   toggle ?

                    <div>
                    <EditQuote id ={id} name ={name} body={body} editItem ={editItem} handleToggle={handleToggle}/> 
                    <button onClick ={handleToggle}>Cancel</button>
                    </div> :

                    <div>
                    <blockquote> {name} -  {body}</blockquote>
                    <button onClick ={handleToggle}>edit</button>
                    <button onClick ={() =>
                        {
                            const userconfirm = window.confirm('Are you sure to remove ?')
                            if(userconfirm)
                            {
                                removeItem(id)
                            }
                            
                        }} >remove</button>
                    </div>
                }
             </div>
        )
}

export default QuotesItem