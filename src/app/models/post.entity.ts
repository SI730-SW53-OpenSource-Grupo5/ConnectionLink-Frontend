class PostEntity {
  id: number;
  name: string;
  email: string;
  subject: string;
  description: string;
  profile_img: string;
  publication_date: string;
  likes_quantity: number;
  comments_quantity: number;

  constructor(id: number, name: string, email: string, subject: string, description: string, profile_img: string, publication_date: string, likes_quantity: number, comments_quantity: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.description = description;
    this.profile_img = profile_img;
    this.publication_date = publication_date;
    this.likes_quantity = likes_quantity;
    this.comments_quantity = comments_quantity;
  }
}

export default PostEntity;
