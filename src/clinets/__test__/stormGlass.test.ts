import { StormGlass } from '@src/clinets/StormGlass';
import axios from 'axios';
import stormglassNormalizedResponse3Hours from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import stormglassWeather3Hours from '@test/fixtures/stormglass_weather_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass serive', async () => {
    const lat = -33.7912;
    const lng = 123.124882;

    axios.get = jest.fn().mockResolvedValue({ data: stormglassWeather3Hours });
    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormglassNormalizedResponse3Hours);
  });
});
