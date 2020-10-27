const parkingHandler = require('../../src/domains/parking/handler');
const { Space } = require('../../src/domains/parking/parking');

let path = require('path');
let exec = require('child_process').exec;

test("should return true", () => {
    const parkingSpace = new Space();
    expect(parkingHandler.status(parkingSpace, false)).toBeTruthy();
});

test('should return "Created parking lot with 6 slots"', async () => {
    let result = await cli([path.resolve('./file_input.txt')], '.');
    expect(result.stdout.substring(0, 32)).toBe('Created parking lot with 6 slots');
})

function cli(args, cwd) {
    return new Promise(resolve => {
        exec(`node ${path.resolve('./app.js')} ${args.join(' ')}`,
            { cwd },
            (error, stdout, stderr) => {
                resolve({
                    code: error && error.code ? error.code : 0,
                    error,
                    stdout,
                    stderr
                })
            }
        )
    })
}
