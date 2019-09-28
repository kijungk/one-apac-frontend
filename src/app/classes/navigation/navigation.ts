export class Navigation {
  description: string;
  iconClass: string;
  url: string;

  constructor(description: string, iconClass: string, url: string) {
    this.description = description;
    this.iconClass = iconClass;
    this.url = url;
  }
}
