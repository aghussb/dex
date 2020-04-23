import Formatter from '../formatter.js';

const fakeClient = {
  formatter(builder) {
    return new Formatter(fakeClient, builder);
  },
};

export default fakeClient;
