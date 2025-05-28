import { readContacts } from '../utils/readContacts.js';


export const getAllContacts = async () => {
    try {
        const existingContacts = await readContacts();
        console.log('Cписок контактів', existingContacts);
        return existingContacts;
    } catch (err) {
        console.error('Контакти не отримано', err);
        return [];
    }
};

console.log(await getAllContacts());
