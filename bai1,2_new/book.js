import * as BookService from "../service/BookService"
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {NavLink} from "react-router-dom";



export function Book() {

    const [books, setBook] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await BookService.findAll()
            setBook(result)
        }
        fetchApi();
    }, [books]);
    const handleDelete =(id) =>{
        try{
            axios.delete("http://localhost:8080/books/"+id)
            setBook(prevState => prevState.filter((book)=> book.id!== id ))
        }catch (e) {
            console.log(e)
        }
    }
    return(
        <>
            {/*<div>
                <h1>Book service
                </h1>
                <Formik initialValues={{
                    id:"",
                    namee:"",
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
                            <Field name="namee" type="text"></Field>
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>
                </Formik>
            </div>*/}
            <NavLink to={"/create/"}>CREATE</NavLink>
            <table>
                <tr><th>Title</th>
                    <th>Quantity</th>
                    <th colSpan='2'>Action</th>

                </tr>

                    {books.map((book)=>(
                        <tr>
                        <td>{book.name}</td>
                            <td>{book.quantity}</td>
                            <td><button><NavLink to={`/update/${book.id}`} >Edit</NavLink></button></td>
                            <td> <button onClick={e => handleDelete(book.id)} >Delete</button> </td>
                        </tr>
                    ))}


            </table>
        </>
    )
}