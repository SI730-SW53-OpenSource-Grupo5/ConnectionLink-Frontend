export class Notifications {
  id: string;
  title: string;
  description: string;
  url: string;
  isRead: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    url: string,
    isRead: boolean,
    userId: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.isRead = isRead;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
