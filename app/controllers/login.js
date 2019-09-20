import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    performLogin() {
      let credentials = this.getProperties('name', 'password');
      const authenticator = 'authenticator:token';

      this.get('session').authenticate(authenticator, credentials).then(
        () => {
          alert('login success!');
        },
        () => {
          alert('login failed!');
        }
      );
    }
  }
});
