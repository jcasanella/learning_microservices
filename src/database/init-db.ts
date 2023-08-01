import { DataSource } from 'typeorm'

export const initDataSource = (dataSource: DataSource) => {
    dataSource.initialize()
    .then(() => { 
        console.log(`${dataSource.options.database} DataSource has been initialized successfully.`); 
    })
    .catch((err) => {
        console.error(`Error during ${name} DataSource initialization: `, err);
    });
};
