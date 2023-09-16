const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "Velvet"];
const ordinal = ["th","st","nd","rd"];

for (let i = 0; i < colors.length; i++) {
    const ord = i < ordinal.length ? i + 1: 0;
    const suff = ordinal[ord];
    console.log(`${i + 1} ${suff} choice is ${colors[i]}`)
}
