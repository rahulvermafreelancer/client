import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const BusinessIncome = () => {

    return (
        <form className="form-generator">

            <div className="form-group row d-flex justify-content-center">
                <Link className="btn btn-primary" style={{ margin: 15 }} to="">
                    <p>Business of Transport [44AE]</p>
                </Link>
                <Link className="btn btn-primary" style={{ margin: 15 }} to="">
                    <p>Other Business [44AD]</p>
                </Link>
                <Link className="btn btn-primary" style={{ margin: 15 }} to="">
                    <p>Professional Income [44ADA]</p>
                </Link>
            </div>
            <div className="form-group row d-flex justify-content-center">
                <Link className="btn btn-primary" style={{ margin: 15 }} to="">
                    <p>Check GSTIN</p>
                </Link>
            </div>

            <div className="form-group row">
                <label
                    className="col-sm-4 col-form-label text-right"
                    htmlFor="gstinNo"
                >
                    GSTIN No.
                    &nbsp; : &nbsp;
                </label>
                <div className="col-sm-8">
                    <input
                        className="form-control"
                        id="gstinNo"
                        name="gstinNo"
                        type="number"
                    />
                </div>
            </div>


            <div className="form-group row">
                <label
                    className="col-sm-4 col-form-label text-right"
                    htmlFor="gstSaleAmount"
                >
                    GST Sale Amount as per GST return
                    &nbsp; : &nbsp;
                </label>
                <div className="col-sm-8">
                    <input
                        className="form-control"
                        id="gstSaleAmount"
                        name="gstSaleAmount"
                        type="number"
                    />
                </div>
            </div>

            <Link className="btn btn-primary" style={{ margin: 15 }} to="">
                <p>Add</p>
            </Link>
        </form>
    );
};
export default BusinessIncome;
