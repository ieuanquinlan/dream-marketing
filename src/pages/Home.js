import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import BannerImage from '../assets/bannertop2.jpg'
import FeaturedImage1 from '../assets/dream3.jpg'
import FeaturedImage2 from '../assets/dream1.jpg'

const Home = () => {
	return (
		<>
			<Banner
				text='Why wait for the customer to come to the show when you can take the show to the customer?'
				image={BannerImage}
			/>
			<div className='container spacing'>
				<div className='row bg-gray text-center justify-content-center align-items-center'>
					<div className='col-12 col-md-6'>
						<h1>Our Exhibition Vehicle</h1>
						<p className='mt-5'>
							Our exhibition vehicle gives you the perfect opportunity to come &
							present your technology to all those important people who do not
							manage to get to the traditional trade show anymore. We visit the
							major Design Manufacturing facilities of some of the world’s
							largest Defence & Aerospace companies across the UK, Germany, and
							France.
						</p>
					</div>
					<img
						className='col-12 col-md-6'
						src={FeaturedImage1}
						alt='Exhibition Vehicle'
					/>
				</div>
				<div className='row text-center justify-content-center spacing'>
					<div className='col-10'>
						<h1>Industry Specific Roadshows</h1>
						<p className='mt-5'>
							Industries that we have successfully covered in the last 16 years
							include Defence & Aerospace, Automotive, Rail, Oil & Gas and
							Medical Device Technology. We believe our roadshows are by far the
							best way to connect face to face with Engineering, Purchasing and
							Senior Management directly on their premises. As one of 20
							companies you will enjoy the economies of scale as our tours are
							very competitively priced delivering so much more than the
							traditional trade show.
						</p>
						<p>
							<strong>
								So why not do something a bit different in 2021? Something that
								is unique, innovative, and exciting. Your stand is already in
								place, all we require is your artwork and then you can come and
								meet all those lovely Engineers that don’t go to trade shows
								anymore!
							</strong>
						</p>
						<Link to='/contact'>
							<button className='btn btn-primary mt-5'>
								Contact Us Today!
							</button>
						</Link>
					</div>
					<img className='mt-5' src={FeaturedImage2} alt='Rail Industry' />
				</div>
			</div>
		</>
	)
}

export default Home
