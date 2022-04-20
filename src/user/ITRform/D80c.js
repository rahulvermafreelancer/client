import React from "react";
import { Link } from "react-router-dom";
import FormGenerator from "./FormGenerator";
import "./styles.css";

const D80c = () => {
  const onSubmit = () => {};

  const required = true;
  const formFields = [
    {
      name: "Life Insurance Premium Paid [LIC]",
      label: "Life Insurance Premium Paid [LIC]",
      required
    },
    {
      name: "Payment For Annuity Plan",
      label: "Payment For Annuity Plan",
      type: "text",
      required
    },

    {
      name: "Provident Fund/ PPF/ GPF",
      label: "Provident Fund/ PPF/ GPF",
      placeholder: "Provident Fund/ PPF/ GPF",
      required,
      type: "text"
    },
    {
      name: "Mutual Funds/UTI",
      label: "Mutual Funds/UTI",
      required
    },
    {
      name: "Principal Payment of Housing Loan",
      label: "Principal Payment of Housing Loan",
      required
    },
    {
      name: "Tuition Fees Paid For 2 - Children",
      label: "Tuition Fees Paid For 2 - Children",
      required
    },
    {
      name: "5 Years Fixed Deposite",
      label: "5 Years Fixed Deposite",
      required,
      type: "text"
    },
    {
      name: "Sukanya Samridhi Yojna",
      label: "Sukanya Samridhi Yojna",
      placeholder: "Sukanya Samridhi Yojna",
      required
    },
    {
      name: "Any Other Deductable",
      label: "Any Other Deductable",
      placeholder: "Any Other Deductable",
      required
    },
    {
      name: "Any Other Deductable",
      label: "Any Other Deductable",
      placeholder: "Any Other Deductable",
      required
    }
  ];
  return <FormGenerator formFields={formFields} onSubmit={onSubmit} />;
};

export default D80c;
