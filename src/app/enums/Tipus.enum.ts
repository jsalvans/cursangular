export enum Tipus {
    Javascript = "Javascript",
    Typescript = "Typescript",
    Angular = "Angular",
    AngularCLI = "AngularCLI"
}
export namespace Tipus {
    export function values() {
        return Object.keys(Tipus).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}