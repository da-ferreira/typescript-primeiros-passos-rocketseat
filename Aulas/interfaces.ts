interface Game {
    id: number;
    name?: string;
}

interface IPlugin {
    plugin: boolean;
}

let newGame: Game = {
    id: 15,
    name: 'ss',
};

// Unindo duas interfaces
interface Union extends Game, IPlugin {}
