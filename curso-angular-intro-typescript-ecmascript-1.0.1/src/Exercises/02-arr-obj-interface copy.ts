

let skills: string [] = ['Luis', 'Angel', 'Florez']

interface Character{
    name: string;
    hp:number;
    skills: string[];
    hometown?: string;
};

const character: Character= {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
}
