export function area(a, b, c) {
    const s = (a + b + c) / 2
    const area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
    return Math.round(area * 100) / 100
}

export function perimeter(a, b, c) {
    const res = a + b + c
    return a + b + c

}

export function angles(a, b, c) {
    const res1 = Math.acos(((b * b) + (c * c) - (a * a)) / (2 * b * c))
    const res2 = Math.acos(((c * c) + (a * a) - (b * b)) / (2 * c * a))
    const res3 = Math.acos(((a * a) + (b * b) - (c * c)) / (2 * a * b))

    return [(Math.round((res1 * (180 / Math.PI) * 100) / 100)), Math.round(res2 * (180 / Math.PI) * 100) / 100, Math.round(res3 * (180 / Math.PI) * 100) / 100];
}

export function validSides(a, b, c) {

    const smallest = Math.min(a, Math.min(b, c))
    const largest = Math.max(a, Math.max(b, c))
    const middle = (a + b + c) - smallest - largest

    return smallest + middle > largest
}

