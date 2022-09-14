
function add(a:number, b:number): number{
    return a + b;
}

const addArrow = (a: number,b: number):number =>{
    return a + b;
}

function multiply(number: number, otherNumber?: number, base: number = 2):number{
    return number * base;
}

//const result = add(10, 20);
const result = multiply(10, 20);

console.log(result)

interface CharacterLor{
    name: string;
    hp:number;
    showHp: () => void;
}


function cure(character: CharacterLor, cureX: number): void{
    character.hp += cureX;
}

const newCharacter: CharacterLor ={
    name: 'Strider',
    hp:50,
    showHp(){
        console.log('Health points', this.hp)
    }
}

cure( newCharacter, 30);

newCharacter.showHp()