import Route from '@ember/routing/route';

export default Route.extend({
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
