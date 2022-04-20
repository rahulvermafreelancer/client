import React from 'react'
import FormGenerator from "./FormGenerator";
import './styles.css';

const ExemptedIncome  = () => {

    const onSubmit = () => {}

    const required = true;
    const formFields = [
      
      {
        name: "Exempted Income Head",
        type: "select",
        label: "Exempted Income Head",
        options: {
          "Salaried": "Salaried",
          "Self Employed": "Self Employed",
          "Contract": "Contract",
        },
        required
      },
      {
        name: "Exempted Income Description",
        label: "Exempted Income Description",
        placeholder: "",
        required,
        type: "number",
      },
      {
        name: "Amount",
        label: "Amount",
        placeholder: "",
        required,
        type: "number",
      }
    ];
    return (
      <FormGenerator formFields={formFields}  onSubmit={onSubmit} />
      );
}

export default ExemptedIncome