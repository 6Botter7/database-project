class ViewModel {
    constructor() {
        console.log('Index');
    }

    async connectedCallback() {
        console.log('Index connectedCallback');
    }
}

globalThis.viewModel = new ViewModel();