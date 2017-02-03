import {observable, action, autorun} from 'mobx';

export default class ColorsStore {
    @observable headerColor = 'red';
    @observable containerColor = 'green';
    @observable footerColor = 'yellow';
    @observable leftColumnColor = 'blue';
    @observable rightColumnColor = 'purple';

    @observable isFetching = false;
    @observable didInvalidate = false;

    @action changeRightColumnColor(color){
        this.rightColumnColor = color;
    }

    @action changeFooterColor(color){
        this.footerColor = color;
    }

    @action updateColors(url) {
        this.isFetching = true;
        this.didInvalidate = false;
        fetch(url)
            .then(result => result.json(),
                error => this.failureColors(error))
            .then(json => this.successColors(json))
    }

    @action successColors(data) {
        this.isFetching = false;
        this.didInvalidate = false;
        this.headerColor = data.headerColor;
        this.containerColor = data.containerColor;
        this.footerColor = data.footerColor;
        this.leftColumnColor = data.leftColumnColor;
        this.rightColumnColor = data.rightColumnColor;

    }

    @action failureColors(error) {
        this.isFetching = false;
        this.didInvalidate = true;
    }


    constructor() {
        autorun(() => console.log('Something has been changed'));
    }
}