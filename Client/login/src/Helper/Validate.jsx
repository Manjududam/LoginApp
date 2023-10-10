import toast from "react-hot-toast";

export async function UsernameValidate(values){
    const errors = UsernameVerify({}, values);


    return errors;
}

// validate user

function UsernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("Username Required");
    }
    else if(values.username.includes("")){
        error.username = toast.error("Invalid Username..!");
    }

    return error;

}