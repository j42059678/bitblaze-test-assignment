export interface IController { }

export interface IRestController<T, Id> extends IController {
    get(): T;
}