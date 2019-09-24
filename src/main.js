import Database from './db';
import Api from './api';
import Config from './config';
import Logger from './logger';

import seedAccounts from './account/account.seed';

try {
    Database.connect(Config.db.host, Config.db.port, Config.db.name)
        .then(() => {
            seedAccounts();
        })
        .then(() => {
            Api.start(Config.api.host, Config.api.port);
        })
        .catch((err) => {
            Logger.log(err);
        });
} catch(ex) {
    Logger.error(ex);
}