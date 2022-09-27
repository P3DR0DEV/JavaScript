import 'core-js/stable';
import 'regenerator-runtime/runtime'; 
// import './assets/css/style.css';

import Login from './modules/formLogin'

const login = new Login('.formLogin');
const cadastro = new Login('.formCadastro');

login.init();
cadastro.init()


