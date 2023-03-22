const ruLocales = {
  translation: {
    signUp: {
      pageHeader: 'Регистрация',
      usernameLabel: 'Имя пользователя',
      passwordLabel: 'Пароль',
      confirmPasswordLabel: 'Подтвердите пароль',
      registerButton: 'Зарегистрироваться',
      signUpFailed: 'Такой пользователь уже существует',
      footer: {
        signInHeader: 'Уже есть аккаунт? ',
        signIn: 'Войти',
      },
      validation: {
        requiredField: 'Обязательное поле',
        usernameLength: 'От 3 до 20 символов',
        passwordMinLength: 'Не менее 6 символов',
        passwordMaxLength: 'Не более 30 символов',
        confirmPassword: 'Пароли должны совпадать',
      },
    },
    signIn: {
      pageHeader: 'Войти',
      usernameLabel: 'Ваш ник',
      passwordLabel: 'Пароль',
      loginButton: 'Войти',
      signInFailed: 'Неверные имя пользователя или пароль',
      footer: {
        signUpHeader: 'Нет аккаунта? ',
        signUp: 'Регистрация',
      },
      validation: {
        requiredField: 'Обязательное поле',
      },
    },
    navbar: {
      mainLabel: 'Hexlet ChatPage',
      logout: 'Выйти',
      signIn: 'Войти',
      signUp: 'Зарегистрироваться',
    },
    chat: {
      header: 'Каналы',
      DropDownChannelMenu: {
        label: 'Управление каналом',
        delete: 'Удалить',
        rename: 'Переименовать',
      },
      messages: {
        counter: {
          count_one: '{{count}} сообщение',
          count_few: '{{count}} сообщения',
          count_many: '{{count}} сообщений',
        },
      },
    },
    modals: {
      confirmation: {
        header: 'Удалить канал',
        sure: 'Уверены?',
        confirmDeleteButton: 'Удалить',
        cancelButton: 'Отменить',
      },
      renameChannel: {
        header: 'Переименовать канал',
        label: 'Имя канала',
        sendButton: 'Отправить',
        cancelButton: 'Отменить',
      },
      addChannel: {
        header: 'Добавить канал',
        label: 'Имя канала',
        sendButton: 'Отправить',
        cancelButton: 'Отменить',
      },
      channelValidation: {
        channelNameLength: 'От 3 до 20 символов',
        requiredField: 'Обязательное поле',
        notUnique: 'Название канала должно быть уникальным',
      },
    },
    errors: {
      unknown: 'Неизвестная ошибка',
      network: 'Ошибка сети',
    },
    loading: 'Загрузка...',
    pageNotFound: {
      oops: 'Упс!',
      error: 'Извините, произошла непредвиденная ошибка',
      notFound: 'Страница не найдена.',
      noExist: 'Страница, которую вы ищете, не существует.',
      returnButton: 'Вернуться на главную',
    },
    toastify: {
      channels: {
        add: 'Канал создан',
        rename: 'Канал переименован',
        delete: 'Канал удалён',
        channelsLoading: 'Загрузка каналов...',
        channelsLoaded: 'Каналы загружены',
        channelsNetworkError: 'Ошибка соединения',
      },
      signUpSuccess: 'Аккаунт создан',
      signInSuccess: 'Вход выполнен',
    },
  },
};

export default ruLocales;
