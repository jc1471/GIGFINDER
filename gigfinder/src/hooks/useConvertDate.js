export default function useConvertDate (date) {

        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(2, 4);
        return [day, month, year];
}