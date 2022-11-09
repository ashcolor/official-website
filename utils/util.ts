export namespace util {
    export const nl2br = (str) => {
        str = str.replace(/\r\n/g, "<br />");
        str = str.replace(/(\n|\r)/g, "<br />");
        return str;
    };
    export const dateStringFormat = (dateString: string, format: string) => {
        const date = new Date(dateString);
        format = format.replace(/yyyy/g, date.getFullYear().toString());
        format = format.replace(/MM/g, ("0" + (date.getMonth() + 1).toString()).slice(-2));
        format = format.replace(/dd/g, ("0" + date.getDate().toString()).slice(-2));
        format = format.replace(/HH/g, ("0" + date.getHours().toString()).slice(-2));
        format = format.replace(/mm/g, ("0" + date.getMinutes().toString()).slice(-2));
        format = format.replace(/ss/g, ("0" + date.getSeconds().toString()).slice(-2));
        format = format.replace(/SSS/g, ("00" + date.getMilliseconds().toString()).slice(-3));
        return format;
    };
}
