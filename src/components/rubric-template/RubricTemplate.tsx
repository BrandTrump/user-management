import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
//@ts-ignore
import styles from "./RubricTemplate.module.css"
import { Link, NavLink } from "react-router-dom";
interface Option {
    readonly label: string;
    readonly value: string;
  }
  
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });

  
  const intakeOptions = [
    createOption("January 31, 2023"),
    createOption("May 01, 2023"),
    createOption("July 31, 2023"),
    createOption("October 30, 2023"),
  ];
  
  const pathOptions = [
    createOption("Full Stack Developer (Level 4)"),
    createOption("Advanced Software Developer (Level 5)"),
    createOption("UX Designer (Level 5)"),
    createOption("Salesforce Developer (Level 5)"),
    createOption("Advanced Software Developer (Level 6)"),
    createOption("UX Designer (Level 6)"),
  ];

 export default function RubricTemplate() {

  const [inOptions, setInOptions] = useState(intakeOptions);
  const [paOptions, setPaOptions] = useState(pathOptions);
  const [value, setValue] = useState<Option | null>();
  const [value2, setValue2] = useState<Option | null>();

      return (
      <>
      <div className={styles.progressBanner}>
          <NavLink  to="/rubric-template/page-1">INTAKE DETAILS</NavLink>
          <NavLink to="/rubric-template/page-2">LEARNING OBJECTIVES</NavLink>
          <NavLink to="/rubric-template/page-3">PUBLISH RUBRIC</NavLink>
      </div>
        <div >
          <div>MISSION</div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>

          <div>ACCELERATOR</div>
          <div><CreatableSelect
            isClearable
            onChange={(newValue) => setValue(newValue)}
            options={paOptions}
            value={value}
          />
          <CreatableSelect
            isClearable
            onChange={(newValue) => setValue2(newValue)}
            options={inOptions}
            value={value2}
          />
            </div>
        </div>
      </>
      )
 }