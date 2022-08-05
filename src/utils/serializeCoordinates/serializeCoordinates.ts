import { Coordinates } from 'models/Coordinates';

const serializeCoordinates = (coordinates: Coordinates) => `${coordinates.latitude},${coordinates.longitude}`;

export { serializeCoordinates };
