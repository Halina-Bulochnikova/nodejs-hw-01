import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (allContacts) => {
  const data = JSON.stringify(allContacts, null, 2);

  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Контакти успішно записані');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};
