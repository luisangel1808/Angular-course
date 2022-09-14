interface Player{
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const player: Player = {
    volume: 96,
    second: 30,
    song: 'Entra en mi vida',
    details:{
        author: 'Sin Bandera',
        year: 2015
    }
}

const {volume, second, song, details} = player;
const {author} = details;

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [ p1, , p3, p4 ] = dbz;

console.log('Personaje 1:', p1)
//console.log('Personaje 2:', p2)
console.log('Personaje 3:', p3)
console.log('Personaje 4:', p4)

// console.log(volume);
// console.log(second);
// console.log(song);
// console.log(volume);