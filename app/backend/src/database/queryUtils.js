/* eslint-disable no-await-in-loop */
import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-cycle
import connection from './connection';

export function readQueries(filePath = 'createDatabase.sql') {
  const importPath = path.resolve(__dirname, filePath);
  const seedDBContent = fs.readFileSync(importPath).toString();
  const queries = seedDBContent.split(';').filter((p) => p.trim());
  return queries;
}

export async function executeQueries(
  conn,
  queries = readQueries(),
) {
  try {
    for (let i = 0; i < queries.length; i += 1) {
      const query = queries[i];
      await conn.query(query);
    }
  } catch (error) {
    console.error('Banco Falha em executar queries', error);
  }
}

if (require.main === module) {
  executeQueries(connection)
    .then(async () => {
      console.info('Queries executadas com sucesso');
      await connection.end();
      process.exit(0);
    });
}
