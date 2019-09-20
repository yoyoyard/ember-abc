import DS from 'ember-data';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.JSONAPIAdapter.extend(TokenAuthorizerMixin, {
  coalesceFindRequests: true,

  namespace: 'api/v1',
  host: 'http://10.7.10.3:4000'
});
