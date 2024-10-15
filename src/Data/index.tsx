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

export const cvData: CVData = {
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
