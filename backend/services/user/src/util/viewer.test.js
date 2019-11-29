const { getViewer } = require('./viewer');

describe('#viewer', () => {
  it('should return empty object when no viewer', () => {
    const viewer = getViewer({ event: null });

    expect(viewer).toEqual({});
  });

  it('should return empty object on error', () => {
    const viewer = getViewer({ event: { headers: { viewer: 123 } } });

    expect(viewer).toEqual({});
  });
});
