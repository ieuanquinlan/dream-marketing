import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../scss/Header.scss'
import Logo from '../assets/mainlogo.png'

const Header = () => {

	const [checked, setChecked] = useState(false)
	
	const handleChange = (e) => {
		const { checked } = e.target
		setChecked(checked)
	  }
	  
	return (
		<header>
			<img className='logo' src={Logo} alt='Dream Marketing' />
			<input className='menu-btn' type='checkbox' id='menu-btn' onChange={e => handleChange(e)} checked={checked}/>
			<label className='menu-icon' htmlFor='menu-btn'>
				<span className='navicon'></span>
			</label>
			<ul className='menu' id='menu'>
				<ul className='menu-buttons'>
					<NavLink to='/' style={{textDecoration: 'none'}}>
						<li className='blue' onClick={()=>{setChecked(!checked)}}>Home</li>
					</NavLink>

					<NavLink to='/what-we-do' style={{textDecoration: 'none'}}>
						<li className='purple' onClick={()=>{setChecked(!checked)}}>What We Do</li>
					</NavLink>

					<NavLink to='/vehicle-layout' style={{textDecoration: 'none'}}>
						<li className='green' onClick={()=>{setChecked(!checked)}}>Vehicle Layout</li>
					</NavLink>

					<NavLink to='/testimonials' style={{textDecoration: 'none'}}>
						<li className='red' onClick={()=>{setChecked(!checked)}}>Testimonials</li>
					</NavLink>

					<NavLink to='/contact' style={{textDecoration: 'none'}}>
						<li className='orange' onClick={()=>{setChecked(!checked)}}>Contact</li>
					</NavLink>
				</ul>
			</ul>
		</header>
	)
}

export default Header
