export interface Appointments {
   patientID: string;
   doctorId: string;
   date: Date;
   time: string;
   type: string;
   notes: string;
   appointmentConfirmed: Boolean;
   archive: string;

}