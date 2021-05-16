import React from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Picture1 from '../assets/tailored2.jpg'
import Picture2 from '../assets/tailored3.jpg'
import Picture3 from '../assets/tailored4.jpg'
import Picture4 from '../assets/tailored5.jpg'
import BannerImage from '../assets/dream4.jpg'

const VehicleLayout = () => {
	const gallery = [Picture1, Picture2, Picture3, Picture4]

	return (
		<>
			<Banner text='Vehicle Layout' image={BannerImage} />
			<div className='container spacing'>
				<div className='row justify-content-center text-center'>
					<p className='col-12 col-md-8'>
						Inside our unique Exhibition trailer we have up to 24 Exhibition
						Stands. We invite companies to come with us to showcase their
						technologies on board. We visit prime industry sites and meet
						Engineering, Production, Design and Development Teams who rarely get
						the chance these days to visit the more traditional trade shows.
					</p>
					<div className='col-12 mt-5 gallery'>
						<Gallery gallery={gallery} />
						<p className='mt-3' style={{ fontSize: '14px' }}>
							Swipe to browse images
						</p>
					</div>
					<div className='col-12 col-md-8 mt-5'>
						<p>
							Over the last 16 years we have run Industry Specific Roadshows in
							the Automotive, Defence & Aerospace, Rail, Medical Device
							Technology and Oil & Gas Industries. In 2021 we plan to run our
							Rail Industry Tour in March, and Defence & Aerospace Tour in
							September. These tours will put you on site, in front of the
							hard-to-reach Engineers, and deliver a unique sales and marketing
							opportunity.
						</p>
						<h3 className='mt-5'>
							Your Specification and Design – Endless Options
						</h3>
					</div>
				</div>
				<div className='row justify-content-center mt-3'>
					<ul className='col-10 col-lg-6'>
						<li>Do what you like with this 65 Cubic Metre space.</li>
						<li>
							Tailor it to your own specification and design and take it
							wherever you want to go.
						</li>
						<li>
							Showcase your technology to existing and new customers in a unique
							environment.
						</li>
						<li>
							Use it for training, presentations, and hospitality. The options
							are endless.
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default VehicleLayout
