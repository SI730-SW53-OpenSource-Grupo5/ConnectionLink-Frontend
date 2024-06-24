class EventEntity {
  id: string;
  title: string;
  description: string;
  profileImageUrl: string;
  bannerImageUrl: string;
  day: string;
  category: number;
  specialist: any;
  users: any;

  constructor(id: string, title: string, description: string, profile_image_url: string, banner_image_url: string, day: string, categoryId: number, specialist_id: string, users: any) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.profileImageUrl = profile_image_url;
    this.bannerImageUrl = banner_image_url;
    this.day = day;
    this.category = categoryId;
    this.specialist = specialist_id;
    this.users = users;
  }
}
export default EventEntity;
