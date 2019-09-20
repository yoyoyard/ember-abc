import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default Service.extend({
  demo: "demo",

  goods: storageFor('demo-store'),

  addGood(i) {
    this.get('goods').pushObject(i)
  }
});
