import axios from 'axios';

const baseURL = 'https://659aff00d565feee2daac044.mockapi.io/api/homework/';

axios.defaults.baseURL = baseURL;

export const axiosAllContacts = async () => {
  const data = await axios('contacts');
  return data;
};

export const axiosAddContact = async (newContact) => {
  const data = await axios.post('contacts', newContact);
  return data;
};

export const axiosDelContact = async (contactId) => {
  const data = await axios.delete(`contacts/${contactId}`);
  return data;
};
