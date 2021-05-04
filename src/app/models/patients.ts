export interface Patients {
    email: String;
    password: String;
    fName: String;
    middleInitial: String;
    lName: String;
    dob: String;
    address: {
        street: String,
        city: String,
        state: String,
        zipcode: Number,
    };
    primaryPhone: Number;
    secondaryPhone: Number;
    gender: String;
    ssn: Number;
    emergencyContact: {
        fName: String,
        lName: String,
        phone: Number
    };
    insurance: {
        policyNumber: Number,
        groupNumber: Number,
        policyHolder: {
            fName: String,
            lName: String,
            ssn: Number,
            dob: String
        }
    }
}