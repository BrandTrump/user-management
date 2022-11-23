//@ts-ignore
import styles from "./RubricTemplate.module.css"
import { Link, NavLink } from "react-router-dom";
import React from "react";

export default function PublishRubric () {
    return (
    <>
        <div className={styles.progressBanner}>
        <NavLink  to="/rubric-template/page-1">INTAKE DETAILS</NavLink>
        <NavLink to="/rubric-template/page-2">LEARNING OBJECTIVES</NavLink>
        <NavLink to="/rubric-template/page-3">PUBLISH RUBRIC</NavLink>
    </div>
    </>
    )
}