import * as React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom'
import { WindowOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const studentPages = {
    'Dashboard':"/dashboard",
    'Academics':"/academics",
    'Attendance':"/attendance", 
    'Payments':"/payment",
    'Profile':"/profile",
}
const teacherPages = {
    'Dashboard':"/dashboard",
    'Academics':"/academics",
    'Attendance':"/attendance", 
    'Payments':"/payment",
    'Profile':"/profile",
    'All Users':"/all-users ",
    'Add User':"/add-user "
}
const adminPages = {
    'Dashboard':"/dashboard",
    'Profile':"/profile",
    'All Users':"/all-users ",
    'Add User':"/add-user "
}

function ResponsiveAppBar() {

    const navigate = useNavigate()
    let pages;
    const accessLevel = localStorage.getItem("access")
    if(accessLevel==="Admin"){
        pages=adminPages;
    }
    else if(accessLevel==="Teacher"){
        pages=teacherPages
    }
    else if(accessLevel==="Student"){
        pages=studentPages
    }

const logout = ()=>{
    localStorage.removeItem('access');
    localStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    navigate('/')
}
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
        <button className='page-button logout-btn' onClick={logout}>
            Log out
        </button>
    </div>
   </>
  );
}
export default ResponsiveAppBar;