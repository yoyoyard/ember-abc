import DS from 'ember-data';
import dayjs from 'dayjs';

export default DS.Transform.extend({
  deserialize(serialized) {
    return dayjs(serialized);
  },

  serialize(deserialized) {
    return deserialized;
  }
});
