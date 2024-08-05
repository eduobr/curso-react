import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Prueba en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        // console.log(heroe)
        
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe de retornar  undefined si no existe un heroe por ID', () => {
        const id = 100;
        const heroe = getHeroeById(id);

        // console.log(heroe)
        
        expect(heroe).toBe(undefined)
    })

    test('getHeroesByOwner debe de retornar heroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC.length).toBe(3)
        expect(heroesDC).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },  
        ])

        expect(heroesDC).toEqual(heroes.filter( (heroe) => heroe.owner === owner )) 
    })

    test('getHeroesByOwner debe de retornar heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC.length).toBe(2)
        expect(heroesDC).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    })
})
