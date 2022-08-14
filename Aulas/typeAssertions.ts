// asserção de tipo

type UserResponse = {
    id: number;
    name: string;
    avatar: string;
};

// Informando ao TS que essa variável é do tipo 'UserResponse',
// Ou seja, esse objeto tem que ser desse tipo
let userResponse = {} as UserResponse;
