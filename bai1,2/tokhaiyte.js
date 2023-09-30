import {ErrorMessage, Field, Form, Formik, FormikProps} from 'formik';
import * as Yup from 'yup'
function Showform() {
    /*const formik = useFormik({
        initialValues: {
            namee: "Nguyen Van A",
            hochieu:"",
            namsinh:"",
            goitinh:"1",
            quoctinh:"vietnam",
            congty:"hitechs",
            bophan:"",
            thebaohiem:"1",
            tinhlamviec:"danang",
            quanhuyen:"",
            phuongxa:"haichau",
            sonha:"112",
            phone: "0123456789",
            emaill: "AAA@gmail.com",

        },
        onSubmit: values => {
            console.log("submitting")
        }
    })*/
    return(
        <>
        <Formik
            initialValues= {{
                namee: "Nguyen Van A",
                hochieu:"11111111",
                namsinh:1998,
                goitinh:"1",
                quoctinh:"vietnam",
                congty:"hitechs",
                bophan:"culi",
                thebaohiem:"1",
                tinhlamviec:"danang",
                quanhuyen:"",
                phuongxa:"haichau",
                sonha:"112",
                phone: "0123456789",
                emaill: "",
                visiter:"",
                dauhieu:[],
                tiepxuc:[]

            }}
            validationSchema={Yup.object({
                namee:Yup.string().required('Bat buoc nhap'),
                hochieu:Yup.string().required('Bat buoc nhap'),
                namsinh:Yup.number().min(1900,'Nam sinh phai lon hon 1900'),
                quoctinh:Yup.string().required("Bat buoc nhap"),
                tinhlamviec:Yup.string().required("Bat buoc nhap"),
                phuongxa:Yup.string().required("Bat buoc nhap"),
                sonha:Yup.string().required("Bat buoc nhap"),

                emaill:Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,'khong hop le')
            })}
            onSubmit={(values,{setSubmitting})=>{
            console.log(values)
            }}
        >
            {({isSubmitting})=>(
        <div>
            <h1>
                To khai y te
            </h1>
            <Form>
                <div>
                <label>Ho va ten:</label>
                    <br/><Field name="namee" type="text"/>
                    <ErrorMessage name='namee'/>
                </div>
                <div>
                    <label>So ho chieu/CMND:</label>
                    <br/><Field name="hochieu" type="text"/>
                    <ErrorMessage name='hochieu'/>
                </div>
                <div>
                    <label>Nam sinh:</label>
                    <br/><Field name="namsinh" type="number"/>
                    <ErrorMessage name='namsinh'/>
                </div>
                <div>
                    <label>Goi tinh</label>
                    <Field name="goitinh" type="radio" value={"1"}/>
                    <label>Nam</label>
                    <Field name="goitinh" type="radio" value={"2"}/>
                    <label>Nu</label>
                    </div>
                <div>
                    <label>Quoc tich:</label>
                    <br/><Field name="quoctinh" type="text"/>
                    <ErrorMessage name='quoctinh'/>
                </div>
                <div>
                    <label>Cong ty lam viec:</label>
                    <br/><Field name="congty" type="text"/>
                </div>
                <div>
                    <label>Bo phan lam viec:</label>
                    <br/><Field name="bophan" type="text"/>
                </div>
                <label>Co the bao hiem y te:</label>
                <Field name="thebaohiem" type="checkbox" value={"1"}/>
                <h1>Dia chi len he</h1>
                <div>
                    <label>Tinh thanh:</label>
                    <br/><Field name="tinhlamviec" type="text"/>
                </div>
                <div>
                    <label>Quan huyen:</label>
                    <br/><Field name="quanhuyen" type="text"/>
                    <ErrorMessage name='quanhuyen'/>
                </div>
                <div>
                    <label>Phuong xa:</label>
                    <br/><Field name="phuongxa" type="text"/>
                    <ErrorMessage name='phuongxa'/>
                </div>
                <div>
                    <label>So nha:</label>
                    <br/><Field name="sonha" type="text"/>
                    <ErrorMessage name='sonha'/>
                </div>
                <div>
                    <label>Dien thoai:</label>
                    <br/><Field name="phone" type="text"/>
                    <ErrorMessage name='phone'/>
                </div>
                <div>
                    <label>Mail:</label>
                    <br/><Field name="emaill" type="text"/>
                    <ErrorMessage name='emaill'/>
                </div>
                <div>
                    <h1>Trong vong 14 ngay qua,Anh/Chi co den  quoc gia/vung lanh tho nao(Co the di qua nheu quoc gia)</h1>
                    <Field name='visiter'/>
                </div>
                <div>
                    <p>Trong 14 ngay qua, Anh, chi co xuat hien dau hieu nao sau day khong</p>
                   <Field type='checkbox' name='dauhieu' value='sot'/><label>sot</label>
                   <br/><Field type='checkbox' name='dauhieu' value='ho'/><label>ho</label>
                    <br/><Field type='checkbox' name='dauhieu' value='kho tho'/><label>kho tho</label>
                    <br/><Field type='checkbox' name='dauhieu' value='viem phoi'/><label>viem phoi</label>
                    <br/><Field type='checkbox' name='dauhieu' value='dau hong'/><label>dau hong</label>
                    <br/><Field type='checkbox' name='dauhieu' value='met moi'/><label>met moi</label>
                </div>
                <div>
                    <p>Trong vong 14 ngay qua anh chi co tiep xuc voi?</p>
                    <br/><Field type='checkbox' name='tiepxuc' value='Nguoi benh hoac nghi ngo CODVID-19'/><label>Nguoi benh hoac nghi ngo COVID-19</label>
                    <br/><Field type='checkbox' name='tiepxuc' value='Nguoi tu nuoc co COVID-19'/><label>Nguoi tu nuoc co benh COVID-19</label>
                    <br/><Field type='checkbox' name='tiepxuc' value='Nguoi co bieu hien'/><label>Nguoi co dau hieu(ho, sot,kho tho)</label>
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
export default Showform