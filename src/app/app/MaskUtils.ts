import { TypeRegister } from '../registers-table/registers-table.component';
import {CountryCodeType} from '../enums/CountryCodeType';
import {AsYouType, parsePhoneNumberFromString} from 'libphonenumber-js';
import {Utils} from '../services/utils.service';

export class MaskUtils {
    constructor() { }

    public static getPhoneMask(phone: string): string {
        phone = phone ? phone.replace(/\s/g, '') : "";
        if (phone != null && phone.length > 12)
            return '+55 (00) 0 0000-0000';
        else
            return '+55 (00) 0000-00009';
    }

    public static getMaskByRegisterType(type: TypeRegister) {
        switch (type) {
            case TypeRegister.CPF:
                return '000.000.000-00';
            case TypeRegister.RG:
                return '00.000.000-0';
            case TypeRegister.CNPJ:
                return '00.000.000/0000-00';
            case TypeRegister.SSN:
                return '000000000';
            case TypeRegister.DRIVING_LICENSE:
                return '00000000000';
        }
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

    public static applyMaskDynamicMobile(countryCode: string) {
        if (countryCode === CountryCodeType.PT) {
            return this.getPhoneMaskPT();
        } else if (countryCode === CountryCodeType.US) {
            return this.getPhoneMaskEN();
        }
    }

    public static applyMaskDynamicFixAndMobile(telephone: string, countryCode: string) {
        if (countryCode === CountryCodeType.PT) {
            if (telephone.length > 13)
                return this.getPhoneMaskPT();
            else
                return this.getPhoneMaskFix();
        } else if (countryCode === CountryCodeType.US) {
            return this.getPhoneMaskEN();
        }
    }

    public static resolvePhoneAndCountryCode(telephone: string) {
        if (telephone != null || telephone != '' || !Utils.isUndefined(telephone)) {
            const phoneConverted = new AsYouType().input(telephone);
            const phoneNumber = parsePhoneNumberFromString(phoneConverted, 'US');
            if (!Utils.isUndefined(phoneNumber)) {
                if (phoneNumber.country == CountryCodeType.PT_CODE) {
                    return { phone: phoneNumber.nationalNumber, country: '+55'};
                } else {
                    return { phone: phoneNumber.nationalNumber, country: '+1'};
                }
            }
        }
    }
}

