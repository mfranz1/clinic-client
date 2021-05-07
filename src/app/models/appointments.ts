export interface Appointments {
   id: string
   patientID: string;
   doctorId: string;
   date: Date;
   time: string;
   type: string;
   notes: string;
   appointmentConfirmed: Boolean;
   archive: string;

}