import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

Roles = { groups: {} };

Roles.setGroups = function(groups) {
  Roles.groups = groups;
};

Roles.userCan = function(userId, roles) {
  if(!userId) return false;
  const user = Meteor.users.findOne({ _id: userId }, { fields: { roles: 1 } });
  if(!user) return false;
  let userRoles = user.roles || [];
  const isGroup = _.includes(_.keys(Roles.groups), userRoles);
  userRoles = isGroup ? Roles.groups[userRoles] : userRoles;
  return _.includes(userRoles, roles);
};

Roles.userCant = (userId, roles) => !Roles.userCan(userId, roles);

Roles.can = function(roles) {
  const currentUserId = Meteor.userId();
  if(!currentUserId) return false;
  return Roles.userCan(currentUserId, roles);
};

Roles.cant = (roles) => !Roles.can(roles);

Roles.userIs = function(userId, group) {
  if(!userId) return false;
  const user = Meteor.users.findOne({ _id: userId }, { fields: { roles: 1 } });
  if(!user) return false;
  return user.roles === group;
};

Roles.usersIsnt = (userId, group) => !Roles.userIs(userId, group);

Roles.is = function(group) {
  const currentUserId = Meteor.userId();
  if(!currentUserId) return false;
  return Roles.userIs(currentUserId, group);
};

Roles.isnt = (group) => !Roles.isnt(group);

export default Roles;
