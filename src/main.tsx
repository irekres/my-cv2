import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

interface Experience {
	year: number;
	description: string;
}
interface CVData {
	photo: string;
	name: string;
	lastName: string;
	position: string;
	experience: Experience[];
	education: string[];
}

const cvData: CVData = {
	photo: 'https://placehold.co/400x400?text=MG',
	name: 'Marcin',
	lastName: 'Gula',
	position: 'developer',
	experience: [
		{ year: 2020, description: 'Lorem ipsum' },
		{ year: 2023, description: 'Dolor sit amet' },
	],
	education: ['lorem ipsum', 'dolor sit amet', 'Kot ma Alę'],
};

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<main className='cv-main'>
			<header className='cv-header'>
				<h1>
					CV {cvData.name} {cvData.lastName}
				</h1>
			</header>
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
		</main>
	</StrictMode>
);
