import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

// Get branch name for naming convention
const branchName = process.env.AWS_BRANCH || 'local';

// Apply naming convention to DynamoDB tables
const { cfnResources } = backend.data.resources;

// Rename the Todo table
cfnResources.amplifyDynamoDbTables["Todo"].tableName = `MyAppNrperry-${branchName}-Todo-Table`;

// Rename the GraphQL API
cfnResources.cfnGraphqlApi.name = `MyAppNrperry-${branchName}-API`;

