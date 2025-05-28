import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        const existingContacts = await readContacts();
        if (existingContacts.length === 0) {
            console.log('Список контактів порожній');
            return;
        }
        existingContacts.pop();

        await writeContacts(existingContacts);
        console.log('Видалено останній контакт');
    } catch (err) {
        console.error('Помилка видалення контакту:', err);
    }
};

removeLastContact();
