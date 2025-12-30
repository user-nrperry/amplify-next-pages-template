import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

// Naming convention function
const applyNaming = (resourceType: string, resourceName: string) => 
  `MyAppNrperry-${resourceType}-${resourceName}`;

// Apply to all DynamoDB tables
Object.keys(backend.data.resources.tables).forEach(tableName => {
  backend.data.resources.tables[tableName].tableName = applyNaming("Table", tableName);
});

// Apply to Auth resources
backend.auth.resources.userPool.userPoolName = applyNaming("UserPool", "Main");
backend.auth.resources.userPoolClient.clientName = applyNaming("UserPoolClient", "Main");

