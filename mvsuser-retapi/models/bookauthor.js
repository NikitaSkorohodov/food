const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const BookAuthor = sequelize.define('bookauthor', {
    BookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'books',
            key: 'id'
        }
    },
    AuthorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'authors',
            key: 'id'
        }
    }
}, {
    tableName: 'recipe',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "BookId" },
                { name: "AuthorId" },
            ]
        },
    ]
});

module.exports = BookAuthor;
