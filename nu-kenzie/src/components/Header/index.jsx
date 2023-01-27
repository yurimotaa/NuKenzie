import '../Header/style.css'
import logo from '../../assets/logo.png'

export function Header({ setPage }){
    return(
    <header>
        <img src={logo} alt="logo" />
        <button onClick={() => {setPage(true)}}>Início</button>
    </header>
    )
}