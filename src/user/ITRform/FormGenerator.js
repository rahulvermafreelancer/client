import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const FormGenerator = ({formFields}) => {
    
    return (
        <form className="form-generator">
            {
                formFields.map((formField, index) =>

                    formField.note ? <div className="form-note">{formField.note}</div>
                        :
                        formField.heading ? <div className="form-heading text-success">{formField.heading}</div>
                            :
                            <div className="form-group row">

                                <label
                                    className="col-sm-6 col-form-label text-right"
                                    htmlFor={formField.name}
                                >
                                    {formField.label}
                                    &nbsp;&nbsp;                                    
                                    {formField.helperText && <span style={{ color: "red", fontWeight : 600 }}>{formField.helperText}</span>}
                                    {formField.required && <sup style={{ color: "red" }}>*</sup>}
                                    &nbsp; : &nbsp;
                                </label>
                                <div className="col-sm-6">

                                    {
                                        formField.type === "textarea"
                                            ?
                                            <textarea
                                                className="form-control"
                                                placeholder={formField.placeholder || formField.label}
                                                id={formField.name}
                                                name={formField.name}
                                            />
                                            :
                                            formField.type === "select"
                                                ?
                                                <select
                                                    className="form-control"
                                                    id={formField.name}
                                                    name={formField.name}
                                                >
                                                    <option selected>--Select--</option>
                                                    {
                                                        Object.keys(formField.options).map((key) =>
                                                            <option value={key}>
                                                                {formField.options[key]}
                                                            </option>
                                                        )
                                                    }
                                                </select>
                                                :
                                                <input
                                                    className="form-control"
                                                    id={formField.name}
                                                    name={formField.name}
                                                    placeholder={formField.placeholder || formField.label}
                                                    type={formField.type || "text"}
                                                />

                                    }

                                </div>
                            </div>
                )
            }
            <Link className="btn btn-primary" style={{ margin: 15 }} to="/branch/applyitr/itrsubforms">
                <p>Submit</p>
            </Link>
            <Link className="btn btn-dark" style={{ margin: 15 }} to="/branch/applyitr/itrsubforms">
                <p>Clear</p>
            </Link>
        </form>
    );
};
export default FormGenerator;
