// To use a module, we have to prefix every variable, function or class with export keyword.

export const PI = 3.14159;

export function getCirumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return 2 * radius * radius;
}

export function getVolume(radius) {
    return (4 / 3) * PI * radius * radius * radius;
}
