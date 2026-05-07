
const validate = (email,pwd,confirmPwd) =>{
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd)


   if(!validEmail)
   {
    return "Invalid Email"
   }
   if(!validPwd)
   {
    return "Invalid Password"
   }
   if(pwd !== confirmPwd)
  {
    return "Password doesn't match"
  }
   
}
export default validate
