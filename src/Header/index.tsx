import { cvData } from '../Data';

export const Header = () => (
	<header className='cv-header'>
		<h1>
			CV {cvData.name} {cvData.lastName}
		</h1>
	</header>
);
