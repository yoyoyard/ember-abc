import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { observer } from '@ember/object';

export default Component.extend({
  classNames: ['a', 'b'],
  tagName: 'section',

  store: service(),
  demo: service(),

  data: A([
    { kind: 'one', value: 1 },
    { kind: 'one', value: 1 },
    { kind: 'two', value: 2 },
    { kind: 'two', value: 2 },
    { kind: 'three', value: 3 },
    { kind: 'three', value: 3 },
    { kind: 'four', value: 4 },
    { kind: 'four', value: 4 },
  ])
});
