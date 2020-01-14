class Bounty {
  constructor(
    id,
    address,
    publisherId,
    title,
    caption,
    location,
    date,
    amount,
    description,
    categories,
    image
  ) {
    this.id = id;
    this.address = address;
    this.publisherId = publisherId
    this.title = title;
    this.caption = caption;
    this.location = location;
    this.date = date;
    this.amount = amount;
    this.description = description;
    this.categories = categories;
    this.image = image
  }
}

export default Bounty;
