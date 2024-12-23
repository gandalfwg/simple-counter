import {SimpleCounterForm} from "./simple-counter-form.js";

Hooks.on("renderSidebarTab", async (app, html) => {
    if (app.options.id == "chat") {
      let icon = html.find('.chat-control-icon');
      icon.click(ev => {
          //console.log('clicked it');
          let options = {};
          new SimpleCounterForm(options).render(true, {focus: true});
      });
    }
  });