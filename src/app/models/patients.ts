export interface Patients {
    id: string;
    email: string;
    password: string;
    fName: string;
    middleInitial: string;
    lName: string;
    dob: string;
    address: {
        street: string,
        city: string,
        state: string,
        zipcode: number,
    };
    primaryPhone: number;
    secondaryPhone: number;
    gender: string;
    ssn: number;
    emergencyContact: {
        fName: string,
        lName: string,
        phone: number
    };
    insurance: {
        policyNumber: number,
        groupNumber: number,
        policyHolder: {
            fName: string,
            lName: string,
            ssn: number,
            dob: string
        }
    }
}