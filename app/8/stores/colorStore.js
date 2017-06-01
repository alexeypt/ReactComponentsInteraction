import {observable, computed, action, autorun} from 'mobx';

export default class ColorsStore {
    @observable headerColor = 'red';
    @observable containerColor = 'green';
    @observable footerColor = 'yellow';
    @observable leftColumnColor = 'blue';
    @observable rightColumnColor = 'purple';

    @computed get headerHexColor(){
        return this.stringToColor(this.headerColor);
    }

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
        autorun(() => console.log(`Header color: ${this.headerColor}, Container color: ${this.containerColor}, Footer color: ${this.footerColor}`));
    }

    stringToColor(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    }
}