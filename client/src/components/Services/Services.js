import './Services.css';

import Service from './Service';
const services = [
	{
		title: 'Modern Web Design',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reiciendis amet id autem ipsum fugit cum reprehenderit perspiciatis? Exercitationem excepturi quo facere ab, molestias illum?',
		logo: 'logo-nodejs',
	},
	{
		title: 'Responsive Web Design',
		logo: 'logo-css3',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reiciendis amet id autem ipsum fugit cum reprehenderit perspiciatis? Exercitationem excepturi quo facere ab, molestias illum?',
	},
	{
		title: 'Mobile App Development',
		logo: 'phone-portrait-outline',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reiciendis amet id autem ipsum fugit cum reprehenderit perspiciatis? Exercitationem excepturi quo facere ab, molestias illum?',
	},
	{
		title: 'Coding Teacher',
		logo: 'code-working-outline',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reiciendis amet id autem ipsum fugit cum reprehenderit perspiciatis? Exercitationem excepturi quo facere ab, molestias illum?',
	},
	{
		title: 'Techincal Writter',
		logo: 'pencil-outline',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reiciendis amet id autem ipsum fugit cum reprehenderit perspiciatis? Exercitationem excepturi quo facere ab, molestias illum?',
	},
	{
		title: 'Tech Youtuber',
		logo: 'logo-youtube',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reiciendis amet id autem ipsum fugit cum reprehenderit perspiciatis? Exercitationem excepturi quo facere ab, molestias illum?',
	},
];
function Services() {
	return (
		<section className='section-services'>
			<div className='container services-container'>
				<h2 className='heading-secondary text-align-center'>Services</h2>
				<p className='text-align-center'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit
				</p>
				<div className='services-cards grid grid--col-3'>
					{services.map((sev) => {
						return (
							<Service
								serviceTitle={sev.title}
								serviceDescription={sev.desc}
								logo={sev.logo}
								logoSize='64px'
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
export default Services;
