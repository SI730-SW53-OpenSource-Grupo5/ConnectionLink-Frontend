class EventEntity {
  id: string;
  idSpecialist: string;
  title: string;
  banner_img: string;
  description: string;
  status: string;
  specialist: any; // objto que contiene la informacion del especialista asociado al evento

  constructor(id: string, idSpecialist: string, title: string, banner_img: string, description: string, status: string) {
    this.id = id;
    this.idSpecialist = idSpecialist;
    this.title = title;
    this.banner_img = banner_img;
    this.description = description;
    this.status = status;
  }
}
export default EventEntity;
