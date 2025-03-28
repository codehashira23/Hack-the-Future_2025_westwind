import react,{useState} from "react"
function SignInForm() {
    const [state,setState]= useState({
        email: "",
        password: ""
    });
    const handlechange = evt => {
        const value= evt.target.value;
        setState({
            ...state,
            [evt.target.value]:value
        });
    };
    const handleOnSubmit = evt =>{
        evt.preventDefault();
        const {email,password}= state;
        alert('you have logged in with email: ${email} and ${password}')
    for (const key in state) {
        setState({
          ...state,
          [key]: ""
        });
      }
    };
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <H1>Sign In</H1>
                <div>
                    
                </div>
            </form>
        </div>
    )
}