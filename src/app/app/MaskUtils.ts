export class MaskUtils {
    constructor() { }

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

