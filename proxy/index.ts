import fetch from 'node-fetch';

interface ICovid {
    getData(): Promise<{
        confirm: number,
        recovered: number,
        deaths: number
    }>
}

class Covid implements ICovid {
    constructor(public country: string) {

    }

    async getData() {
        const response = await fetch(`https://covid19.mathdro.id/api/countries/${this.country}`);
        const data = await response.json();

        return {
            confirm: data.confirm.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
        }
    }
}

const covid = new Covid('id');
console.log(covid.getData());
