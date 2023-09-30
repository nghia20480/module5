import {ErrorMessage, Field, Form, Formik, FormikProps} from 'formik';
import * as Yup from 'yup'
function Showform1() {
    return(
        <>
            <Formik
                initialValues= {{
                    namee: "Nguyen Van A",
                    phone: "0123456789",
                    emaill: "",
                    message:""
                }}
                validationSchema={Yup.object({
                    namee:Yup.string().required('Bat buoc nhap'),
                    emaill:Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,'khong hop le'),
                    phone:Yup.string().required('Bat buoc nhap')
                })}
                onSubmit={(values,{setSubmitting})=>{
                    console.log(values)
                }}
            >
                {({isSubmitting})=>(
                    <div>
                        <h1>
                            Contact form
                        </h1>
                        <Form>
                            <div>
                                <label>Ho va ten:</label>
                                <br/><Field name="namee" type="text"/>
                                <ErrorMessage name='namee'/>
                            </div>
                            <div>
                                <label>Mail:</label>
                                <br/><Field name="emaill" type="text"/>
                                <ErrorMessage name='emaill'/>
                            </div>
                            <div>
                                <label>Phone:</label>
                                <br/><Field name="phone" type="text"/>
                                <ErrorMessage name='phone'/>
                            </div>
                            <div>
                                <label>Message:</label>
                                <br/><Field name="message" type="textarea"/>
                            </div>
                            <button type='submit'>Submit</button>
                        </Form>
                    </div>
                )
                }
            </Formik>
        </>
    )
}
export default Showform1