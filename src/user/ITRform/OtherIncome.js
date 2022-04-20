import React from "react";
import FormGenerator from "./FormGenerator";
import "./styles.css";

const OtherIncome = () => {
  const onSubmit = () => {};

  const required = true;
  const formFields = [
    {
      name: "incomeForTution",
      label: "Income for Tution"
    },
    {
      name: "interestFromSavingBank",
      label: "Interest from Saving Bank"
    },
    {
      name: "interestFromFD",
      label: "Interest from FD"
    },
    {
      name: "interestFromIncomeTaxRefund",
      label: "Interest from Income Tax Refund"
    },
    {
      name: "otherPartyInterest",
      label: "Other Party Interest"
    },
    {
      name: "interestFromComission",
      label: "Interest from Comission"
    },
    {
      name: "incomeFromDivident",
      label: "Income from Divident (Other than Indian Company)",
      placeholder: "Income from Divident"
    },
    {
      name: "deductionInCaseOfFamilyPensionOnly",
      label: "Deduction in Case of Family Pension Only"
    },
    {
      name: "giftFromOthers",
      label: "Gift from Others"
    },
    {
      name: "agricultureIncome",
      label: "Agriculture Income",
      helperText:
        "[If Agriculture Income Greater than 5000 then fill here, else fill in excempted income]"
    },
    {
      name: "casualIncome",
      label: "Casual Income",
      helperText: "[Income from horse race or lottery]"
    },
    {
      name: "otherIncomeSource1",
      label: "Other Income (Source)"
    },
    {
      name: "otherIncome1",
      label: "Other Income (Amount)",
      placeholder: "Amount",
      type: "number"
    },
    {
      name: "otherIncomeSource2",
      label: "Other Income (Source)"
    },
    {
      name: "otherIncome2",
      label: "Other Income (Amount)",
      placeholder: "Amount",
      type: "number"
    },
    {
      name: "otherIncomeSource3",
      label: "Other Income (Source)"
    },
    {
      name: "otherIncome3",
      label: "Other Income (Amount)",
      placeholder: "Amount",
      type: "number"
    },
    {
      name: "incomeFromOtherSources",
      label: "Income from Other Sources"
    }
  ];
  return <FormGenerator formFields={formFields} onSubmit={onSubmit} />;
};

export default OtherIncome;
