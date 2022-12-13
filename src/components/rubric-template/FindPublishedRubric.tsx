import NavBar from "../NavBar/NavBar";
import React, { useState } from "react";
//@ts-ignore
import styles from "./RubricTemplate.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";


export default function FindRubricComp() {
    return (
        <>
        <NavBar />
        <div className={styles.progressBanner}>
          <NavLink  to="/find-rubrics" className={({ isActive }) => (isActive ? styles.progressBannerLinksActive : styles.progressBannerLinks)}>MARK SUBMISSIONS</NavLink>
          <NavLink to="/view-rubrics" className={styles.progressBannerLinks}>VIEW SUBMISSIONS</NavLink>

      </div>
        <div className={styles.page}>
            <h3>Find Published Rubric</h3>
            <input placeholder={"Search and Filter"}></input>
        </div>
        </>
    )
}