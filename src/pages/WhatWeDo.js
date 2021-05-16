import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import BannerImage from '../assets/tailored1.jpg'
import FeaturedImage from '../assets/dream7.jpg'

const WhatWeDo = () => {
	return (
		<>
			<Banner text='What We Do' image={BannerImage} />
			<div className='container'>
				<div className='row justify-content-center mt-5 bg-gray'>
					<img
						className='col-10 col-md-6'
						src={FeaturedImage}
						alt='Automotive'
					/>
					<div className='col-10 col-md-6 mt-5'>
						<h1 style={{ textAlign: 'center' }}>Why Choose Us?</h1>
						<ul className='mt-5'>
							<li>
								Major Trade Shows Cancelled - Take the show to the customer,
								don’t wait for the customer to come to the show.
							</li>
							<li>
								Mass Gatherings Restricted - Smaller Showcased Events in a
								manageable and safe environment.
							</li>
							<li>
								Marketing Activities Curtailed - An Innovative way to market.
							</li>
							<li>
								Supplier Engagement Reduced - Re-engage with both new and
								existing customers.
							</li>
						</ul>
					</div>
				</div>
				<div className='row justify-content-center text-center spacing'>
					<div className='col-10'>
						<p>
							Your Company will be one of many exhibitors that will be exposed
							across Europe to Major Blue-Chip Organisations and accounts within
							a specific industry. We currently run European Tours in the
							Automotive, Defence & Aerospace and Medical Device Industries
							visiting the major OEM’s and Tier 1 Manufacturers across the UK
							and Central Europe. All our tours are supported by major
							Publications in the Industry giving you amazing coverage.
						</p>
						<p>
							We also organise and run Individual Roadshows for Companies
							wishing to tailor the tours to their individual requirements. Why
							not contact us today and discuss your ideas for a tour?
						</p>
						<Link to='/contact'>
							<button className='btn btn-primary mt-5'>Contact Us</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default WhatWeDo
