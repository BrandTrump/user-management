//@ts-ignore
import styles from "./RubricTemplate.module.css"
import { Link, NavLink, useNavigate, useParams, useLocation } from "react-router-dom";
import React from "react";
import NavBar from "../NavBar/NavBar"

//@ts-ignore
import { PublishRubric } from "./LearningOutcomes.tsx";

interface Option {
    readonly label: string;
    readonly value: string;

  }

const Pub = (props: { date: any; }) => {

    return (
    <>

    <NavBar />
        <div className={styles.progressBanner}>
        <NavLink  to="/rubric-template/page-1" className={({ isActive }) => (isActive ? styles.progressBannerLinksActive : styles.progressBannerLinks)}>CREATE NEW OR EDIT</NavLink>
        <NavLink to="/rubric-template/page-2" className={({ isActive }) => (isActive ? styles.progressBannerLinksActive : styles.progressBannerLinks)}>ADD INTAKE DETAILS</NavLink>
        <NavLink to="/rubric-template/page-3"className={({ isActive }) => (isActive ? styles.progressBannerLinksActive : styles.progressBannerLinks)}>ADD LEARNING OBJECTIVES</NavLink>
    </div>
        <PublishRubric date={props.date} />
        
    </>
    )
}
export default Pub;