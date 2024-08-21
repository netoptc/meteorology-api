import { StormGlass } from "@src/clinets/StormGlass"
import axios from "axios"

jest.mock('axios');

describe("StormGlass client", () => {
    it('should return the normalized forecast from the StormGlass serive', async () => {
        const lat = -33.7912
        const lng = 123.124882
        
        axios.get = jest.fn().mockResolvedValue({})
        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual({});
    })
})