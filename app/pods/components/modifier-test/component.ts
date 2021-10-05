import Component from '@glimmer/component';

interface ModifierTestArgs {}

export default class ModifierTest extends Component<ModifierTestArgs> {
    onDidInsert() {
        console.log('I was inserted in the DOM!');
    }
}
