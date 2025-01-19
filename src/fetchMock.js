import countries from './mockCountries'
const countriesResponse = countries;
export async function fetchMock(){
    console.log("fetch called.... is ABCDEF")
    return {
        ok: true,
        status: 200,
        json: async () => countriesResponse,
    };
}