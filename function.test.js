require('functions.js')

test('should run', () => expect(2).toBe(2))


test('testing greeting', () =>{
        expect(greeting('James')).toBe('Hello, James')
        expect(greeting('Jill').toBe('Hello, Jill'))
    })

    it('should add num1 and num2', () => {
        expect(add(1,2)).toEqual(3)
        expect(add(5,9)).toEqual(14)

    })
