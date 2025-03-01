import * as React from 'react';
import "./navbar.css"

const pages = ['Dashboard', 'Academics', 'Attendance', 'Payments', 'profile'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {



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
                pages.map((page)=>{
                    return(
                        <button className='page-button'>
                            <h6 className='page'>{page}</h6>
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