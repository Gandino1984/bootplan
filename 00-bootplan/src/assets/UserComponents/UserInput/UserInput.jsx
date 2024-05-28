
import './UserInput.css'

export function UserInput(){
    
    return(
        <div className='user-input-formContainer'>
            <form>
                <input type="text" placeholder="nombre de usuario" />
                <input type="text" placeholder="avatar" />
                <input type="submit" value="CREAR" />
            </form>
        </div>
    )
}

export default UserInput;