import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
//@ts-ignore
import styles from "./RubricTemplate.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

import NavBar from "../NavBar/NavBar"


 

 export default function RubricTemplate() {

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const navigateToIntakeDetails = () => {

    navigate('/rubric-template/page-2');
  };

 

      return (
      <>
      <NavBar />
      <div className={styles.progressBanner}>
          <NavLink  to="/rubric-template/page-1" className={({ isActive }) => (isActive ? styles.progressBannerLinksActive : styles.progressBannerLinks)}>CREATE NEW OR EDIT</NavLink>
          <NavLink to="/rubric-template/page-2" className={styles.progressBannerLinks}>ADD INTAKE DETAILS</NavLink>
          <NavLink to="/rubric-template/page-3"className={styles.progressBannerLinks}>ADD LEARNING OBJECTIVES</NavLink>
      </div>
        <div className={styles.page}>
          <h3>Create New</h3>
          <button className={styles.newRubricBtn} onClick={navigateToIntakeDetails}>New Rubric</button>
        </div>
        <div>
          <h3>Edit Published Rubric</h3>
          <input placeholder="Search and Filter"></input>
        </div>
      </>
      )
 }