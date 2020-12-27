namespace ProxySolution {
    interface ICovid {
        getData(): Promise<{
            confirm: number,
            recovered: number,
            deaths: number
        }>
    }

    let tempData: any = null;

    
    class Covid implements ICovid {
        constructor(public country: string) {

        }

        async getData() {
            const response: any = await fetch.fetchUrl(`https://covid19.mathdro.id/api/countries/${this.country}`);
            console.log('response', response);
            
            const data: any = await response;

            tempData = data;

            return {
                confirm: data.confirm.value,
                recovered: data.recovered.value,
                deaths: data.deaths.value,
            }
        }
    }

    class ProxyCovid implements ICovid {
        constructor(private covid: Covid) {}

        async getData() {
            if (tempData) {
                console.log('didapat dari database');
                return {
                    confirm: tempData.confirm.value,
                    recovered: tempData.recovered.value,
                    deaths: tempData.deaths.value,
                }
                
            }
            console.log('didapat dari api');
            return this.covid.getData();
        }
    }

    const getCovid = async () => {
        const covid1 = new ProxyCovid(new Covid('id'));
        console.log(await covid1.getData());
    }
    getCovid()
    
}