const replaceAt = (str, index, ch) => str.replace(/./g, (c, i) => i === index ? ch : c);

export { replaceAt };