import React from "react";
import { Link } from "react-router-dom";
import FormGenerator from "./FormGenerator";
import "./styles.css";

const CapitalGain = () => {
  const onSubmit = () => {};

  const required = true;
  const formFields = [
    {
      name: "propertyType",
      label: "Type Of Property",
      type: "select",
      options: {
        House: "House",
        Flat: "Flat",
        "Agricultural Land": "Agricultural Land"
      }
    },
    {
      name: "dateOfSale",
      label: "Date Of Sale",
      type: "date"
    },
    {
      name: "salePrice",
      label: "Sale Price",
      type: "number"
    },
    {
      name: "dateOfPurchase",
      label: "Date Of Purchase",
      type: "date"
    },
    {
      name: "purchasePrice",
      label: "Purchase Price",
      type: "number"
    },
    {
      name: "sellingExpenses",
      label: "Selling Expenses like Brokerage"
    },
    {
      name: "costOfImprovement",
      label: "Cost Of Improvement (if any)"
    },
    {
      name: "dateOfImprovement",
      label: "Date Of Improvement",
      type: "date"
    }
  ];
  return <FormGenerator formFields={formFields} onSubmit={onSubmit} />;
};
export default CapitalGain;
