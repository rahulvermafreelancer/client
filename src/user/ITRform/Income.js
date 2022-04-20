import React from "react";
import FormGenerator from "./FormGenerator";
import './styles.css';


const Income = () => {
  const onSubmit = () => {}

  const required = true;
  const formFields = [
    {
      name: "employeeName",
      label: "Name of Employer/ Organization/ Company",
      required,
      placeholder: "Name Of Employee",
    },
    {
      name: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Address of employer",
      required,
    },
    {
      name: "employeeType",
      type: "select",
      label: "Type of Employee",
      options: {
        "Salaried": "Salaried",
        "Self Employed": "Self Employed",
        "Contract": "Contract",
      },
      required
    },
    {
      name: "salary",
      label: "Salary / Pension / Allownces",
      placeholder: "Salary / Pension",
      required,
      type: "number",
    },
    {
      name: "valuesOfPrereqiusites",
      label: "Values of Prerequisites",
      required,
    },
    {
      name: "salaryProfit",
      label: "Profit in lieu of salary",
      required,
    },
    {
      name: "grossSalary",
      label: "Gross Salary",
      required,
    },
    {
      name: "otherExcemptAllowances",
      label: "(.) Other Excempt Allowances (if any)",
      required,
      type: "number",
    },
    {
      name: "standardDeductions",
      label: "(.) Standard Deductions",
      placeholder: "Standard Deductions",
      required,
    },
    {
      name: "entertainmentAllowances",
      label: "(.) Entertainment Allowances",
      placeholder: "Entertainment Allowances",
      required,
    },
    {
      name: "professionaTax",
      label: "Deduction u/s 16",
      required,
    },
    {
      name: "incomeChargeUnderTheHeadSalaries",
      label: "Income Charge Under The Head Salaries",
      required,
    },
    {
      note: "Note : Please check Form 16, Form GA55, 12a/b, for details of salary, allowance, prereqiusites, & profit in lieu of salary.",
    },
    {
      heading: "For calculation of Excempt HRA"
    },
    {
      name: "basicSalary",
      label: "Basic Salary",
    },
    {
      name: "hra",
      label: "HRA",
    },
    {
      name: "rentPaid",
      label: "Rent Paid",
    }
  ];
  return (
    <FormGenerator formFields={formFields}  onSubmit={onSubmit} />
    );
};
export default Income;
