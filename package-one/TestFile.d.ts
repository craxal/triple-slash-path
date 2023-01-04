declare global {
    interface CustomWindowApi {
        getSomething(): any;
    }

    interface Window {
        custom: CustomWindowApi;
    }
}
