//https://medium.com/how-to-react/create-a-sidebar-menu-in-react-js-3463b306ca9a, Manish Mandal, sidebar CSS and JS code

//import useState hook to create menu collapse state
import React, { useState } from "react";

import { Link } from 'react-router-dom';

//import react pro sidebar components
import {

 ProSidebar,
 Menu,
 MenuItem,
 SidebarHeader,
 //SidebarFooter,
 SidebarContent,
  
} from "react-pro-sidebar";

//import icons from react icons
import { FaBuilding, FaRegBuilding} from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";



//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {

   //create initial menuCollapse state using useState hook
   const [menuCollapse, setMenuCollapse] = useState(false)

   //create a custom function that will change menucollapse state from false to true and true to false
 const menuIconClick = () => {
   //condition checking to change state from true to false and vice versa
   menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
 };


 return (
   <>
     <div id="header">
         {/* collapsed props to change menu size using menucollapse state */}
       <ProSidebar collapsed={menuCollapse}>
         <SidebarHeader>
         <div className="logotext">
             {/* small and big change using menucollapse state */}
             <p>{menuCollapse ? "PSS" : <Link className="headerlink" to="/" style={{ textDecoration: 'none'}}>Purdue Study Spaces</Link>}</p>
           </div>
           <div className="closemenu" onClick={menuIconClick}>
               {/* changing menu collapse icon on click */}
             {menuCollapse ? (
               <FiArrowRightCircle/>
             ) : (
               <FiArrowLeftCircle/>
             )}
           </div>
         </SidebarHeader>
         <SidebarContent>
           <Menu iconShape="square">

             <MenuItem icon={<FaRegBuilding />}><Link to="/Engineering">Library of Engineering and Science</Link></MenuItem>
             <MenuItem icon={<FaBuilding />}><Link to="/HSSE">HSSE Library</Link></MenuItem>
             <MenuItem icon={<FaRegBuilding />}><Link to="/Parrish">Parrish Library</Link></MenuItem>
             <MenuItem icon={<FaBuilding />}><Link to="/Digital">Digital Humanities Studio</Link></MenuItem>
             <MenuItem icon={<FaRegBuilding />}><Link to="/Veterinary">Veterinary Medicine Library</Link></MenuItem>
             <MenuItem icon={<FaBuilding />}><Link to="/Walc">WALC</Link></MenuItem>
           </Menu>
         </SidebarContent>
       </ProSidebar>
     </div>
   </>
 );
};

export default Header;
