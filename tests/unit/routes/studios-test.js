import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | studios', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:studios');
    assert.ok(route);
  });
});
