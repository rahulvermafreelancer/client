import React from "react";
import FormGenerator from "./FormGenerator";
import './styles.css';

const HouseIncome = () => {
    const onSubmit = () => {}
    
    const required = true;
    const formFields = [
        {
            name: "housePropertyType",
            type: "select",
            label: "Type of House Property",
            options: {
                "Owned": "Owned",
                "Rented": "Rented",
            },
        },
        {
            name: "address",
            label: "Address",
            type: "textarea",
        },

        {
            name: "grossRentRecieved",
            label: "Gross Rent Recieved/ Recievable/ Letable Value",
            placeholder: "Rent Recieved",
            type: "number",
        },
        {
            name: "taxPaidToLocalAuthoroties",
    
            label: "Tax Paid to Local Authority",
        },
        {
            name: "annualValue",
            label: "Annual Value",
        },
        {
            name: "30percentOfAnnualValue",
            label: "30% of Annual Value",
        },
        {
            name: "interestPayableOnHoamLoan",
            label: "Interest Payable on Hoam Loan",
        },
        {
            name: "incomeChargableUnderTheHeadHouseProperty",
            label: "Income Chargable under the Head of \"House Property\"",
        },
    ];
    return (
       <FormGenerator formFields={formFields}  onSubmit={onSubmit} />
    );
}

export default HouseIncome