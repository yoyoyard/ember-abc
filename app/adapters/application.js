import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  coalesceFindRequests: true,

  namespace: 'api/v1',
  host: 'http://10.7.10.3:4000'
});
