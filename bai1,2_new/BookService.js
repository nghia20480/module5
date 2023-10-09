import axios from "axios";
export const findAll=async ()=>{
    try{
        const result=await  axios.get('http://localhost:8080/books')
        return result.data;

    } catch (e) {
        console.log(e)
    }
}
export const findById = async (id) =>{
    try{
        const result = await axios.get("http://localhost:8080/books/"+id)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const update = async (id,book) =>{
    try{
        const result = await axios.put("http://localhost:8080/books/"+id,book)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
