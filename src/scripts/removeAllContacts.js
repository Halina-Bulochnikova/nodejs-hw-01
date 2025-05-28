import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Контакт успішно видалено');
  } catch (err) {
    console.error('Помилка видалення файлу:', err);
  }
};

removeAllContacts();
