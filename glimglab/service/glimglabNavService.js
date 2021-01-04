class GLImglabNavService {
  constructor() {
    this._selectedNavItem = 'images';
    this._subscribers = [];
  }

  subscribe(sub) {
    this._subscribers.push(sub);
  }

  setSelectedNavItem (item) {
    this._selectedNavItem = item;
    this.notifySubs();
  }

  notifySubs() {
    this._subscribers.forEach(sub => sub.updateNav(this._selectedNavItem));
  }
}

const glimglabNavService = new GLImglabNavService();