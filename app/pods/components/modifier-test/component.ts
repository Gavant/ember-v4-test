import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import NotificationService from 'ember-cli-notifications/services/notifications';
import ENV from 'ember-v4-test/config/environment';

interface ModifierTestArgs {}

export default class ModifierTest extends Component<ModifierTestArgs> {
    @service notifications!: NotificationService;

    testVar = ENV.testVar;

    @action
    onDidInsert() {
        console.log('<ModifierTest /> was inserted in the DOM!');
    }
}
