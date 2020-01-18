class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function modifyInput(arr: any[], str: string) {
    return [arr.reduce((acc: any, curr: any) => {
        acc.push(curr.split('|'));
        return acc;
    }, []), str];
}

function sortOut(arr: [], str: string) {
    return arr.sort((a: any, b: any) => {
        return a[str].localeCompare(b[str]);
    })
}

function solve(arr: any[], str: string) {
    const [x, s] = modifyInput(arr, str);

    let b = x.reduce((acc: any, current: any) => {
        let n = new Ticket(`${current[0]}`, Number(`${current[1]}`), `${current[2]}`)
        acc.push(n);
        return acc;
    }, []);

    return sortOut(b, s);
}
console.log(solve(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
));