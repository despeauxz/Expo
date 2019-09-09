module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      options: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      subjectId: DataTypes.INTEGER,
      userId: {
        type: DataTypes.UUID,
        allowNull: false
      }
    },
    {}
  );
  Question.associate = (models) => {
    const { Subject, User } = models;

    Question.belongsTo(Subject);
    Question.belongsTo(User);
  };
  return Question;
};
