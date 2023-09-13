module.exports = (sequelize, DataTypes) => {
    
    const Items = sequelize.define("Items", {
        Name: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        Quantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
// This caused endless loop error
   // Users.associate = (models) => {
   //     Users.hasMany(models.Posts, {
   //         onDelete: "cascade",
   //     })
   // }
    return Items;
};