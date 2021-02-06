import './App.css';
import React from 'react'
import {Redirect, Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";



import Baking from './component/Baking';
import Cakes from './component/Cakes';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import DeliveryAndPaiment from './component/DeliveryAndPaiment';
import Dessert from './component/Desseert';
import Login from './component/Login';
import MainPage from './component/MainPage';
import Pie from './component/Pie';
import AboutUs from './component/AboutUs';

import logo from './component/image/Logo.png';
import basket from './component/image/Basket.png';

function App() {
  return (
    <div>
    {/* *********Логотип, поиск, корзина********** */}
      <div>
        <div class='main-logo'>
          <div class='logotype'>
        <img class= 'logo' src={logo} alt="Logo" /> 
        <p class='name'><NavLink exact to="/"><p>Grumpy baker</p></NavLink> <br/> </p>
        </div>
       <div class='search-and-bask'>
      <input class='input' placeholder='Поиск'></input> 
      <p> <NavLink to="/Checkout"><img class= 'basket' src={basket} alt="Logo" /></NavLink> <br/></p>
        </div>
        </div>
      
      <div class="main-menu">
 {/* *********Верхнее меню, логинация********** */}
 <div class="admin">
   <div class='inform'>
   <li> <NavLink to="/about">О нас</NavLink> <br/></li>
   <li><NavLink to="/login">Доставка и оплата</NavLink><br/></li>
   <li > <NavLink to="/contact">Работа</NavLink> <br/></li>
   <li> <NavLink to="/contact">Контакты</NavLink> <br/></li>
    </div>
    <div class='log-menu'>
      <p class='entrance'><NavLink to="/login">Вход</NavLink><br/></p>
      <p class='registr'><NavLink to="/login">Регистрация</NavLink><br/></p>
      </div>
</div>
{/* *********Меню продукции********** */}
<div class='main-border'>
<div class= 'propose'>Что мы предлагаем?</div><br/>
<div class="eat">
     <p class='cake'>  <NavLink to="/cakes">Торты</NavLink> </p>
     <p class='cupcakes'>  <NavLink to="/dessert">Капкейки</NavLink></p>
     <p class='cheesecakes'>   <NavLink to="/pie">Чизкейки</NavLink> </p>
     <p class='baking'>   <NavLink to="/baking">Печение</NavLink> </p>
 </div>

{/* *********Контент что меняеться********** */}

      <div>
      <Switch>
          <Route path='/about' component={AboutUs}/>
          <Route path='/cakes' component={Cakes}/>
          <Route path='/dessert/' component={Dessert}/>
          <Route path='/pie/' component={Pie}/>
          <Route path='/baking/' component={Baking}/>
          <Route path='/contact/' component={Contact}/>
          <Route path='/checkout/' component={Checkout}/>
          <Route path='/login/' component={Login}/>
                   
          <Route exact path='/' component={MainPage}/>
          
          </Switch>
      </div>
      </div>

{/* *********Форма для подписки********** */}
<div class="subskribe">
  <input  placeholder="Email"></input>
  <button>Подписаться</button>
</div>
{/* *********Нижнее меню********** */}

<div class='second-menu'>

<div class='second-logo'>
        <img class= 'logo' src={logo} alt="Logo" /> 
        <p class='name'><NavLink exact to="/"><p>Grumpy baker</p></NavLink> <br/> </p>
        </div>
      <div class="inf-block">
<div class="inform-last">
<li> <NavLink to="/contact">Компания</NavLink> <br/></li>
  <li> <NavLink to="/contact">Доставка и оплата</NavLink> <br/></li>
   <li><NavLink to="/login">Отзывы</NavLink><br/></li>
    <li> <NavLink to="/contact">Контакты</NavLink> <br/></li>
</div>
<div  class="inform-last">
  <div>Мы в соцсетях</div>
<li> <NavLink to="/contact">Facebook</NavLink> <br/></li>
   <li><NavLink to="/login">Instagram</NavLink><br/></li>
   
</div>
</div>
</div>

      
      </div>
      </div>
    </div>
  );
}

export default App;