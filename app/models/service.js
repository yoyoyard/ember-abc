import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  name: attr(),
  description: attr(),

  studio: belongsTo('studio', {async : true})
});
