import React from "react";
import { Link } from "react-router-dom";
import FormGenerator from "./FormGenerator";
import "./styles.css";

const D80G = () => {
  const onSubmit = () => {};

  const required = true;
  const formFields = [
    {
      name: "Deduction 80G",
      type: "select",
      label: "Deduction 80G",
      options: {
        "Salaried": "Salaried",
        "Self Employed": "Self Employed",
        "Contract": "Contract",
      },
      required
    },
    {
      name: "Name of Donee",
      label: "Name of Donee",
      required
    },

    {
      name: "Address",
      label: "Address",
      placeholder: "Address",
      required,
      type: "textarea"
    },
    {
      name: "PAN of Donee",
      label: "PAN of Donee",
      required
    },
    {
      name: "City or Town or District",
      label: "City or Town or District",
      required
    },
    {
      name: "State",
      label: "State",
      required
    },
    {
      name: "Pincode",
      label: "Pincode",
      required,
      type: "text"
    },
    {
      name: "Cash Donation",
      label: "Cash Donation",
      placeholder: "Cash Donation",
      required
    },
    {
      name: "Rent Paid",  
      label: "Rent Paid (Only for those who do not receive HRA [u/s 80GG])",
      placeholder: "Rent Paid",
      required
    },
    {
      name: "Amount of Donation",
      label: "Any Other Deductable",
      placeholder: "Any Other Deductable",
      required
    }
  ];
  return <FormGenerator formFields={formFields} onSubmit={onSubmit} />;
};

export default D80G;
