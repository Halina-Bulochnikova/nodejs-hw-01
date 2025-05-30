import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts();
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        const allContacts = [...existingContacts, ...newContacts];
        await writeContacts(allContacts);
        console.log(`Успішно згенеровано та додано ${number} контактів.`);
    } catch (err) {
        console.error(
            'Помилка під час генерації контакту:', err);

    }
};

generateContacts(8);
