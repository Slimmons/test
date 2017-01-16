export class User {
    //title is something similar to, composer, trumpet player, violinist, or anything they specify maybe?  Not sure if I want values they can pick from.
    //organization will eventually not be a string, and be a class, of organization type. but for now...string
    //reputation will also probably end up as a class....not sure, maybe not.
    //following will probably be an array of users, that you follow, just like youtube subscribe I think
    constructor(public name: string, public title: string, public organization: string, public reputation: string, public following: string) {}
}
