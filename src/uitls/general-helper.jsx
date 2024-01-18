const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const isHavingSpecialChars = (input) => specialChars.test(input);

export { isHavingSpecialChars };
