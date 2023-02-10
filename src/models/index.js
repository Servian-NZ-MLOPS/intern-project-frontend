// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Model } = initSchema(schema);

export {
  Model
};