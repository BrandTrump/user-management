import styles from './NavBar.module.css';
import { Link, NavLink } from "react-router-dom";
import React, {  useState } from "react";

export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [isActive, setIsActive] = useState(false);
    


    return (<>
        <div className={styles.top}></div>
        <div className={styles.side}>

        <button 
             onClick={() => setToggle(!toggle) } 
            className={styles.menuBtn}

            >
          HOME
      </button>
      {toggle && (<>
        <ul className={styles.linkDiv}>
            1
                {/* <NavLink >
                  <p>HOME</p>
                </NavLink>
                <NavLink >
                 <p>MARKING RUBRIC</p> 
                </NavLink>
                <NavLink  >
                  <p>SUBMISSION</p>
                </NavLink>
                <NavLink  >
                  <p>RESULTS</p>
                </NavLink> */}
                </ul>
                </> )}   

            

            
          <NavLink  to="/rubric-template/page-1" className={({ isActive }) => (isActive ? styles.menuBtnActive : styles.menuBtn)}>
          MARKING RUBRIC
          </NavLink>

     
          <NavLink  to="/find-rubrics" className={styles.menuBtn}>
          SUBMISSIONS
          </NavLink>
      {toggle3 && (<>
        <ul className={styles.linkDiv}>
            3
                {/* <NavLink >
                  <p>HOME</p>
                </NavLink>
                <NavLink >
                 <p>MARKING RUBRIC</p> 
                </NavLink>
                <NavLink  >
                  <p>SUBMISSION</p>
                </NavLink>
                <NavLink  >
                  <p>RESULTS</p>
                </NavLink> */}
                </ul>
                </> )} 
                <button 
            onClick={() => setToggle4(!toggle4)} 
            className={styles.menuBtn}

            >
          RESULTS
      </button>
      {toggle4 && (<>
        <ul className={styles.linkDiv}>
            4
                {/* <NavLink >
                  <p>HOME</p>
                </NavLink>
                <NavLink >
                 <p>MARKING RUBRIC</p> 
                </NavLink>
                <NavLink  >
                  <p>SUBMISSION</p>
                </NavLink>
                <NavLink  >
                  <p>RESULTS</p>
                </NavLink> */}
                </ul>
                </> )} 
        </div>
        </>
    )
}