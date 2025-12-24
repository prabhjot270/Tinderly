export const validateForm=(email,password,name=null, isSignIn=null)=>{
       

    //For Sign In check
    if(isSignIn){
        if(!email || !password){
            return "Please Enter Both Email and Password"
        }
        return null ;
    }
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     
    let isNameValid=true;
    //first check if name is provided then validate
    if(name){
        isNameValid= /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+\b/.test(name);
    }

    if(!isEmailValid){
        return "Invalid email address" ;
    }
    if(!isPasswordValid){
        return "Invalid Password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    if(name && !isNameValid){
        return "Invalid Name. Name should only contain alphabets and start with a capital letter."
    }
    return null; // No validation errors
}