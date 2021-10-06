import { modifier } from 'ember-modifier';

export default modifier(() => {
    console.log('test modifier invoked!');

    return () => {
        console.log('test modifier destroyed!');
    };
});
