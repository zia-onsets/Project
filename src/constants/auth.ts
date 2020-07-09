import { refinement, String as tString } from 'tcomb-form-native';

const Email = refinement(tString, email => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/; //or any other regexp
    return reg.test(email);
});

const Password = refinement(tString, (password) => {
    return password.length > 5;
});

const MobileNumber = refinement(tString, (mobileNumber) => {
    return mobileNumber.length == 11;
});

const Alphabet = refinement(tString, alphabet => {
    const reg = /^[A-Za-z]+$/; //or any other regexp
    return reg.test(alphabet);
});

const Code = refinement(tString, (code) => {
    return code.length == 6;
});

const Required = refinement(tString, (required) => {
    return required.length > 0;
});
export {
    Code,
    Email,
    Password,
    Alphabet,
    MobileNumber,
    Required
};

