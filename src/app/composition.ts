export class Composition {
    //not sure about instrumentation yet.  need a way to track all of that, but not sure how yet.
    //activity, how many views, or contributions....or some amount of the two...not sure yet.  maybe some kind of score?
    constructor(public composer: string, public instrumentation: string, public difficulty: string, public activity: number, public compositionID: number) {}
}
