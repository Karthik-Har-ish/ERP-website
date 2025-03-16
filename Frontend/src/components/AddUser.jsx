import Navbar from "./Navbar"
import {TextField, Typography, Button, Grid2} from "@mui/material"

export default function AddUser(){

  const textfields = ['id',"title","price","description","image","category"] 


  function handleChange(e){

    
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
                  <Grid2 sx={{marginLeft:"5vw"}}>
                  <TextField 
                  key={name}
                  sx={{marginTop:"20px",backgroundColor:"#D9CAB3",color:"#90323D",width:"80vw",borderRadius:"20px"}} 
                  label={name} 
                  name={name} 
                  onChange={handleChange}></TextField>
                  </Grid2>
                )
              })}
              <Button variant='contained' sx={{marginTop:"20px",marginLeft:'1vw',backgroundColor:"#D9CAB3",color:"#90323D",height:"60px",width:"40vw",marginBottom:"20vh",}}>Add user</Button>
      
            </div>
        </form>
        </>
    )
}