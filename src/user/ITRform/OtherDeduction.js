import React from "react";
import FormGenerator from "./FormGenerator";
import "./styles.css";

const OtherDeduction = () => {
  const onSubmit = () => {};

  const required = true;
  const formFields = [
    {
      name: "Contribution TOwards NPF [80CCC]",
      label: "Contribution TOwards NPF [80CCC]"
    },
    {
      name: "Employee / Non-Employed Contribution towards NPS",
      label:
        "Employee / Non-Employed Contribution towards NPS (Up to 20%) (U/S 80CCD(l) )"
    },
    {
      name: "Additional Contribution towards NPS",
      label: "Additional Contribution towards NPS (U/S 80CCD(lB))"
    },
    {
      name: "Employer Contribution towards NPS",
      label: "Employer Contribution towards NPS (up to 20%)  (U/S 80CCD(2))"
    },
    {
      name: "Investment Under equity saving scheme (u/s 80CCG)",
      label: "Other Party Interest"
    },
   
   
    {
      name: "Health Insurance Premium (u/s 80D) [A]",
      label: "Health Insurance Premium (u/s 80D) [A]"
    },
    {
      name: "Medical Expenditure (u/s 80D) [B]",
      label: "Medical Expenditure (u/s 80D) [B]"
    },
    {
      name: "Preventing Health Check-up (u/s 80D) [C]",
      label: "Preventing Health Check-up (u/s 80D) [C]"
    },
    {
      name: "Actual payment towards medical Treatment (u/s 80DDB)",
      label: "Actual payment towards medical Treatment (u/s 80DDB)"
    },
    {
      name: "Rent Paid",
      label: "Rent Paid (Only for those who do not receive [u/s 80GG])"
    },
    {
      name: "Deduction for maintenance / medical treatment of dependent (u/s 80DD)",
      label: "Deduction for maintenance / medical treatment of dependent (u/s 80DD)"
    },
    {
      name: "Interest on loan for higher education (u/s 80E)",
      label: "Interest on loan for higher education (u/s 80E)"
    },
    {
      name: "Interest on loan taken for Residential House (u/s 80EE)",
      label: "Interest on loan taken for Residential House (u/s 80EE)"
    },
    {
      name: "Deduction in respect of intrest on loan taken for certain house property (u/s 80EEA)",
      label: "Deduction in respect of intrest on loan taken for certain house property (u/s 80EEA)"
    },
    {
      name: "Deduction in respect of purchase of electric vehicle (u/s 80EEB)",
      label: "Deduction in respect of purchase of electric vehicle (u/s 80EEB)"
    },
    {
      name: "Deduction in in case of a person with disability (u/s 80U)",
      label: "Deduction in in case of a person with disability (u/s 80U)"
    },
    {
      name: "Interest on deposite in saving account (u/s 80TTA)",
      label: "Interest on deposite in saving account (u/s 80TTA)"
    },
    {
      name: "Interest on deposite in case of senior citizens (u/s 80TTB)",
      label: "Interest on deposite in case of senior citizens (u/s 80TTB)"
    },
    {
      name: "Donation of political party (u/s 80GGC)",
      label: "Donation of political party (u/s 80GGC)"
    },
    {
      name: "Royalty on patents (u/s 80RRB)",
      label: "Royalty on patents (u/s 80RRB)"
    },
  ];
  return <FormGenerator formFields={formFields} onSubmit={onSubmit} />;
};

export default OtherDeduction;
