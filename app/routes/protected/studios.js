import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  demo: service(),

  model() {
    return this.store.findRecord('studio', 10)
    // return this.store.findRecord('studio', 10)
    //   .then(studio => {
    //     return RSVP.all([
    //       studio.get('services'),
    //       studio.get('places')
    //     ]).then(() => {
    //       return studio
    //     })
    //   })
  }
});
