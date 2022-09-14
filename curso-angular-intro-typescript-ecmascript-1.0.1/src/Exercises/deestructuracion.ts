interface Product{
    desc:string;
    price:number;
}

const phone: Product = {
    desc: 'Nokia 1108',
    price: 150,   
}

const tablet: Product = {
    desc: 'Ipad Air',
    price: 350,   
}

function calculateIVA(products: Product[]){
    let total =  0;
    products.forEach(({price}) => total +=price) 
    return [total, total * 0.15]
}

const articles = [phone, tablet]

const [total, IVA] = calculateIVA(articles)

console.log(total)
console.log(IVA)