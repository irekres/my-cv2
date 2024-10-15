import { cvData } from '../Data';

export const Personal = () => (
	<aside className='cv-personal'>
		<h2>Personal data</h2>
		<img
			className='cv-photo'
			src={cvData.photo}
			alt={`${cvData.name} ${cvData.lastName} profil photo`}
		/>
		<p>
			{cvData.name} {cvData.lastName}
		</p>
		<small>{cvData.position}</small>
	</aside>
);
