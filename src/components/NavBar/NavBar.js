import styles from './NavBar.module.css';
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

export default function NavBar() {
    const [toggle, setToggle] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    return (<>
        <div className={styles.top}></div>
        <div className={styles.side}>

        <button 
            onClick={() => setToggle(!toggle)} 
            className={styles.menuBtn}
            >
          HOME
      </button>
      {toggle && (<>
        <ul className={styles.linkDiv}>
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
          SUBMISSIONS
      </button>
      {toggle2 && (<>
        <ul className={styles.linkDiv}>
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
          RESULTS
      </button>
      {toggle2 && (<>
        <ul className={styles.linkDiv}>
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