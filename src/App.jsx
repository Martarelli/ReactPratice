import logo from './assets/logo.png'
import arrow from './assets/arrow.png'
import './App.css'
export function App() {

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo" />
        <span>Faça seu Login :)</span>
      </header>
      <form>
        <div className="inputContainer">
          <label htmlFor="email">Usuário</label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder="Digite seu usuário..."/>
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Digite seu Password..."/>
        </div>

        <a href="">Esqueceu sua senha?</a>

        <button className="button">
          Se Conectar
          <img src={arrow} alt="arrow" />
        </button>

        <div className="footer">
          <p>Não tem usuário?</p>
          <a href="">Criar Usuário</a>
        </div>
      </form>
    </div>
  )
}
