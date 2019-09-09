module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tagList: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
      }
    },
    {}
  );
  Tag.associate = (models) => {
    const { Subject } = models;

    Tag.belongsTo(Subject, {
      foreignKey: 'subjectId'
    });
  };
  return Tag;
};
