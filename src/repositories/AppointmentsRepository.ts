import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  all(): Appointment[] {
    return this.appointments;
  }

  findByDate(date: Date): Appointment | null {
    const appointmentInSameDate = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return appointmentInSameDate || null;
  }

  create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
