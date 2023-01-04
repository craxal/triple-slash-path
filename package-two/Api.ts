/// <reference path="../node_modules/package-one/TestFile.d.ts" />

export type DoSomethingArgs = {
    property: string;
};

export function doSomething(args: DoSomethingArgs): any {
    return window.custom.getSomething();
}