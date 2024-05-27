export interface NewEventEntity {
  "eventName": string,
  "platform": string,
  "schedule":  string,
  "participants": number,
  "image":  File | null,
  "description": string,
}
