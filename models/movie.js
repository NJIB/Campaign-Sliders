module.exports = function(sequelize, DataTypes) {
    const Movie = sequelize.define('Movie', {
      // date: {
      //   type: DataTypes.DATE,
      //   allowNull: true,
      // },
      movie: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160],
        },
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 160],
        },
      },
      chosenby: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 160],
        },
      },
      comments: {
        type: DataTypes.STRING,
        // allowNull: true,
        // validate: {
        //   len: [1, 160],
        // },
      },
    });
  
    // Route.associate = function(models) {
    //   // We're saying that a SubSegment should belong to an Segment
    //   // A SubSegment can't be created without an Segment due to the foreign key constraint
    //   Route.belongsTo(models.Segment, {
    //     foreignKey: {
    //       allowNull: false,
    //     },
    //   });
    // };
  
    return Movie;
  };