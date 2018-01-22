export function keep<T> (list: T[], predicate: (input: T) => Boolean) {
    const result = []
    for (const item of list) {
        if (predicate(item)) {
            result.push(item)
        }
    }
    return result
}

export function discard<T>(list: T[], predicate: (input: T) => Boolean) {
    const result = []
    for (const item of list) {
        if (!predicate(item)) {
            result.push(item)
        }
    }
    return result
}