import { countryCodes, countryCodesList } from './countryCodes';
import { CountryCodeData } from './CountryCodeData';

export class TelephoneUtils {
    constructor() { }

    public getTelephoneCountryCode(telephone: string): string {
        const country = countryCodesList.find(ct => this.contains(telephone, ct));
        if(country)
            return country.code;
        else
            return null;
    }

    private contains(telephone: string, ct: { "name": string; "iso2": string; "code": string; }): boolean {
        const result =  telephone.includes(ct.code);
        return result;
    }

    public getCountryCodeData(telephone: string): CountryCodeData {
        const country = countryCodesList.find(ct => this.contains(telephone, ct));
        if(country)
            return country
        else
            return null;
    }



    public static getPhoneMask(phone: string): string {
        phone = phone ? phone.replace(/\s/g, '') : "";
        if (phone != null && phone.length > 12)
            return '+55 (00) 0 0000-0000';
        else
            return '+55 (00) 0000-00009';
    }


    public static getPhoneMaskPT() {
        return '(00) 0 0000-0000';
    }

    public static getPhoneMaskFix() {
        return '(00) 0000-0000';
    }

    public static getPhoneMaskEN() {
        return '(000) 000-0000';
    }


}

