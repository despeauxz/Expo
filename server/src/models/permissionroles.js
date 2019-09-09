module.exports = (sequelize, DataTypes) => {
  const PermissionRoles = sequelize.define(
    'PermissionRoles',
    {
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      permissionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );

  PermissionRoles.associate = (models) => {
    const { Role, Permission } = models;

    PermissionRoles.belongsTo(Role);
    PermissionRoles.belongsTo(Permission);
  };

  return PermissionRoles;
};
