import axios from "axios";
export const findAll=async ()=>{
    try{
        const result=await  axios.get('http://localhost:8080/jobs')
        return result.data;

    } catch (e) {
        console.log(e)
    }
}
export const save = async(job)=>{
  try {
     const result=await axios.post('http://localhost:8080/jobs',job)
      return result.data;
  } catch (e) {
      console.log(e)
  }
}