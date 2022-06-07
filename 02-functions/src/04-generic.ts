function firstElement<Type>(arr: Type[]): Type | undefined{
    return arr[0]
}

firstElement(['1', '2', '3']) // <Type> 為 string
firstElement([1, 2, 3]) // <Type> 為 number