/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {

    if (x < 0) return false;

    if (x >= 0 && x <= 9) return true;

    const result = x.toString().split('');
    const revert = [...result].reverse();

    for (let i = 0; i < result.length; i += 1) {
        if (result[i] !== revert[i]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome(12321));
