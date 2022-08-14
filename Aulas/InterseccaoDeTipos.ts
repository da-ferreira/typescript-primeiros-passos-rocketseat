type Profile = {
    id: number;
    name: string;
};

type Char = {
    nickname: string;
    level: number;
};

// Unindo tipos
type Player = Profile & Char;

let info: Player = {
    id: 1,
    name: 'Jorge',
    nickname: 'jorgito',
    level: 50,
};
