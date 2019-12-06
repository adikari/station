import { graphql } from 'graphql';
import { makeContext } from 'gql/make-context';
import { makeSchema } from 'gql/make-schema';

describe('#Mutation.echo', () => {
  it('has healthcheck mutation endpoint', async () => {
    const query = `
      mutation {
        gatewayEcho(input: {echo: "hello"}) {
          echo
        }
      }
    `;

    const event = {};
    const context = makeContext({ event });

    const { data, errors } = await graphql(makeSchema(), query, null, context);

    expect(errors).toBeUndefined();
    expect(data.gatewayEcho).toEqual({ echo: 'hello' });
  });
});

describe('#Query.healthcheck', () => {
  it('has healthcheck endpoint', async () => {
    const query = `
      {
        gatewayHealthCheck
      }
    `;

    const event = {};
    const context = makeContext({ event });

    const { data, errors } = await graphql(makeSchema(), query, null, context);

    expect(errors).toBeUndefined();
    expect(data.gatewayHealthCheck).toEqual(true);
  });
});
