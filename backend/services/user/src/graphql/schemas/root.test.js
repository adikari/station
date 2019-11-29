const { graphql } = require('graphql');
const { makeContext } = require('../make-context');
const { makeSchema } = require('../make-schema');
const { getEvent } = require('../../util/testUtil');

describe('#Mutation.echo', () => {
  it('gets user by email', async () => {
    const query = `
      mutation {
        userEcho(input: {echo: "hello"}) {
          echo
        }
      }
    `;

    const context = makeContext({ event: getEvent({ id: '123' }) });

    const { data, errors } = await graphql(makeSchema(), query, null, context);

    expect(errors).toBeUndefined();
    expect(data.userEcho).toEqual({ echo: 'hello' });
  });
});

describe('#Query.healthcheck', () => {
  it('gets user by email', async () => {
    const query = `
      {
        userHealthCheck
      }
    `;

    const context = makeContext({ event: getEvent({ id: '123' }) });

    const { data, errors } = await graphql(makeSchema(), query, null, context);

    expect(errors).toBeUndefined();
    expect(data.userHealthCheck).toEqual(true);
  });
});
