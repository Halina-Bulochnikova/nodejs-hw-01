import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContact = createFakeContact();
        const allContacts = [...existingContacts, newContact];

        await writeContacts(allContacts);
        console.log('Контакт успішно доданий до файлу.');
    } catch (err) {
        console.error('Помилка додавання даних до файлу:', err);
    }
};

addOneContact();
