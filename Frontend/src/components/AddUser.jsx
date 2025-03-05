import Navbar from "./Navbar"
import {TextField, Typography, Button} from "@mui/material"

export default function AddUser(){

  const textfields = ['id',"title","price","description","image","category"] 


  function handleChange(e){

    setProduct({...product,[e.currentTarget.name]:e.currentTarget.value})
    console.log({[e.currentTarget.name]:e.currentTarget.value})
    console.log(product)
  }

  function updateUser(){
    // updateUser
  }
    return(
        <>
            <Navbar></Navbar>
            <form>
      <Typography variant="h3" sx={{marginLeft:"6vw",marginTop:"40px"}}>Add Product:</Typography>

      <div className='inputs'>
      {textfields.map((name)=>{
        return(
          <TextField 
          key={name}
          sx={{marginTop:"20px",backgroundColor:"white",width:"30vw",borderRadius:"20px"}} 
          label={name} 
          defaultValue={(product[name]===null)?"":product[name]} 
          name={name} 
          onChange={handleChange}></TextField>
        )
      })}
      <Button onClick={(location.state===null)?addProduct:updateProduct} variant='contained' sx={{marginTop:"20px",marginLeft:'1vw'}}>{(location.state===null)?"Add Product!":"Update Product!"}</Button>
      </div>
      
      </form>
        </>
    )
}