import { api } from './configAPI.js';

const defaultOption = { label: 'Show all', value: 'showAll', isDisabled: true };

const fetchData = async link => {
  try {
    const { data } = await api.get(link);
    return [
      defaultOption,
      ...data.map(dataValue => ({ label: dataValue, value: dataValue })),
    ];
  } catch (error) {
    return [];
  }
};

// const fetchData = async link => {
//   try {
//     const { data } = await api.get(link);
//     return data.map(dataValue => {
//       return { label: dataValue, value: dataValue };
//     });
//   } catch (error) {
//     return [];
//   }
// };

export const fetchCategory = async () => await fetchData('/notices/categories');

export const fetchGender = async () => await fetchData('/notices/sex');

export const fetchType = async () => await fetchData('/notices/species');

export const fetchLocation = async value => {
  try {
    const { data } = await api.get('/cities', {
      params: {
        keyword: value,
      },
    });
    if (!Array.isArray(data)) throw new Error('Wrong response');
    if (data?.length === 0) return [];
    return data
      ?.map(location => ({
        value: location._id,
        label: `${location.stateEn}, ${location.cityEn}`,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
