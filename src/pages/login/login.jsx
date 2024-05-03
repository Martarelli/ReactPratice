import {useState } from 'react'
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.png';
import '../../styles/login/login.css';
import Header from '../../components/header/header';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase';

// import { db } from './firebase';
// import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';



export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if(!email || !password){
        throw new Error('Email e Senha são OBRIGATÓRIOS!')
      }
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  return (
  
    <div>
      <Header/>
      <div className="container">
        <header className="header">
          <img src={logo} alt="logo" />
          <span>Faça seu Login :)</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              value={email}
              onChange={(event)=> setEmail(event.target.value)}
              placeholder="Digite seu email..."/>
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={password}
              onChange={(event)=> setPassword(event.target.value)}
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
      <div></div>
    </div>
  )
}
