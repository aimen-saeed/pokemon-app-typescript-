import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMoreDetailsQuery } from '../../Store/pokemonApi'; // Make sure to import Pokemon type from pokemonApi
import './EachPokemon.css';

interface AppProps {
  pokemon: {
    name: string;
  };
}

const EachPokemon: FC<AppProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const redirectToDetails = (name: string, pokemonData: {}) => { 
    navigate(`/${name}`, {
      state: {
        pokemon_data: { pokemon: pokemonData }, 
      },
    });
  };
  const moreInfo = useGetMoreDetailsQuery(pokemon.name);

  return (
    <div
      className="pokemon-card link"
      onClick={() => redirectToDetails(pokemon.name, moreInfo.data)}
    >
      <img
        src={moreInfo.data?.sprites?.front_default}
        alt="pokemon-img"
        className="pokemon-image"
      />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default EachPokemon;
