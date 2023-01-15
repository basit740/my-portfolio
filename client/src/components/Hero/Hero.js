import './Hero.css';

import HeroImg from '../../assets/img/hero.jpeg';
function Hero() {
	return (
		<section className='section-hero'>
			<div className='section-hero-content'>
				<div className='text-box'>
					<h1 className='heading-primary'>I am Nicholas</h1>
					<p className='description'>
						A Full-stack web developer and passionate programmer.
					</p>
				</div>

				<div className='img-box'>
					<img src={HeroImg} alt='' />
				</div>
			</div>
		</section>
	);
}

export default Hero;

// web application dev
// web design
// Responsive Design
// Mobile Application
// Python Programming
