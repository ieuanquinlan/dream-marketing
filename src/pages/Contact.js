import React, { useState } from 'react'
import Banner from '../components/Banner'
import FeaturedImage from '../assets/bannertop2.jpg'

const Contact = () => {
	const [formData, setformData] = useState({
		name: '',
		company: '',
		email: '',
		subject: '',
		message: '',
	})

	const { name, company, email, subject, message } = formData

	function onChange(e) {
		setformData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<>
			<Banner text='Contact' image={FeaturedImage} />
			<div className='contact container spacing'>
				<div className='row justify-content-center text-center'>
					<div className='col-12 col-md-6'>
						<h3>For a full information pack please contact</h3>
						<p>John Smith of Dream Marketing International Ltd on:</p>

						<ul>
							<li>Tel: +44 (0)1234 567890</li>
							<li>Email: john@example.com</li>
						</ul>
					</div>
				</div>
				<div className='row justify-content-center'>
					<form className='form col-10 col-md-6'>
						<label htmlFor='name'>
							Name
							<input
								type='text'
								name='name'
								value={name}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<label htmlFor='company'>
							Company
							<input
								type='text'
								name='company'
								value={company}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<label htmlFor='email'>
							Email Address
							<input
								type='email'
								name='email'
								value={email}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<label htmlFor='subject'>
							Subject
							<input
								type='text'
								name='subject'
								value={subject}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<label htmlFor='message'>
							Message
							<textarea
								type='text'
								name='message'
								value={message}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<button
							type='submit'
							className='btn btn-primary mt-5'
							value='submit'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Contact
