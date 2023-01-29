import { MikroORM } from '@mikro-orm/core';
import path from 'path';

import { __prod__ } from './constants';
import { User } from './entities/User';

export default {
  seeder: {
    path: './seeders',
    pathTs: undefined,
    defaultSeeder: 'DatabaseSeeder',
    glob: '!(*.d).{js,ts}',
    emit: 'ts',
    fileName: (className: string) => className
  },
  migrations: {
    path: path.join(__dirname, './migrations'),
    glob: '!(*.d).{js,ts}',
  },
  entities: [User],
  dbName: 'asticom',
  type: 'postgresql',
  debug: !__prod__,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
