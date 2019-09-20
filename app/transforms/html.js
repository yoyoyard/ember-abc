import DS from 'ember-data';
import { htmlSafe } from '@ember/template';

export default DS.Transform.extend({
  deserialize(serialized) {
    let object

    try {
      object = JSON.parse(serialized);
    } catch (e) {
      object = serialized
    }

    if (object.toString() === '[object Object]') {
      return htmlSafe(object.html)
    }
    return object
  },

  serialize(deserialized) {
    return deserialized;
  }
});
