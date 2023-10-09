import * as JobService from "../service/JobService"
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";



export function ToDoList() {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await JobService.findAll()
            setJobs(result)
        }
        fetchApi();
    }, [jobs]);
return(
    <>
        <div>
            <h1>TO DO LIST
            </h1>
            <Formik initialValues={{
                id:"",
                namee:""}}
            onSubmit={values=>{

                const save=async (jobss)=> {
                    try {
                    const result=await  axios.post(('http://localhost:8080/jobs'),jobss)
                   return result.data;

                    } catch (e) {
                    console.log(e)
                    }

                }


                save(values)




            }}>
                <Form>
                    <div>
                        <Field name="namee" type="text"></Field>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
        <li>
            {
                jobs.map((job)=>(
                    <ul>{job.namee}</ul>
                ))
            }
        </li>

    </>
)
}