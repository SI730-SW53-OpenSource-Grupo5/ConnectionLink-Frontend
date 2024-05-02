export class EventEntity {
  id: string;
  userId: string;
  specialistId: string;
  description: string;
  date: Date;

  constructor(id: string, userId: string, specialistId: string, description: string, date: Date) {
    this.id = id;
    this.userId = userId;
    this.specialistId = specialistId;
    this.description = description;
    this.date = date;
  }
}

