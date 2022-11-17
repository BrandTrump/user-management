import styles from './NavBar.module.css';
import { Link, NavLink } from "react-router-dom";
import React, {  useState } from "react";

export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    


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
                <button 
            onClick={() => setToggle2(!toggle2)} 
            className={styles.menuBtn}

            >
          MARKING RUBRIC
      </button>
      {toggle2 && (<>
        <ul className={styles.linkDiv}>
            2
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
            onClick={() => setToggle3(!toggle3)} 
            className={styles.menuBtn}

            >
          SUBMISSIONS
      </button>
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