module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT
      }
    },
    {}
  );
  Role.associate = (models) => {
    const { User, Permission } = models;

    Role.belongsToMany(Permission, {
      through: 'PermissionRoles',
      as: 'permissions',
      foreignKey: 'roleId'
    });

    Role.belongsToMany(User, {
      through: 'UserRole',
      as: 'user',
      foreignKey: 'userId'
    });
  };
  return Role;
};
