function stringChop(str, size) {
    // Step 1: Check if str is null or empty
    if (!str) return [];

    // Step 2: Check if size is a positive integer
    if (size <= 0) return [];

    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        // Step 3: Slice the string into chunks
        chunks.push(str.substring(i, i + size));
    }
    return chunks;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
