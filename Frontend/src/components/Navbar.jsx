import * as React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom'
const pages = {
    'Dashboard':"/dashboard",
    'Academics':"/academics",
    'Attendance':"/attendance", 
    'Payments':"/payment",
    'profile':"/profile"
}

function ResponsiveAppBar() {
    
    console.log(pages[Object.keys(pages)[1]])


  return (
   <>
    <div className="icon-and-navbar-pages navbar-align">
        <div className="icon">
            <h3>
                ICON
            </h3>
        </div>
        <div className="pages navbar-align">
            {
                Object.keys(pages).map((page)=>{
                    return(
                        <button key={page} className='page-button'>
                            <Link className='page' to={pages[page]}>{page}</Link>
                        </button>
                        
                    )
                })
            }
        </div>
    </div>
   </>
  );
}
export default ResponsiveAppBar;