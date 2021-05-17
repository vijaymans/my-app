import React ,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const Quotesform =(props) =>
{
    const {formSubmit,id : slNo, name : author, body : quote ,handleToggle} = props

    const [id,setId] = useState(slNo ? slNo : uuidv4())
    const [name ,setname] = useState(author ? author :'')
    const [body,setbody] = useState(quote ? quote :'')

    const handleSubmit =(e) =>
    {
        e.preventDefault()

         const formdata = 
         {
            id : id,
            name : name,
            body : body
        }
        
        formSubmit(formdata) 

        //reset the form
        setname('')
        setbody('')
        setId(uuidv4())
    }

    if(handleToggle)
    {
        handleToggle()
    }

    const handleNameChange =(e) =>
    {
         setname(e.target.value)
    }

    const handleBodyChange =(e) =>
    {
        setbody(e.target.value)
    }

    return ( <div>
               {/*  <h2> Add Quote</h2> */}
                <form onSubmit= {handleSubmit}>
                <label> Name </label> <br/>
                <input type ="text" value ={name} onChange={handleNameChange}/> <br/>

                <label> Body </label> <br/>
                <textarea value ={body} onChange = {handleBodyChange}></textarea> <br/>

                

                <input type="submit" value ="save"/>
                </form>
             </div>)
}

export default Quotesform