import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
//@ts-ignore
import styles from "./RubricTemplate.module.css"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { QuantityPicker } from 'react-qty-picker';
import NavBar from "../NavBar/NavBar"
//@ts-ignore
import TextView from "./TextView.tsx";

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

 export const LearningOutcomesComp= (props) => {


  const [inOptions, setInOptions] = useState(intakeOptions);
  const [paOptions, setPaOptions] = useState(pathOptions);
  const [value, setValue] = useState<Option | null>();
  const [value2, setValue2] = useState<Option | null>();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
 

  const navigateToLearningObjectives = () => {
    console.log(value?.label);
    const date = value?.label;
    navigate('/rubric-template/page-3');
  };

  const handleAcceleratorCreate = (inputValue: string) => {

      const newOption = createOption(inputValue);
      setPaOptions((prev) => [...prev, newOption]);
      setValue(newOption);
  };

  const handleIntakeCreate = (inputValue: string) => {

    const newOption = createOption(inputValue);
    setInOptions((prev) => [...prev, newOption]);
    setValue2(newOption);
};

function handleSubmit(e) {
    e.preventDefault();    console.log('You clicked submit.');
  }



      return (
      <>
      <NavBar />
      <div className={styles.progressBanner}>
          <NavLink  to="/rubric-template/page-1"className={styles.progressBannerLinks} >CREATE NEW OR EDIT</NavLink>
          <NavLink to="/rubric-template/page-2" className={({ isActive }) => (isActive ? styles.progressBannerLinksActive : styles.progressBannerLinks)}>ADD INTAKE DETAILS</NavLink>
          <NavLink to= "/rubric-template/page-3" className={styles.progressBannerLinks}>ADD LEARNING OBJECTIVES</NavLink>
      </div>
        <div >
        <div className={styles.page}>
          <div className={styles.numbersContainer}>

      <div className={styles.textFont}>Mission Number select
      <QuantityPicker min={0} max={7} onChange={(value)=>{ // here value is the final update value of the component
                     console.log(value); 
                   }}/></div>


    </div>
        <div className={styles.selectionContainer}>
          <div className={styles.selectionDiv}>
          <div className={styles.textFont}>ACCELERATOR</div>
          <div ><CreatableSelect
            isClearable
            onChange={(newValue) => setValue(newValue)}
            onCreateOption={handleAcceleratorCreate}
            options={paOptions}
            value={value}
            
          />
          </div>
          </div>
          <div className={styles.selectionDiv}>
          <div className={styles.textFont}>INTAKE</div>
          <CreatableSelect
            isClearable
            onChange={(newValue) => setValue2(newValue)}
            onCreateOption={handleIntakeCreate}
            options={inOptions}
            value={value2}
          />
          
          </div>
            </div>
            <button onClick={() => {
              navigateToLearningObjectives();

            }}>Next</button>
        </div>
                   
        </div>
      </>
      )
 }

 export const PublishRubric = ({value}) => {
  const item = "test";
  return (

  <>

  <div className={styles.page}>
      <h3>Learning objectives and Marking Criteria</h3>
      <TextView />
      <button>Publish</button>
      <button>Back</button>
      <button onClick={() => { console.log(value) }}>Press it</button>
      
  </div>
      
  </>
  )
}
 
