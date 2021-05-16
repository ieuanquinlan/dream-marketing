import React from 'react'
import Banner from '../components/Banner'
import BannerImage from '../assets/dream2.jpg'
import FeaturedImage from '../assets/dream6.jpg'

const Testimonials = () => {
	return (
		<div className='testimonials'>
			<Banner text='testimonials' image={BannerImage} />
			<div className='container justify-content-center'>
				<div className='row mt-5'>
					<img
						className='col-12 col-md-5'
						src={FeaturedImage}
						alt='Aerospace'
					/>
					<ul className='col-12 col-md-7'>
						<li>
							<em>
								“Dream Marketing International have certainly delivered what
								they promised! Visiting the rail industry sites, seeing some
								amazing things and above all meeting some important and
								interesting people have made this a thoroughly worthwhile and
								enjoyable experience.”{' '}
							</em>
							<br />
							<p>
								– Helen Richards, Product Marketing Manager, Telemecanique
								Sensors
							</p>
						</li>
						<li>
							<em>
								“I would thoroughly commend the activity of the Dream Marketing
								Defence and Aerospace Technology Roadshow, for a relevant and
								useful way of making a large number of on-site employees aware
								of what current and new technology is available from selected
								suppliers and manufacturers.”
							</em>
							<br />
							<p>– David Banks-Broome, Thales Crawley</p>
						</li>
						<li>
							<em>
								On personal level I would like to recommend you and your team,
								as you did not only organize the whole team , but you impressed
								me by the way you personally welcomed each and every visitors,
								supported us the participants, made lots of small but important
								things that showed how much you care about our success.”{' '}
							</em>
							<br />
							<p>– Mr Amos Nevo, V.P. Business Development, Foamotive</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
