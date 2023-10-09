import * as BookService from "../service/BookService"
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";
export function BookCreate() {
const navigate=useNavigate();
return(
    <>
        <div>
                <h1>Book service
                </h1>
                <Formik initialValues={{
                    id:"",
                    name:"",
                    quantity:""
                }}
                        onSubmit={values=>{

                            const save=async (books)=> {
                                try {
                                    const result=await  axios.post(('http://localhost:8080/books'),books)
                                    return result.data;

                                } catch (e) {
                                    console.log(e)
                                }
                            }
                            save(values)
                        }}>
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" id="name"></Field>
                            <br/><label htmlFor="quantity">Quantity</label>
                            <Field name="quantity" type="text" id="quantity"></Field>
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>
                </Formik>
            </div>
        <div><button><NavLink to={"http://localhost:3000/"}>Back</NavLink></button></div>
    </>
)


}