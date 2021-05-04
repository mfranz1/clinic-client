export interface Patients{
    id: object;
    fName: string;
    email: string;
    password: string;
    middleInitial: string;
    lName: string;
    dob: string;
    address: {
        city: string;
        state: string;
        street: string;
        zipcode: number;
    }
    primaryPhone: number;
    secondaryPhone: number;
    gender: string;
    ssn: number;
    emergencyContact: {
        fName: string;
        lName: string;
        phone: number;
    }
    insurance: {
        policyNumber: number;
        groupNumber: number;
        policyHolder: {
            fName: string;
            lName: string;
            ssn: number;
            dob: string;
        }
    }
}