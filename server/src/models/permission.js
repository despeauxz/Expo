module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    'Permission',
    {
      name: DataTypes.STRING
    },
    {}
  );
  Permission.associate = (models) => {
    const { Role } = models;

    Permission.belongsToMany(Role, {
      through: 'PermissionRoles',
      as: 'roles',
      foreignKey: 'permissionId'
    });
  };
  return Permission;
};
