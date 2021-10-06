import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/features', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        let route = this.owner.lookup('route:main/features');
        assert.ok(route);
    });
});
