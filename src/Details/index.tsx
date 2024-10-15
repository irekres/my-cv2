import { cvData } from '../Data';

export const Details = () => (
	<section className='cv-details'>
		<h2>Experience</h2>
		<ul>
			{cvData.experience.map((experience) => (
				<li key={experience.year}>
					<strong>
						{experience.year} - {experience.description}
					</strong>
				</li>
			))}
		</ul>
		<h2>Education</h2>
		<ul>
			{cvData.education.map((education, index) => (
				<li key={index}>{education}</li>
			))}
		</ul>
	</section>
);
