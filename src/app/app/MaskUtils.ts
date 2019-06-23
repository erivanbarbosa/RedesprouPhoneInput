export class MaskUtils {
    constructor() { }

    public static getTelephoneMaskByCountry(phone: string, code: string): string{
        if(code.toUpperCase() == '+55')
            return this.getPhoneMaskBR(phone);
        else if(code.toUpperCase() == '+1')
            return '(000) 000-0000';
    }
    
    
    public static getPhoneMaskBR(phone: string): string {
        phone = phone ? phone.replace(/\s/g, '') : "";
        if (phone != null && phone.length > 10)
            return '(00) 0 0000-0000';
        else
            return '(00) 0000-00009';
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

