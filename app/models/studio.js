import DS from 'ember-data';
import { computed } from '@ember/object'

const { Model, attr, hasMany } = DS;

export default Model.extend({
  avatar: attr('json'),
  name: attr(),
  hospital: attr(),
  description: attr('html'),
  insertedAt: attr(),

  services: hasMany('service', {async: true}),
  places: hasMany('place', {async: true}),

  avatarUrl: computed('avatar', function () {
    let firstAvatar = this.get('avatar.firstObject')
    if (firstAvatar) {
      return firstAvatar.url
    }
    return 'default url'
  })
});
