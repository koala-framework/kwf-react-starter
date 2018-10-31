import "es6-shim";
import "es7-shim";

declare global {
    /* tslint:disable */
    const __trl: (text: string, values?: string | number | string[] | number[]) => string;
    const __trlc: (context: string, text: string, values?: string | number | string[] | number[]) => string;
    const __trlp: (singularText: string, pluralText: string, values: string | number | string[] | number[]) => string;
    const __trlcp: (context: string, singularText: string, pluralText: string, values: string | number | string[] | number[]) => string;
    const __trlKwf: (text: string, values?: string | number | string[] | number[]) => string;
    const __trlcKwf: (context: string, text: string, values?: string | number | string[] | number[]) => string;
    const __trlpKwf: (singularText: string, pluralText: string, values: string | number | string[] | number[]) => string;
    const __trlcpKwf: (context: string, singularText: string, pluralText: string, values: string | number | string[] | number[]) => string;
    /* tslint:enable */
}
