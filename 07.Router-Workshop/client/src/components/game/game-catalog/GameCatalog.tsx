    import GameCatalogItem from './game-catalog-item/GameCatalogItem';
    import { useGetAllGames } from '../../../hooks/useGames';
    import Game from '../../../types/Game';

    export default function GameCatalog() {
        const [games] = useGetAllGames();

        return (
            <section id="catalog-page">
            <h1>All Games</h1>
            
            {games.length > 0
                ? games.map(game => <GameCatalogItem key={game._id} {...game}/>)
                : <h3 className="no-articles">No games yet</h3>
            }        

        </section>
        );
    }
