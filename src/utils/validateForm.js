
export const checkFormValidation=(email,password)=>{
    const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
   // return emailRegex.test(email);
    if(!emailRegex) return 'Enter a valid email id';

    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

    if(!passwordRegex) return 'Enter a valid pasword';


}


