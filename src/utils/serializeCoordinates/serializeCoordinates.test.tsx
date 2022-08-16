import { serializeCoordinates } from './serializeCoordinates';

describe('serializeCoordinates', () => {
  it('should serialize coordinates to string', () => {
    const coordinates = {
      latitude: 48.321321,
      longitude: 23.43432,
    };

    expect(serializeCoordinates(coordinates)).toBe(`${coordinates.latitude},${coordinates.longitude}`);
  });
});
