// Stub Seed:
// Used for now in browser builds, where filesystem access isn't
// available.
const StubSeed = (function () {});

const noSuchMethod = async function () {
  throw new Error('Seeds are not supported');
};

StubSeed.prototype = {
  make: noSuchMethod,
  run: noSuchMethod,
};

export default StubSeed;