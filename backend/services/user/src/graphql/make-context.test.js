const { makeContext } = require('./make-context');

describe('#makeContext', () => {
  it('should throw error if no lambda event', async () => {
    const result = makeContext({ event: null });

    await expect(result).rejects.toThrow(new Error('No lambda event detected'));
  });
});
