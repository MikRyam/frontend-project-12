const ruLocales = {
  translation: {
    signUp: {
      pageHeader: 'Регистрация',
      usernameLabel: 'Имя пользователя',
      passwordLabel: 'Пароль',
      confirmPasswordLabel: 'Подтвердить пароль',
      registerButton: 'Зарегистрироваться',
      signUpFailed: 'Такой пользователь уже существует',
      footer: {
        signInHeader: 'Уже есть аккаунт? ',
        signIn: 'Войти',
      },
      validation: {
        requiredField: 'Обязательное поле',
        usernameLength: 'От 3 до 20 символов',
        passwordLength: 'от 6 до 30 символов',
        confirmPassword: 'Пароли должны совпадать',
      },
    },
    signIn: {
      pageHeader: 'Вход',
      usernameLabel: 'Имя пользователя',
      passwordLabel: 'Пароль',
      loginButton: 'Войти',
      signInFailed: 'Неверный пароль или имя пользователя',
      footer: {
        signUpHeader: 'Нет аккаунта? ',
        signUp: 'Создать аккаунт',
      },
      validation: {
        requiredField: 'Обязательное поле',
      },
    },
    navbar: {
      mainLabel: 'Hexlet Chat',
      logout: 'Выйти',
      signIn: 'Войти',
      signUp: 'Зарегистрироваться',
    },
    chat: {
      header: 'Каналы',
      DropDownChannelMenu: {
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
        sendButton: 'Отправить',
        cancelButton: 'Отменить',
      },
      addChannel: {
        header: 'Добавить канал',
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
    pageNotFound: {
      oops: 'Упс!',
      error: 'Извините, произошла непредвиденная ошибка',
      notFound: 'Страница не найдена.',
      noExist: 'Страница, которую вы ищете, не существует.',
      returnButton: 'Вернуться на главную',
    },
  },
};

export default ruLocales;
