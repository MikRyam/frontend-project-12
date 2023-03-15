import * as yup from 'yup';
const channelValidation = (channelsNames) =>
  yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов')
      .required('Обязательное поле')
      .notOneOf([...channelsNames], 'Название канала должно быть уникальным'),
  });
export default channelValidation;
