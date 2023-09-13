module.exports = (sequelize, DataTypes) => {
    
    const Users = sequelize.define("Users", {
        userName: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    });
// This caused endless loop error
   // Users.associate = (models) => {
   //     Users.hasMany(models.Posts, {
   //         onDelete: "cascade",
   //     })
   // }
    return Users;
};