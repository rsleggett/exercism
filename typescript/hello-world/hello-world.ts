class HelloWorld {
    static hello(name?: String) {
        if (!name) {
            name = "World"
        }
        return `Hello, ${name}!`
    }
}

export default HelloWorld