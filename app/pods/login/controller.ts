import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Session from 'ember-simple-auth/services/session';

export default class Login extends Controller {
    @service session!: Session;
    @tracked username: string = '';
    @tracked password: string = '';
    @tracked errorMessage: any = null;

    @action
    async authenticate(e: Event) {
        e.preventDefault();
        let { username, password } = this;
        try {
            await this.session.authenticate('authenticator:oauth2', username, password);
        } catch (error) {
            this.errorMessage = error.error || error;
        }

        if (this.session.isAuthenticated) {
            // What to do with all this success?
        }
    }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
    interface Registry {
        login: Login;
    }
}
