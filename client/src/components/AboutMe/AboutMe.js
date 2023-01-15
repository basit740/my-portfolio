import './AboutMe.css';

import userProfileImg from '../../assets/img/userProfile.jpg';

import SkillBar from '../skillbars/SkillBar';
function AboutMe() {
	return (
		<section className='section-about-me'>
			<div className='about-me-content container'>
				<div className='about-me-card'>
					<div className='basic-data'>
						<div className='bio-data'>
							<div className='img-box'>
								<img className='img-user-profile' src={userProfileImg} alt='' />
							</div>
							<div className='bio-text-box'>
								<p className='bio-data-row'>
									<strong>Name: </strong> <span>Nicholas</span>
								</p>
								<p className='bio-data-row'>
									<strong>Profile: </strong> <span>Full Stack Developer</span>
								</p>
								<p className='bio-data-row'>
									<strong>Email: </strong> niclholas@gmail.com
								</p>
								<p className='bio-data-row'>
									<strong>Phone:</strong> 92992343
								</p>
							</div>
						</div>

						<div className='skill-bars'>
							<h3 className='ter-heading'>Skills</h3>
							<div className='skill'>
								<p className='skill-title'>HTML 85%</p>
								<SkillBar skillPer='85%' />
							</div>

							<div className='skill'>
								<p className='skill-title'>CSS 95%</p>
								<SkillBar skillPer='95%' />
							</div>

							<div className='skill'>
								<p className='skill-title'>JavaScirpt 90%</p>
								<SkillBar skillPer='90%' />
							</div>

							<div className='skill'>
								<p className='skill-title'>React 80%</p>
								<SkillBar skillPer='80%' />
							</div>
						</div>
					</div>
					<div className='about-text'>
						<h2 className='heading-secondary'>About Me</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
							aperiam fugit ipsum voluptatibus optio consequatur deleniti
							eveniet at eaque minima culpa omnis facilis commodi voluptatum
							corrupti id error? Consequuntur, doloribus.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
							aperiam fugit ipsum voluptatibus optio consequatur deleniti
							evenie.
						</p>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
							aperiam fugit ipsum voluptatibus optio consequatur deleniti
							eveniet at eaque minima culpa omnis facilis commodi voluptatum
							corrupti id error? Consequuntur, doloribus.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
