import styles from './UMScreen.module.css'
import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable';

interface Option {
    readonly label: string;
    readonly value: string;
  }
  
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  });
  
  const intakeOptions = [
    createOption('January 31, 2023'),
    createOption('May 01, 2023'),
    createOption('July 31, 2023'),
    createOption('October 30, 2023'),
  ];

  const pathOptions = [
    createOption('Full Stack Developer'),
    createOption('Advanced Software Developer'),
    createOption('UX Designer'),
    createOption('Salesforce Developer'),
  ];

  const roleOptions = [
    createOption('Candidate'),
    createOption('Trainer'),
    createOption('Admin'),
  ];


export default function UMScreen() {

        const [isLoading, setIsLoading] = useState(false);
        const [inOptions, setInOptions] = useState(intakeOptions);
        const [paOptions, setPaOptions] = useState(pathOptions);
        const [roOptions1, setRoOptions1] = useState(roleOptions);
        const [roOptions2, setRoOptions2] = useState(roleOptions);
        const [roOptions3, setRoOptions3] = useState(roleOptions);
        const [value, setValue] = useState<Option | null>();
        const [value2, setValue2] = useState<Option | null>();
        const [roleValue1, setRoleValue1] = useState<Option | null>();
        const [roleValue2, setRoleValue2] = useState<Option | null>();
        const [roleValue3, setRoleValue3] = useState<Option | null>();

        const handleCreate = (inputValue: string) => {
            setIsLoading(true);
            setTimeout(() => {
              const newOption = createOption(inputValue);
              setIsLoading(false);
              setInOptions((prev) => [...prev, newOption]);
              setValue(newOption);
            }, 1000);
          };

          const handleCreate2 = (inputValue: string) => {
            setIsLoading(true);
            setTimeout(() => {
              const newOption = createOption(inputValue);
              setIsLoading(false);
              setPaOptions((prev) => [...prev, newOption]);
              setValue2(newOption);
            }, 1000);
          };

          const handleRoleCreate1 = (inputValue: string) => {
            setIsLoading(true);
            setTimeout(() => {
              const newOption = createOption(inputValue);
              setIsLoading(false);
              setRoOptions1((prev) => [...prev, newOption]);
              setValue(newOption);
            }, 1000);
          };

          const handleRoleCreate2 = (inputValue: string) => {
            setIsLoading(true);
            setTimeout(() => {
              const newOption = createOption(inputValue);
              setIsLoading(false);
              setRoOptions2((prev) => [...prev, newOption]);
              setValue(newOption);
            }, 1000);
          };

          const handleRoleCreate3 = (inputValue: string) => {
            setIsLoading(true);
            setTimeout(() => {
              const newOption = createOption(inputValue);
              setIsLoading(false);
              setRoOptions3((prev) => [...prev, newOption]);
              setValue(newOption);
            }, 1000);
          };
    return ( 
      <>
      <div className={styles.upperSection}>
        <div className={styles.selectionSection}>
      <h3 className={styles.titles}>Select Intake</h3>
      <CreatableSelect
      className={styles.selector}
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => setValue(newValue)}
      onCreateOption={handleCreate}
      options={inOptions}
      value={value}
    />
    </div>
    <div className={styles.selectionSection}>
    <h3 className={styles.titles}>Select Pathway</h3>
    <CreatableSelect
          className={styles.selector}
    isClearable
    isDisabled={isLoading}
    isLoading={isLoading}
    onChange={(newValue) => setValue2(newValue)}
    onCreateOption={handleCreate2}
    options={paOptions}
    value={value2}
  />
  </div>
  </div>
  <div className={styles.lowerSection}>
     <div>First Name: <input placeholder="First Name" className={styles.formInputs}/></div> 
     <div> Last Name: <input placeholder="Last Name" className={styles.formInputs}/></div> 
     <div> Email:<input placeholder="Email" className={styles.formInputs}/></div> 
     <div>
      <div>Role:
     <CreatableSelect
          className={styles.formSelector}
    isClearable
    isDisabled={isLoading}
    isLoading={isLoading}
    onChange={(newValue) => setRoleValue1(newValue)}
    onCreateOption={handleRoleCreate1}
    options={roOptions1}
    value={roleValue1}
  />
  </div>
  </div>
  </div>
  <div className={styles.lowerSection}>
     <div>First Name: <input placeholder="First Name" className={styles.formInputs}/></div> 
     <div> Last Name: <input placeholder="Last Name" className={styles.formInputs}/></div> 
     <div> Email:<input placeholder="Email" className={styles.formInputs}/></div> 
     <div>
      <div>Role:
     <CreatableSelect
          className={styles.formSelector}
    isClearable
    isDisabled={isLoading}
    isLoading={isLoading}
    onChange={(newValue) => setRoleValue2(newValue)}
    onCreateOption={handleRoleCreate2}
    options={roOptions2}
    value={roleValue2}
  />
  </div>
  </div>
  </div>
  <div className={styles.lowerSection}>
     <div>First Name: <input placeholder="First Name" className={styles.formInputs}/></div> 
     <div> Last Name: <input placeholder="Last Name" className={styles.formInputs}/></div> 
     <div> Email:<input placeholder="Email" className={styles.formInputs}/></div> 
     <div>
      <div>Role:
     <CreatableSelect
          className={styles.formSelector}
    isClearable
    isDisabled={isLoading}
    isLoading={isLoading}
    onChange={(newValue) => setRoleValue3(newValue)}
    onCreateOption={handleRoleCreate3}
    options={roOptions3}
    value={roleValue3}
  />
  </div>
  </div>
  </div>
  </>
    )
}
