/**
 * Tipo generico, a partir do momento da criação, ele permanece daquele tipo durante toda execução.
 *
 * Alguns padrões para generics:
 *
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

// Se ele não definir um tipo, o padrão é string
function useState<T extends string | number = string>() {
    let state: T;

    function get(): T {
        return state;
    }

    function set(newState: T) {
        state = newState;
    }

    return { get, set };
}

const state = useState();
console.log(state.get());
state.set('145asda5');
console.log(state.get());
