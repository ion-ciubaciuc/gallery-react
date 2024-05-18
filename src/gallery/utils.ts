export const mod = (dividend: number, divisor: number) => {
    return ((dividend % divisor) + divisor) % divisor;
};
