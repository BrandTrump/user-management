//@ts-ignore - Supressing error finding the css file even though the css file was accessible
import styles from "./UMScreen.module.css";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

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
  createOption("Full Stack Developer"),
  createOption("Advanced Software Developer"),
  createOption("UX Designer"),
  createOption("Salesforce Developer"),
];

const roleOptions = [
  createOption("Candidate"),
  createOption("Trainer"),
  createOption("Admin"),
];

export default function UMScreen() {
  const [firstName1, setFirstName1] = useState(String);
  const [firstName2, setFirstName2] = useState(String);
  const [firstName3, setFirstName3] = useState(String);
  const [lastName1, setLastName1] = useState(String);
  const [lastName2, setLastName2] = useState(String);
  const [lastName3, setLastName3] = useState(String);
  const [email1, setEmail1] = useState(String);
  const [email2, setEmail2] = useState(String);
  const [email3, setEmail3] = useState(String);
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

  const handleFirstNameChange1 = (e) => {
    const {id , value} = e.target;
    if(id === "firstName1"){
        setFirstName1(value);
    }  
}

const handleFirstNameChange2 = (e) => {
  const {id , value} = e.target;
  if(id === "firstName2"){
      setFirstName2(value);
  }  
}

const handleFirstNameChange3 = (e) => {
  const {id , value} = e.target;
  if(id === "firstName3"){
      setFirstName3(value);
  }  
}

const handleLastNameChange1 = (e) => {
  const {id , value} = e.target;
  if(id === "lastName1"){
      setLastName1(value);
  }  
}

const handleLastNameChange2 = (e) => {
const {id , value} = e.target;
if(id === "lastName2"){
    setLastName2(value);
}  
}

const handleLastNameChange3 = (e) => {
const {id , value} = e.target;
if(id === "lastName3"){
    setLastName3(value);
}  
}

const handleEmailChange1 = (e) => {
  const {id , value} = e.target;
  if(id === "email1"){
      setEmail1(value);
  }  
  }

  const handleEmailChange2 = (e) => {
    const {id , value} = e.target;
    if(id === "email2"){
        setEmail2(value);
    }  
    }

    const handleEmailChange3 = (e) => {
      const {id , value} = e.target;
      if(id === "email3"){
          setEmail3(value);
      }  
      }

  const data = () => {
    if (value && value2 && firstName1 && lastName1 && email1 && roleValue1 != null){
    //@ts-ignore - suppressing an undefined error for values from option selectors, worked fine in testing before supressing
    console.log(value?.label +" "+ value2?.label +" " + firstName1 +" " + lastName1 +" " + email1 +" " + roleValue1?.label );
  }
  else
  {
    console.log("Please select a valid Intake and Pathway, also ensure First name, Last name, email. and role are all filled");
  }
  if (value && value2 && firstName2 && lastName2 && email2 && roleValue2 != null){
    //@ts-ignore - suppressing an undefined error for values from option selectors, worked fine in testing before supressing
    console.log(value?.label +" "+ value2?.label +" " + firstName2 +" " + lastName2 +" " + email2 +" " + roleValue2?.label );
  }
  if (value && value2 && firstName3 && lastName3 && email3 && roleValue3 != null){
    //@ts-ignore - suppressing an undefined error for values from option selectors, worked fine in testing before supressing
    console.log(value?.label +" "+ value2?.label +" " + firstName3 +" " + lastName3 +" " + email3 +" " + roleValue3?.label );
  }
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
        <div>
          First Name:{" "}
          <input placeholder="First Name" className={styles.formInputs} id = "firstName1" value={firstName1} onChange = {(e) => handleFirstNameChange1(e)}/>
        </div>
        <div>
          {" "}
          Last Name:{" "}
          <input placeholder="Last Name" className={styles.formInputs} id = "lastName1" value={lastName1} onChange = {(e) => handleLastNameChange1(e)}/>
        </div>
        <div>
          {" "}
          Email:
          <input placeholder="Email" className={styles.formInputs} id = "email1" value={email1} onChange = {(e) => handleEmailChange1(e)}/>
        </div>
        <div>
          <div>
            Role:
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
        <div>
          First Name:{" "}
          <input placeholder="First Name" className={styles.formInputs} id = "firstName2" value={firstName2} onChange = {(e) => handleFirstNameChange2(e)}/>
        </div>
        <div>
          {" "}
          Last Name:{" "}
          <input placeholder="Last Name" className={styles.formInputs} id = "lastName2" value={lastName2} onChange = {(e) => handleLastNameChange2(e)}/>
        </div>
        <div>
          {" "}
          Email:
          <input placeholder="Email" className={styles.formInputs} id = "email2" value={email2} onChange = {(e) => handleEmailChange2(e)}/>
        </div>
        <div>
          <div>
            Role:
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
        <div>
          First Name:{" "}
          <input placeholder="First Name" className={styles.formInputs} id = "firstName3" value={firstName3} onChange = {(e) => handleFirstNameChange3(e)}/>
        </div>
        <div>
          {" "}
          Last Name:{" "}
          <input placeholder="Last Name" className={styles.formInputs} id = "lastName3" value={lastName3} onChange = {(e) => handleLastNameChange3(e)}/>
        </div>
        <div>
          {" "}
          Email:
          <input placeholder="Email" className={styles.formInputs} id = "email3" value={email3} onChange = {(e) => handleEmailChange3(e)}/>
        </div>
        <div>
          <div>
            Role:
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
      <button onClick={data}>Add</button>
    </>
  );
}
