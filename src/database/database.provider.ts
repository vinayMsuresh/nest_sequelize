import { Sequelize } from 'sequelize-typescript';
import Person from 'src/person/person.model';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'typescript_sequelize',
      });
      sequelize.addModels([Person]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
