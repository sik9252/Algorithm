/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const startColor = image[sr][sc];
    if (startColor === color) return image;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const row = image.length;
    const col = image[0].length;

    const queue = [[sr, sc]];
    image[sr][sc] = color;

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < row && ny >= 0 && ny < col && image[nx][ny] === startColor) {
                image[nx][ny] = color;
                queue.push([nx, ny]);
            }
        }
    }

    return image;
};