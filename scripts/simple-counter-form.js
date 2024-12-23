
export class SimpleCounterForm extends FormApplication {
    static title = "Simple Counter"
    static initialize() {
        console.log('Initialized Simple-Counter');
    }

    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const overrides = {
            height: 'auto',
            width: 'auto',
            id: 'simple-counter-form',
            template: 'modules/simple-counter/templates/form.hbs',
            title: this.title,
            userId: game.userId,
            closeOnSubmit: false,
            submitOnChange: false,
            resizable: true
        };
        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
        return mergedOptions;
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('button[name="sc-increment"]').click(this.ChangeCounter.bind(this));
        html.find('button[name="sc-decrement"]').click(this.ChangeCounter.bind(this));

        //Hooks.once("closeBaCDiceRollerForm", (app, html, data) => {
        //    this._onCloseAppliction(html);
        //});
    }

    async ChangeCounter(event) {
        const button = event.currentTarget;
        const form = button.form;
        let counter = form.getElementsByClassName('SCNumber')[0];
        let str = counter.value;
        let isNumberic = !isNaN(str) && !isNaN(parseFloat(str))
        if(!isNumberic)
            counter.value = 0;

        if(button.name == "sc-increment")
            counter.value = ++counter.value;
        else
            counter.value = --counter.value;
        counter.innerText = counter.value
    }

    async _updateObject(event, formData) {

    }
}