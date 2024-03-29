import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  address: attr(),

  studio: belongsTo('studio')
});
