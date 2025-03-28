import react,{useState} from "react"
function SignInForm() {
    const [state,setState]= useState({
        email: "",
        password: ""
    });
    const handlechange = evt => {
        const value= evt.target.value;
        setState
    }
}