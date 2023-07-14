import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <Link to = '/'>Home</Link>
            </li>
            <li>
                <button className="btn btn-warning"><Link to = '/addstudent'>Add students🧑🏻‍🎓</Link></button>
                
            </li>
            {/* <li>
                <Link to = '/editstudent'>Edit students</Link>
            </li> */}
        </ul>
        
      
 
   </div>
  )
}

export default Header