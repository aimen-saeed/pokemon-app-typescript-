import { FC } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './pokemonDetails.css'

interface PokemonData {
	height: number;
	sprites?: {
		front_default: string;
	};
	types: {
		type: {
			name: string;
			url: string;
		};
	}[];
	weight: number;
}

interface TypeArr {
	type: {
		name: string;
		url: string;
	};
}

const PokemonDetails: FC = () => {
	const location = useLocation();
	const { name } = useParams<{ name: string }>();
	const types: TypeArr[] = location.state.pokemon_data.pokemon.types;

	return (
		<div>
			<Navbar title={name}></Navbar>

			<img
				src={location.state.pokemon_data.pokemon.sprites?.front_default}
				alt="pokemon-img"
				className="pokemon-image-d pokemon-card"
			/>
			<table id="vertical-1" className="pokemon-details bordered-table">
				<tbody>
					<tr>
						<th>Name</th>
						<td>{name}</td>
					</tr>
					<tr>
						<th>Weight</th>
						<td>{location.state.pokemon_data.pokemon.weight} kg</td>
					</tr>
					<tr>
						<th>Height</th>
						<td>{location.state.pokemon_data.pokemon.height} cm</td>
					</tr>
					<tr>
						<th>Types</th>
						{types.map((type: TypeArr, index: number) => (
							<tr key={index}>
								<td>{type.type.name}</td>
							</tr>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default PokemonDetails;