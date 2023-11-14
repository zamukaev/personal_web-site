


export function isUndefined(item: string) {

    if (item === 'doc') {
        if (typeof document !== 'undefined') {
            return document;
        }
    }
}