import { countryCodesList } from './countryCodes';
import { CountryCodeData } from './CountryCodeData';

export class TelephoneUtils {
    constructor() { }

    public getTelephoneCountryCode(telephone: string): string {
        const country = this.findCountryByTelephone(telephone);
        return country ? country.code : null;
    }

    public getCountryCodeData(telephone: string): CountryCodeData {
        const country = this.findCountryByTelephone(telephone);
        return country ? country : null;
    }

    private findCountryByTelephone(telephone: string) {
        return countryCodesList.find(country => this.contains(telephone, country));
    }

    private contains(telephone: string, country: CountryCodeData): boolean {
        return telephone.includes(country.code);
    }
}

