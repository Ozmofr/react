import './Form.css'
import TextField from '@mui/material/TextField'

function Form() {
    return(
         <form action="#" className='form'>
            <TextField id="username" label="username" variant="outlined"/>
            <TextField id="email" label="email" variant="outlined"/>
            <TextField id="password" label="password" variant="outlined"/>
            <button>Envoyer</button>
        </form>
)

}

export default Form
