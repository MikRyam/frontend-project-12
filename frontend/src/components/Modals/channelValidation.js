import * as yup from 'yup';

const channelValidation = (channelsNames, t) => yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, t('modals.channelValidation.channelNameLength'))
    .max(20, t('modals.channelValidation.channelNameLength'))
    .required(t('modals.channelValidation.requiredField'))
    .notOneOf([...channelsNames], t('modals.channelValidation.notUnique')),
});
export default channelValidation;
