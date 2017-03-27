import { Injectable } from '@angular/core';

export class User {
  completed: Boolean;
  editing: Boolean;

  private _name: String;
  private _email: String;
  private _id: String;

  get id() {
    return this._id;
  }

  set id(id: String) {
    this._id = id
  }

  get name() {
    return this._name;
  }

  set name(value: String) {
    this._name= value.trim();
  }

  get email() {
    return this._email;
  }

  set email(value: String) {
    this._email= value.trim();
  }

  constructor(name: String, email: String) {
    this.completed = false;
    this.editing = false;
    this._id = (Math.random()).toString();
    this._name = name;
    this._email = email;
  }
}

@Injectable()
export class UserStore {

  public _users: User[];

  constructor() {
    this._users = [];
  }

  public get() {
    return this._users;
  }

  public getById(id: String) {
    return this._users.filter(user => user.id === id)[0] || null;
  }

  public add(name: String, email: String) {
    const user = new User(name, email);
    this._users.push(user);
    return user;
  }

  public update(id: String, name: String, email: String) {
    this._users.map(user => {
      if (user.id === id) {
        return {id, name, email};
      }
    });
  }

  public remove(id: String) {
    this._users = this._users.filter(user => user.id !== id);
  }

}
