import { readContacts } from '../utils/readContacts.js';


export const countContacts = async () => {
    try {
        const existingContacts = await readContacts();
        const count = existingContacts.length;
        console.log(`Загальна кількість контактів: ${count}`);
        return count;
    } catch (err) {
        console.error('Помилка обчислювання контактів', err);
        return 0;
    }
};

console.log(await countContacts());
