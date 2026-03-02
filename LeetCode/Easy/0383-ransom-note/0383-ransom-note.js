/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    
    const alpha = Array.from({length: 26}, () => 0);

    for (let i = 0; i < magazine.length; i++) {
        const idx = magazine.charCodeAt(i) - 97;
        alpha[idx]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const idx = ransomNote.charCodeAt(i) - 97;
        alpha[idx]--;

        if (alpha[idx] < 0) return false;
    }

    return true;
};