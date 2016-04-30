import { Meteor } from 'meteor/meteor';
import Roles from './roles.common';

if(Meteor.isServer) {
  Meteor.publish('_roles', function () {
    if (!this.userId) return this.ready()
    return Meteor.users.find({_id: this.userId}, {fields: { roles: 1 }});
  });

  Roles.addRolesToUser = function(userId, roles) {
    const user = Accounts.users.findOne(userId, { fields: { roles: 1 } });
    let concatedRoles = roles;
    if(!!user.roles) concatedRoles = _.uniq(_.concat(roles, user.roles));
    return Meteor.call('users.insertRoles', userId, concatedRoles);
  }

  Roles.addGroupToUser = function(userId, group) {
    return Meteor.call('users.insertRoles', userId, group);
  }

  Roles.removeRolesFromUser = function(userId, roles) {
    const user = Accounts.users.findOne(userId, { fields: { roles: 1 } });
    let concatedRoles = roles;
    if(!!user.roles) concatedRoles = _.uniq(_.pullAll(roles, user.roles));
    return Meteor.call('users.insertRoles', userId, concatedRoles);
  };

  Meteor.methods({
    'users.insertRoles': function(userId, roles) {
      return Accounts.users.update(userId, { $set: { roles } });
    }
  });
}
