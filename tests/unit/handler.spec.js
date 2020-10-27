const parkingHandler = require('../../src/domains/parking/handler');
const { Space } = require('../../src/domains/parking/parking');

describe("status()", () => {
    it("should return true", () => {
        const parkingSpace = new Space();
        expect(parkingHandler.status(parkingSpace)).toBeTruthy();
    });
});
