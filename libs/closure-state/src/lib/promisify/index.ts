export const promisify = (callback: () => void) => {
    return new Promise(resolve => resolve(callback()));
}
