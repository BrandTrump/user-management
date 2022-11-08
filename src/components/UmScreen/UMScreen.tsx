
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


export default function UMScreen() {

        const [isLoading, setIsLoading] = useState(false);
        const [inOptions, setInOptions] = useState(intakeOptions);
        const [paOptions, setPaOptions] = useState(pathOptions);
        const [value, setValue] = useState<Option | null>();

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
              setValue(newOption);
            }, 1000);
          };
    return ( 
      <>
      <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => setValue(newValue)}
      onCreateOption={handleCreate}
      options={inOptions}
      value={value}
    />

    <CreatableSelect
    isClearable
    isDisabled={isLoading}
    isLoading={isLoading}
    onChange={(newValue) => setValue(newValue)}
    onCreateOption={handleCreate2}
    options={paOptions}
    value={value}
  />
  </>
    )
}
