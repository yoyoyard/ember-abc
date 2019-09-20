import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { A } from '@ember/array';

export default Controller.extend({
  demo: service(),

  helloArray: A([1,2,3,4,5,6,7]),

  // goods: alias('demo.goods'),

  actions: {
    addGood(i) {
      this.get('demo').addGood(i);
      // console.log(this.get('demo.goods'))
    }
  }
});
