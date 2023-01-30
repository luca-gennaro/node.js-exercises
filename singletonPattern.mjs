class singletonPattern {
    output(value){
        console.log(`hello world, ${value}`)
    }
}


export const singletonPatternInstance = new singletonPattern()

singletonPatternInstance.output("luca")