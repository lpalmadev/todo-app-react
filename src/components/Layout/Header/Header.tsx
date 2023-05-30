import { auth } from "../../../configurations"
import "./Header.css"

function Header() {
  return (
    <header>
      <h2>To-do List</h2>
      <div>
        <span>{auth.currentUser?.displayName}</span>
        <span>{auth.currentUser?.email}</span>
        <img  src={auth.currentUser?.photoURL !== null ? auth.currentUser?.photoURL : ''} alt="profileURL" />
      </div>      
    </header>
  )
}

export default Header