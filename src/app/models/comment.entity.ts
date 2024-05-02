class CommentEntity {
  id: number;
  postId: number;
  name: string;
  email: string;
  type: string;
  comment: string;
  imageURL: string;
  publication_date: string;
  likes_quantity: number;
  username: string;

  constructor(id: number, postId: number, name: string, email: string, type: string, comment: string, imageURL: string, publication_date: string, likes_quantity: number, username: string) {
    this.id = id;
    this.postId = postId;
    this.name = name;
    this.email = email;
    this.type = type;
    this.comment = comment;
    this.imageURL = imageURL;
    this.publication_date = publication_date;
    this.likes_quantity = likes_quantity;
    this.username = username;
  }
}

export default CommentEntity;
