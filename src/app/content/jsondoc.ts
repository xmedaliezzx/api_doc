export const JSONDOC = {
  openapi: '3.0.3',
  info: {
    title: 'Eldowallet Documentation',
    termsOfService: 'https://www.bestwallet.fr/mentions-legales/',
    version: '1.0.11',
  },
  servers: [
    {
      url: '/api/v1',
      description: 'EldoWallet server',
    },
  ],
  paths: {
    '/users/login': {
      post: {
        tags: ['User'],
        summary: 'Logs user into the system',
        operationId: 'loginUser',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  username: {
                    type: 'string',
                    example: 'sami',
                  },
                  password: {
                    type: 'string',
                    example: 'sami',
                  },
                },
                type: 'object',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    token: {
                      type: 'string',
                      example: '$token',
                    },
                    data: {
                      $ref: '#/components/schemas/User',
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Please provide user name and password!',
            content: {},
          },
          '401': {
            description: 'Incorrect email or password',
            content: {},
          },
        },
      },
    },
    '/users/{id}/update_password': {
      patch: {
        tags: ['User'],
        summary: 'Logs user into the system',
        operationId: 'updatePassword',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of user ',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  passwordCurrent: {
                    type: 'string',
                    format: 'password',
                    example: 'Passw0rd',
                  },
                  password: {
                    type: 'string',
                    format: 'password',
                    example: 'Pa$$w0rd!',
                  },
                  passwordConfirm: {
                    type: 'string',
                    format: 'password',
                    example: 'Pa$$w0rd!',
                  },
                },
                type: 'object',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    token: {
                      type: 'string',
                      example: '$token',
                    },
                    data: {
                      $ref: '#/components/schemas/User',
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Please provide user name and password!',
            content: {},
          },
          '401': {
            description: 'Incorrect email or password',
            content: {},
          },
        },
      },
    },
    '/customers/inscriptions': {
      post: {
        tags: ['Customer'],
        summary: 'Get logged user data',
        operationId: 'getUserData',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  token: {
                    type: 'string',
                    example:
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWQwMDVjMzRhOTkyMDAwN2M5ZjYyYiIsImlhdCI6MTY2OTg5MDQ0MywiZXhwIjoxNjcyNDgyNDQzfQ.NExxd4xxSdwsiIDMy5s9lxyNhnbhGagqcrjOIEUy3SY',
                  },
                },
                type: 'object',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          $ref: '#/components/schemas/DecodedToken',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/customers': {
      post: {
        tags: ['Customer'],
        summary: 'Add customer to wallet',
        operationId: 'addCustomer',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  firstName: {
                    type: 'string',
                    example: 'june-luke',
                  },
                  lastName: {
                    type: 'string',
                    example: 'wallet',
                  },
                  email: {
                    type: 'string',
                    example: 'june@wallet.me',
                  },
                  phoneNumber: {
                    type: 'string',
                    example: '',
                  },
                  barcode: {
                    type: 'string',
                    example: '',
                  },
                  source: {
                    type: 'string',
                    enum: ['internal', 'external', 'crm'],
                    example: 'crm',
                  },
                  wallet: {
                    type: 'string',
                    example: '629d005a34a9920007c9f623',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            newCustomerResult: {
                              type: 'object',
                              properties: {
                                firstName: {
                                  type: 'string',
                                },
                                lastName: {
                                  type: 'string',
                                },
                                email: {
                                  type: 'string',
                                },
                                barcode: {
                                  type: 'string',
                                },
                                source: {
                                  type: 'string',
                                },
                                wallet: {
                                  type: 'string',
                                },
                                _id: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                },
                                gain: {
                                  type: 'integer',
                                  format: 'int32',
                                },
                              },
                            },
                            links: {
                              type: 'object',
                              properties: {
                                googlePayLink: {
                                  type: 'string',
                                },
                                applePayLink: {
                                  type: 'string',
                                },
                              },
                            },
                            successMessage: {
                              type: 'string',
                            },
                            notificationMessage: {
                              type: 'string',
                            },
                            emailSentStatus: {
                              type: 'boolean',
                            },
                            smsStatus: {
                              type: 'boolean',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/customers/{id}/{wallet}': {
      patch: {
        tags: ['Customer'],
        summary: 'update customer',
        operationId: 'updateCustomer',
        description:
          'This service also updates the barcode or the type if supplied',
        required: 'true',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the customer',
            required: 'true',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: 'true',
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  gain: {
                    type: 'number',
                  },
                  firstName: {
                    type: 'string',
                    example: 'june-luke',
                  },
                  lastName: {
                    type: 'string',
                    example: 'wallet',
                  },
                  email: {
                    type: 'string',
                    example: 'june@wallet.me',
                  },
                  phoneNumber: {
                    type: 'string',
                    example: '',
                  },
                  barcode: {
                    type: 'string',
                    example: '',
                  },
                  source: {
                    type: 'string',
                    enum: ['external', 'internal', 'crm'],
                    example: 'QR',
                  },
                },
                type: 'object',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          $ref: '#/components/schemas/Customer',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Customer not found!',
            content: {},
          },
        },
      },
    },
    '/customers/{wallet}/inactives': {
      get: {
        tags: ['Customer'],
        summary: 'Get Inactive customers',
        operationId: 'getInactiveCustomers',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'firstName',
            in: 'query',
            description: 'First Name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'lastName',
            in: 'query',
            description: 'Last Name',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'creationDate',
            in: 'query',
            description: 'Creation Date',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          passLink: {
                            type: 'string',
                          },
                          _id: {
                            type: 'string',
                          },
                          customerId: {
                            type: 'string',
                          },
                          shortLink: {
                            type: 'string',
                          },
                          email: {
                            type: 'string',
                          },
                          phoneNumber: {
                            type: 'string',
                          },
                          firstName: {
                            type: 'string',
                          },
                          lastName: {
                            type: 'string',
                          },
                          createdAt: {
                            type: 'string',
                          },
                        },
                      },
                    },
                    total: {
                      type: 'number',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Customer not found:',
            content: {},
          },
        },
      },
    },
    '/customers/{id}': {
      delete: {
        tags: ['Customer'],
        summary: 'Delete customer by id',
        operationId: 'deleteCustomer',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the customer that needs to be deleted',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'boolean',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Customer not found:',
            content: {},
          },
        },
      },
    },
    '/customers/{wallet}/reminders': {
      post: {
        tags: ['Customer'],
        summary: 'Resend passes to inactive customers',
        operationId: 'sendReminders',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  customersIds: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: '6273fdab82db5400086419e6',
                    },
                  },
                },
                type: 'object',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/customers/{wallet}/reminders/all': {
      post: {
        tags: ['Customer'],
        summary: 'Resend passes to all inactive customers',
        operationId: 'sendRemindersToAllCustomers',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'creationDate',
            in: 'query',
            description: 'Creation Date',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/customers/{id}/informations': {
      get: {
        tags: ['Customer'],
        summary: 'get customer by id',
        operationId: 'getCustomer informations',
        required: 'true',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the customer that needs',
            required: 'true',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'boolean',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Customer not found:',
            content: {},
          },
        },
      },
    },
    '/customers/{id}/history': {
      get: {
        tags: ['Customer'],
        summary: 'Get rewards history',
        operationId: 'getRewardsHistory',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the customer',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              _id: {
                                type: 'string',
                              },
                              gain: {
                                type: 'integer',
                                format: 'int32',
                              },
                              type: {
                                type: 'string',
                              },
                              source: {
                                type: 'string',
                              },
                              phoneNumber: {
                                type: 'string',
                                format: 'nullable',
                              },
                              preview: {
                                type: 'boolean',
                              },
                              firstName: {
                                type: 'string',
                              },
                              lastName: {
                                type: 'string',
                              },
                              email: {
                                type: 'string',
                              },
                              barcode: {
                                type: 'string',
                              },
                              wallet: {
                                type: 'string',
                              },
                              createdAt: {
                                type: 'string',
                              },
                              __v: {
                                type: 'integer',
                                format: 'int32',
                              },
                              history: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    _id: {
                                      type: 'string',
                                    },
                                    gain: {
                                      type: 'integer',
                                      format: 'int32',
                                    },
                                    customerId: {
                                      type: 'string',
                                    },
                                    createdAt: {
                                      type: 'string',
                                    },
                                    __v: {
                                      type: 'integer',
                                      format: 'int32',
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/customers/{wallet}/csv': {
      get: {
        tags: ['Customer'],
        summary: 'Get customers CSV',
        operationId: 'getCsv',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'string',
                  example: 'csv',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      post: {
        tags: ['Customer'],
        summary: 'Add customers from CSV',
        operationId: 'addCsv',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                type: 'object',
                required: ['csv'],
                properties: {
                  csv: {
                    type: 'string',
                    format: 'binary',
                  },
                  sendNotificationsToCustomers: {
                    type: 'boolean',
                    example: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'string',
                  example: 'csv',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/customers': {
      get: {
        tags: ['Customer'],
        summary: 'Filter Customers',
        operationId: 'FilterCustomers',
        description:
          'If no search queries are provided, Customers result will be limited to page and size.',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'firstName',
            in: 'query',
            description: 'The first name of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'lastName',
            in: 'query',
            description: 'The last name of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'email',
            in: 'query',
            description: 'The email of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'startDate',
            in: 'query',
            description: 'The date after customers have been created',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The date before customers have been created',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'source',
            in: 'query',
            description: 'The source of the customers',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'phoneNumber',
            in: 'query',
            description: 'The phone number of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'deleted',
            in: 'query',
            description: 'Customer is deleted or not',
            schema: {
              type: 'boolean',
            },
          },
          {
            name: 'status',
            in: 'query',
            description: "The status of the customer's pass",
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'page equals 0 by default',
            schema: {
              type: 'integer',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'size equals 10 by default',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              _id: {
                                type: 'string',
                              },
                              geolocation: {
                                type: 'string',
                              },
                              identifier: {
                                type: 'string',
                              },
                              name: {
                                type: 'string',
                              },
                              labelColor: {
                                type: 'object',
                                properties: {
                                  hex: {
                                    type: 'string',
                                  },
                                  rgb: {
                                    type: 'string',
                                  },
                                },
                              },
                              backgroundColor: {
                                type: 'object',
                                properties: {
                                  hex: {
                                    type: 'string',
                                  },
                                  rgb: {
                                    type: 'string',
                                  },
                                },
                              },
                              locations: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    _id: {
                                      type: 'string',
                                    },
                                    longitude: {
                                      type: 'number',
                                    },
                                    latitude: {
                                      type: 'number',
                                    },
                                    relevantText: {
                                      type: 'string',
                                    },
                                  },
                                },
                              },
                              foregroundColor: {
                                type: 'object',
                                properties: {
                                  hex: {
                                    type: 'string',
                                  },
                                  rgb: {
                                    type: 'string',
                                  },
                                },
                              },
                              socialMedia: {
                                type: 'object',
                                properties: {
                                  facebook: {
                                    type: 'string',
                                  },
                                  instagram: {
                                    type: 'string',
                                  },
                                  linkedin: {
                                    type: 'string',
                                  },
                                },
                              },
                              website: {
                                type: 'string',
                              },
                              address: {
                                type: 'string',
                              },
                              openingHours: {
                                type: 'string',
                              },
                              description: {
                                type: 'string',
                                format: 'nullable',
                              },
                              identifierQr: {
                                type: 'string',
                              },
                              logoPictureUrl: {
                                type: 'string',
                              },
                              iconPictureUrl: {
                                type: 'string',
                              },
                              stripPictureUrl: {
                                type: 'string',
                              },
                              customersCount: {
                                type: 'integer',
                                format: 'int32',
                              },
                              customers: {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  properties: {
                                    _id: {
                                      type: 'string',
                                    },
                                    gain: {
                                      type: 'integer',
                                      format: 'int32',
                                    },
                                    type: {
                                      type: 'string',
                                    },
                                    source: {
                                      type: 'string',
                                    },
                                    phoneNumber: {
                                      type: 'string',
                                      format: 'nullable',
                                    },
                                    preview: {
                                      type: 'boolean',
                                    },
                                    firstName: {
                                      type: 'string',
                                    },
                                    lastName: {
                                      type: 'string',
                                    },
                                    email: {
                                      type: 'string',
                                    },
                                    barcode: {
                                      type: 'string',
                                    },
                                    wallet: {
                                      type: 'string',
                                    },
                                    createdAt: {
                                      type: 'string',
                                    },
                                    __v: {
                                      type: 'integer',
                                      format: 'int32',
                                    },
                                    actifDevicesAndroidCount: {
                                      type: 'integer',
                                      format: 'int32',
                                    },
                                    actifDevicesIOSCount: {
                                      type: 'integer',
                                      format: 'int32',
                                    },
                                    deletedDevicesAndroidCount: {
                                      type: 'integer',
                                      format: 'int32',
                                    },
                                    deletedDevicesIOSCount: {
                                      type: 'integer',
                                      format: 'int32',
                                    },
                                    devices: {
                                      type: 'string',
                                    },
                                    status: {
                                      type: 'string',
                                    },
                                    isDeleted: {
                                      type: 'boolean',
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    totalCustomersCount: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets': {
      post: {
        tags: ['Wallet'],
        summary: 'Create a wallet [admin only]',
        operationId: 'createWallet',
        security: [
          {
            api_key: [],
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createWalletPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          $ref: '#/components/schemas/Wallet',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      get: {
        tags: ['Wallet'],
        summary: 'Get all wallets [admin only]',
        operationId: 'getWallets',
        security: [
          {
            api_key: [],
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'array',
                          items: {
                            type: 'object',
                            $ref: '#/components/schemas/Wallet',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}': {
      get: {
        tags: ['Wallet'],
        summary: 'Get wallet informations',
        operationId: 'getWallet',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of wallet that needs to be fetched',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'array',
                          items: {
                            $ref: '#/components/schemas/Wallet',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      put: {
        tags: ['Wallet'],
        summary: 'Update wallet informations',
        operationId: 'updateWallet',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of wallet that needs to be fetched',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/updateWalletPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          $ref: '#/components/schemas/Wallet',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      delete: {
        tags: ['Wallet'],
        summary: 'Delete wallet',
        operationId: 'deleteWallet',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of wallet that needs to be fetched',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/settings/{wallet}': {
      get: {
        summary: 'Get wallet settings',
        description: 'Get wallet settings',
        operationId: 'getWalletSettings',
        tags: ['Settings'],
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'Wallet identifier',
            required: true,
            schema: {
              type: 'string',
              example: 'bad50e6bc4b0cde87a2a0a69',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          $ref: '#/components/schemas/Settings',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      patch: {
        summary: 'Update wallet settings',
        description: 'Update wallet settings',
        operationId: 'updateWalletSettings',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/updateSettingsPayload',
              },
            },
          },
        },
        tags: ['Settings'],
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'Wallet identifier',
            required: true,
            schema: {
              type: 'string',
              example: 'bad50e6bc4b0cde87a2a0a69',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          $ref: '#/components/schemas/Settings',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/offers': {
      get: {
        tags: ['Offer'],
        summary: 'Get list of offers of this wallet',
        operationId: 'getOffers',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Offer',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      post: {
        tags: ['Offer'],
        summary: 'Create offer',
        operationId: 'createOffer',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'Wallet ID',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                properties: {
                  startDate: {
                    type: 'string',
                    example: '2021-10-23',
                  },
                  endDate: {
                    type: 'string',
                    example: '2021-11-23',
                  },
                  isUnlimited: {
                    type: 'boolean',
                    example: 'false',
                  },
                  description: {
                    type: 'string',
                    example: 'description',
                  },
                  strip: {
                    type: 'string',
                    format: 'binary',
                  },
                },
                type: 'object',
              },
              encoding: {
                strip: {
                  contentType: 'image/png',
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Offer',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/offers/{offerId}': {
      get: {
        tags: ['Offer'],
        summary: 'Get an offer',
        operationId: 'getOffer',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'offerId',
            in: 'path',
            description: 'ID of the offer',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          $ref: '#/components/schemas/Offer',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      put: {
        tags: ['Offer'],
        summary: 'Update an offer',
        operationId: 'updateOffer',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'offerId',
            in: 'path',
            description: 'ID of the offer',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                required: [
                  'status',
                  'startDate',
                  'endDate',
                  'description',
                  'strip',
                ],
                properties: {
                  startDate: {
                    type: 'string',
                    example: '2021-10-23',
                  },
                  endDate: {
                    type: 'string',
                    example: '2021-11-23',
                  },
                  description: {
                    type: 'string',
                    example: 'description',
                  },
                  strip: {
                    type: 'string',
                    format: 'binary',
                  },
                  isUnlimited: {
                    type: 'boolean',
                    example: 'false',
                  },
                  status: {
                    type: 'string',
                    enum: ['ACTIF', 'INACTIF', 'EXPIRED', 'OPENED', 'DELETED'],
                    example: 'ACTIF',
                  },
                },
                type: 'object',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Offer',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      delete: {
        tags: ['Offer'],
        summary: 'Delete an offer',
        operationId: 'deleteOffer',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'offerId',
            in: 'path',
            description: 'ID of the offer',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/coupons': {
      get: {
        tags: ['Coupon'],
        summary: 'Get list of coupons',
        operationId: 'getCoupons',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Coupon',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      post: {
        tags: ['Coupon'],
        summary: 'Create a coupon',
        operationId: 'createCoupon',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createCouponPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Coupon',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/coupons/{coupon}': {
      get: {
        tags: ['Coupon'],
        summary: 'Get a coupon',
        operationId: 'getCoupon',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'coupon',
            in: 'path',
            description: 'ID of the coupon',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Coupon',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      delete: {
        tags: ['Coupon'],
        summary: 'Delete a coupon',
        operationId: 'deleteCoupon',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'coupon',
            in: 'path',
            description: 'ID of the coupon',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Coupon',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/coupons/history': {
      get: {
        tags: ['Coupon'],
        summary: 'Filter list of coupons',
        operationId: 'filterCoupons',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
              example: '610405e2523e4c00070999ee',
            },
          },
          {
            name: 'customerId',
            in: 'query',
            description: 'ID of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'lastName',
            in: 'query',
            description: 'The lastname of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'email',
            in: 'query',
            description: 'The email of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'startDate',
            in: 'query',
            description: 'The date when or after the coupon have been created',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The date when or before the coupon have been created',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'phoneNumber',
            in: 'query',
            description: 'The phone number of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'modifDate',
            in: 'query',
            description: 'The date when the coupon have been last modified',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'minValue',
            in: 'query',
            description:
              'Minumum value. Allowed format: number+% or  number+currency. Should have the same format as the maxValue if this last is not empty.',
            schema: {
              type: 'string',
              example: '20%',
            },
          },
          {
            name: 'maxValue',
            in: 'query',
            description:
              'Maximum value. Allowed format: number+% or  number+currency. Should have the same format as the minValue if this last is not empty.',
            schema: {
              type: 'string',
              example: '80%',
            },
          },
          {
            name: 'deleted',
            in: 'query',
            description:
              'Customer have deleted the coupon or not. By default this is set to false',
            schema: {
              type: 'boolean',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    data: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          walletId: {
                            type: 'string',
                          },
                          couponId: {
                            type: 'string',
                          },
                          customerId: {
                            type: 'string',
                          },
                          createdAt: {
                            type: 'string',
                          },
                          'Customer Name': {
                            type: 'string',
                          },
                          customer: {
                            $ref: '#/components/schemas/Customer',
                          },
                          barcode: {
                            type: 'string',
                          },
                          description: {
                            type: 'string',
                          },
                          promoCode: {
                            type: 'string',
                          },
                          value: {
                            type: 'string',
                          },
                          expirationDate: {
                            type: 'string',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/coupons/{coupon}/sent': {
      get: {
        tags: ['Coupon'],
        summary: 'Get sent coupons',
        operationId: 'getSentCoupons',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'coupon',
            in: 'path',
            description: 'ID of the coupon',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'creationDate',
            in: 'query',
            description: 'The date when the ticket pass was created',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'customerId',
            in: 'query',
            description: 'ID of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'lastName',
            in: 'query',
            description: 'LastName of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/customersCoupons',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/coupons/{coupon}/send': {
      post: {
        tags: ['Coupon'],
        summary: 'Send a coupn to actif customers',
        operationId: 'sendCoupon',
        description:
          'If no customers array is supplied, The coupon will be sent to all active customers in the wallet',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'coupon',
            in: 'path',
            description: 'ID of the Coupon',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  customers: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: '1ds65qf4f98df4fds65',
                    },
                  },
                },
                type: 'object',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Coupon',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/coupons/{coupon}/template': {
      put: {
        tags: ['Coupon'],
        summary: 'Update the template of the coupon',
        operationId: 'updateTemplate',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'coupon',
            in: 'path',
            description: 'ID of the Coupon',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createCouponPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Coupon',
                  },
                },
              },
            },
          },
          '404': {
            description: 'Coupon not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/flights': {
      get: {
        tags: ['Flight'],
        summary: 'Get all flights',
        operationId: 'getFlights',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Flight',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      post: {
        tags: ['Flight'],
        summary: 'Create a flight',
        operationId: 'createFlight',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createFlightPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Flight',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/flights/{flight}': {
      get: {
        tags: ['Flight'],
        summary: 'Get a flight',
        operationId: 'getFlight',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'flight',
            in: 'path',
            description: 'ID of the flight',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Flight',
                },
              },
            },
          },
          '404': {
            description: 'Wallet or flight not found!',
            content: {},
          },
        },
      },
      put: {
        tags: ['Flight'],
        summary: 'Update a flight',
        operationId: 'updateFlight',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'flight',
            in: 'path',
            description: 'ID of the flight',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createFlightPayload',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'successful operation',
            content: {},
          },
        },
      },
      delete: {
        tags: ['Flight'],
        summary: 'Delete a flight',
        operationId: 'deleteFlight',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'flight',
            in: 'path',
            description: 'ID of the flight',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Flight deleted',
          },
          '400': {
            description: 'Bad request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not found',
          },
          '500': {
            description: 'Internal server error',
          },
        },
      },
    },
    '/wallets/{wallet}/transits': {
      post: {
        tags: ['Transit'],
        summary: 'Create a transit ticket',
        operationId: 'createTransit',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createTransitPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Transit',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      get: {
        tags: ['Transit'],
        summary: 'Get the list of transits',
        operationId: 'getTransits',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
              example: '610405e2523e4c00070999ee',
            },
          },
          {
            name: 'departureTime',
            in: 'query',
            description:
              'The time the transport will leave the original station',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'arrivaleTime',
            in: 'query',
            description:
              'The time the transport will be at the destination station',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'tarif',
            in: 'query',
            description: 'How much does the ticket cost?',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            in: 'query',
            description: 'Transit type',
            schema: {
              type: 'string',
              enum: ['bus', 'rail', 'tram', 'ferry', 'other'],
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Transit',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/transits/{transit}': {
      get: {
        tags: ['Transit'],
        summary: 'Get a transit',
        operationId: 'getTransit',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'transit',
            in: 'path',
            description: 'ID of the transit',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Transit',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      put: {
        tags: ['Transit'],
        summary: 'update a transit ticket',
        operationId: 'updateTransit',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'transit',
            in: 'path',
            description: 'ID of the transit',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/updateTransitPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Transit',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      delete: {
        tags: ['Transit'],
        summary: 'Delete a transit',
        operationId: 'deleteTransit',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'transit',
            in: 'path',
            description: 'ID of the transit',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Transit deleted',
          },
          '400': {
            description: 'Bad request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not found',
          },
          '500': {
            description: 'Internal server error',
          },
        },
      },
    },
    '/wallets/{wallet}/transits/{transit}/sent': {
      get: {
        tags: ['Transit'],
        summary: 'Get sent transits',
        operationId: 'getSentTransits',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'transit',
            in: 'path',
            description: 'ID of the transit',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'creationDate',
            in: 'query',
            description: 'The date when the ticket pass was created',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'customerId',
            in: 'query',
            description: 'ID of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'lastName',
            in: 'query',
            description: 'LastName of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/customersTransitTickets',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/hotels': {
      get: {
        tags: ['Hotel'],
        summary: 'Get all hotel passes',
        operationId: 'getHotelPasses',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Hotel',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      post: {
        tags: ['Hotel'],
        summary: 'Create a hotel pass',
        operationId: 'createReservation',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createHotelPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Hotel',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/hotels/{hotel}': {
      get: {
        tags: ['Hotel'],
        summary: 'Get a hotel pass',
        operationId: 'getHotelPass',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'hotel',
            in: 'path',
            description: 'ID of the hotel',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Hotel',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      delete: {
        tags: ['Hotel'],
        summary: 'Delete a hotel pass',
        operationId: 'deleteHotelPass',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'hotel',
            in: 'path',
            description: 'ID of the hotel',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/hotels/{hotel}/sent': {
      get: {
        tags: ['Hotel'],
        summary: 'Get sent hotels tickets',
        operationId: 'getSentHotelTickets',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'hotel',
            in: 'path',
            description: 'ID of the room',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'creationDate',
            in: 'query',
            description: 'The date when the ticket pass was created',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'customerId',
            in: 'query',
            description: 'ID of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'lastName',
            in: 'query',
            description: 'LastName of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/customersRoomsCards',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/cinemas': {
      post: {
        tags: ['Cinema'],
        summary: 'Create a movie ticket',
        operationId: 'createMovieTicket',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createCinemaPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Cinema',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      get: {
        tags: ['Cinema'],
        summary: 'Get list of movie tickets',
        operationId: 'getMovieTickets',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Cinema',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/cinemas/{cinema}': {
      get: {
        tags: ['Cinema'],
        summary: 'Get a movie ticket',
        operationId: 'getMovieTicket',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'cinema',
            in: 'path',
            description: 'ID of the movie ticket',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Cinema',
                },
              },
            },
          },
          '404': {
            description: 'Wallet or movie ticket not found!',
            content: {},
          },
        },
      },
      delete: {
        tags: ['Cinema'],
        summary: 'Delete a movie ticket',
        operationId: 'deleteMovieTicket',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'cinema',
            in: 'path',
            description: 'ID of the movie ticket',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '204': {
            description: 'successful operation',
            content: {},
          },
          '404': {
            description: 'Wallet or movie ticket not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/cinemas/{cinema}/sent': {
      get: {
        tags: ['Cinema'],
        summary: 'Get sent cinemas tickets',
        operationId: 'getSentCinemasTickets',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'cinema',
            in: 'path',
            description: 'ID of the cinema',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'creationDate',
            in: 'query',
            description: 'The date when the ticket pass was created',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'customerId',
            in: 'query',
            description: 'ID of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'lastName',
            in: 'query',
            description: 'LastName of the customer',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/customersCinemaTickets',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/events': {
      get: {
        tags: ['Event'],
        summary: 'Get list of events',
        operationId: 'getEvents',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
            },
          },
          {
            name: 'size',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Event',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      post: {
        tags: ['Event'],
        summary: 'Create an event',
        operationId: 'createEvent',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createEventPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Event',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/events/{event}': {
      get: {
        tags: ['Event'],
        summary: 'Get Event template',
        operationId: 'getEvent',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'event',
            in: 'path',
            description: 'ID of the event',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                    response: {
                      type: 'object',
                      properties: {
                        data: {
                          $ref: '#/components/schemas/Event',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      delete: {
        tags: ['Event'],
        summary: 'Delete Event',
        operationId: 'deleteEvent',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'event',
            in: 'path',
            description: 'ID of the event',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'success',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
      put: {
        tags: ['Event'],
        summary: 'Update Event template',
        operationId: 'updateEvent',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'event',
            in: 'path',
            description: 'ID of the event',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/createEventPayload',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Event',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/wallets/{wallet}/events/{event}/customers': {
      get: {
        tags: ['Event'],
        summary: 'Get list of customers who recieved the event',
        operationId: 'getEventCustomers',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of the wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'event',
            in: 'path',
            description: 'ID of the event',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/EventCustomer',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/stats/wallets/{wallet}/sms': {
      get: {
        tags: ['Statistics'],
        summary: 'Returns sms statistics',
        operationId: 'getSmsStats',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'startDate',
            in: 'query',
            description: 'The start date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The endDate of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2023-01-01',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Sms_Statistics',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/stats/wallets/{wallet}/email': {
      get: {
        tags: ['Statistics'],
        summary: 'Returns emails statistics',
        operationId: 'getEmailStats',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'startDate',
            in: 'query',
            description: 'The start date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The end date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2023-01-01',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Email_Statistics',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/stats/wallets/{wallet}/clients': {
      get: {
        tags: ['Statistics'],
        summary: 'Returns customers statistics',
        operationId: 'getClientStats',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'startDate',
            in: 'query',
            description: 'The start date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The end date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2023-01-01',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Customer_Statistics',
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/stats/wallets/{wallet}/sms/details': {
      get: {
        tags: ['Statistics'],
        summary: 'Get Clients details for a specific sms type',
        operationId: 'getSmsStatsDetails',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'wallet',
            in: 'path',
            description: 'ID of wallet',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'startDate',
            in: 'query',
            description: 'The start date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The end date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2023-01-01',
            },
          },
          {
            name: 'type',
            in: 'query',
            description:
              'type of sms if not passed all sms types will be returned',
            schema: {
              type: 'string',
              enum: ['offer', 'all', 'newAccount', 'event', 'coupon'],
              example: 'newAccount',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          _id: {
                            type: 'string',
                          },
                          count: {
                            type: 'integer',
                            format: 'int32',
                          },
                          name: {
                            type: 'string',
                          },
                        },
                      },
                    },
                    type: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
    '/stats/sms': {
      get: {
        tags: ['Statistics'],
        summary: 'Get total sms statistics [admin only]',
        operationId: 'getTotalSmsStats',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'startDate',
            in: 'query',
            description: 'The start date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The end date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2023-01-01',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Sms_Statistics',
                },
              },
            },
          },
        },
      },
    },
    '/stats/email': {
      get: {
        tags: ['Statistics'],
        summary: 'Get total email statistics [admin only]',
        operationId: 'getTotalEmailStats',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'startDate',
            in: 'query',
            description: 'The start date of the statistics [admin only]',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The end date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2023-01-01',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Email_Statistics',
                },
              },
            },
          },
        },
      },
    },
    '/stats/clients': {
      get: {
        tags: ['Statistics'],
        summary: 'Get total clients statistics [admin only]',
        operationId: 'getTotalClientsStats',
        security: [
          {
            api_key: [],
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'startDate',
            in: 'query',
            description: 'The start date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2022-01-01',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            description: 'The end date of the statistics',
            schema: {
              type: 'string',
              format: 'date',
              pattern: '^(?:(\\d{4}-\\d{2}-\\d{2}))$',
              example: '2023-01-01',
            },
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Customer_Statistics',
                },
              },
            },
          },
        },
      },
    },
    '/operations': {
      get: {
        tags: ['Operation'],
        summary: 'Get all operations',
        operationId: 'getOperations',
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: 'pageNumber',
            in: 'query',
            description: 'Page number',
            schema: {
              type: 'number',
              format: 'int32',
              example: 1,
            },
          },
          {
            name: 'pageSize',
            in: 'query',
            description: 'Page size',
            schema: {
              type: 'integer',
              format: 'int32',
              example: 10,
            },
          },
          {
            name: 'startTime',
            in: 'query',
            description: 'Start time',
            schema: {
              type: 'string',
              format: 'date-time',
              example: '2020-01-01T00:00:00.000Z',
            },
          },
          {
            name: 'endTime',
            in: 'query',
            description: 'End time',
            schema: {
              type: 'string',
              format: 'date-time',
              example: '2020-01-01T00:00:00.000Z',
            },
            required: false,
          },
          {
            name: 'status',
            in: 'query',
            description: 'Status',
            schema: {
              type: 'string',
              example: 'SUCCESS',
            },
            required: false,
          },
          {
            name: 'fileName',
            in: 'query',
            description: 'File name',
            schema: {
              type: 'string',
              example: 'test.csv',
            },
            required: false,
          },
          {
            name: 'jobType',
            in: 'query',
            description: 'Job type',
            schema: {
              type: 'string',
              enum: ['CUSTOMERS_IMPORT', 'CUSTOMERS_EXPORT'],
            },
            required: false,
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                    data: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Operation',
                      },
                    },
                    total: {
                      type: 'integer',
                      format: 'int32',
                      example: 1,
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Wallet not found!',
            content: {},
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          user: {
            type: 'object',
            properties: {
              role: {
                type: 'string',
                example: 'manager',
              },
              wallet: {
                type: 'string',
                example: 'bad50e6bc4b0cde87a2a0a69',
              },
              username: {
                type: 'string',
                example: 'john.doe',
              },
              email: {
                type: 'string',
                example: 'sami@test.test',
              },
            },
          },
          wallet: {
            $ref: '#/components/schemas/Wallet',
          },
        },
      },
      Offer: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '5f7f9b9a4a9920007c9f623',
          },
          status: {
            type: 'string',
            enum: ['ACTIF', 'INACTIF', 'EXPIRED', 'OPENED', 'DELETED'],
            example: 'ACTIF',
          },
          wallet: {
            type: 'string',
            example: '5f7f9b9a4a9920007c9f623',
          },
          isUnlimited: {
            type: 'boolean',
            example: false,
          },
          startDate: {
            type: 'string',
            example: '2022-12-19T00:00:00.000Z',
          },
          endDate: {
            type: 'string',
            example: '2022-12-20T00:00:00.000Z',
          },
          description: {
            type: 'string',
            example: '20% sur les produits de la catégorie 1',
          },
          createdAt: {
            type: 'string',
            example: '2021-10-19T00:00:00.000Z',
          },
          offerPictureUrl: {
            type: 'string',
            example:
              'static/bad50e6bc4b0cde87a2a0a69/offers/63a02c0761e09900079b4782/images/strip.png',
          },
        },
      },
      DecodedToken: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '5f7f9b9a4a9920007c9f623',
          },
          walletName: {
            type: 'string',
            example: 'Impact Arena',
          },
          walletLogo: {
            type: 'string',
            example: 'static/bad50e6bc4b0cde87a2a0a69/images/logo.png',
          },
          creationDate: {
            type: 'string',
            example: '2020-10-12T12:00:00.000Z',
          },
          role: {
            type: 'string',
            example: 'manager',
          },
          wallet: {
            type: 'string',
            example: 'bad50e6bc4b0cde87a2a0a69',
          },
          username: {
            type: 'string',
            example: 'john.doe',
          },
          email: {
            type: 'string',
            example: 'sami@test.test',
          },
          allowedPasses: {
            type: 'array',
            items: {
              type: 'string',
              example: ['Offer', 'coupon'],
            },
          },
        },
      },
      Wallet: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '629d005a34a9920007c9f623',
          },
          name: {
            type: 'string',
            example: 'Impact Arena',
          },
          businessPhone: {
            type: 'string',
            example: '+33142084254',
          },
          servicePhone: {
            type: 'string',
            example: '+33142013854',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#ffffff',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          programName: {
            type: 'string',
            example: 'Carte de Fidélité',
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#adadad',
              },
              rgb: {
                type: 'string',
                example: 'rgb(173,173,173)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#ffffff',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          barcodeType: {
            type: 'string',
            enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
            example: 'QR',
          },
          validity: {
            type: 'object',
            properties: {
              expirationType: {
                type: 'string',
                enum: ['NO_EXPIRATION', 'AT_DATETIME', 'AFTER_PERIOD'],
                example: 'NO_EXPIRATION',
              },
              expirationDate: {
                type: 'string',
                example: '2022-10-13T01:49:58.936Z',
              },
              expirationAfterPeriod: {
                type: 'string',
                example: '4,MONTHS',
              },
            },
          },
          additionalContacts: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'PhoneNumber',
                },
                value: {
                  type: 'string',
                  example: '+33142084254',
                },
                kind: {
                  type: 'string',
                  enum: ['URL', 'PHONE', 'EMAIL'],
                  example: 'PHONE',
                },
              },
            },
          },
          socialMedia: {
            type: 'object',
            properties: {
              facebook: {
                type: 'string',
                example: 'https://www.facebook.com/impactarena',
              },
              instagram: {
                type: 'string',
                example: 'https://www.instagram.com/impactarena',
              },
              linkedin: {
                type: 'string',
                example: 'https://www.linkedin.com/impactarena',
              },
            },
          },
          website: {
            type: 'string',
            example: 'https://impactarena.com',
          },
          address: {
            type: 'string',
            example: '1 rue de la paix',
          },
          openingHours: {
            type: 'string',
            example: 'Lundi au vendredi de 9h à 18h',
          },
          descriptions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'Description',
                },
                value: {
                  type: 'string',
                  example: 'Impact Arena est une salle de sport située à Paris',
                },
              },
            },
          },
          identifierQr: {
            type: 'string',
            example: '5677',
          },
          identifier: {
            type: 'string',
            example: 'bad50e6bc4b0cde87a2a0a69',
          },
          emailingConfig: {
            type: 'string',
            enum: ['SES', 'SMTP'],
            example: 'SES',
          },
          displayWalletName: {
            type: 'boolean',
            example: true,
          },
          locations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: 'Impact Arena',
                },
                address: {
                  type: 'string',
                  example: '1 rue de la paix',
                },
                latitude: {
                  type: 'number',
                  example: 48.856614,
                },
                longitude: {
                  type: 'number',
                  example: 2.3522219,
                },
              },
            },
          },
          gainUnit: {
            type: 'string',
            enum: ['POINTS', 'EURO', 'USD'],
            example: 'EURO',
          },
          logoPictureUrl: {
            type: 'string',
            example: 'static/bad50e6bc4b0cde87a2a0a69/images/logo.png',
          },
          iconPictureUrl: {
            type: 'string',
            example: 'static/bad50e6bc4b0cde87a2a0a69/images/icon.png',
          },
          stripPictureUrl: {
            type: 'string',
            example: 'static/bad50e6bc4b0cde87a2a0a69/images/strip.png',
          },
          hiddenFields: {
            type: 'array',
            items: {},
          },
          iosHeaderFields: {
            type: 'object',
            properties: {
              label: {
                type: 'string',
              },
              value: {
                type: 'string',
              },
              labelPersonnalizedText: {
                type: 'string',
              },
              valuePersonnalizedText: {
                type: 'string',
              },
            },
          },
          login: {
            type: 'string',
            example: 'impactarena',
          },
          email: {
            type: 'string',
            example: '',
          },
          communicationEmail: {
            type: 'string',
            example: '',
          },
        },
      },
      Coupon: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
          },
          name: {
            type: 'string',
            example: 'Coupon 1',
          },
          barcodeType: {
            type: 'string',
            enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
          },
          status: {
            type: 'string',
            enum: ['ACTIF', 'INACTIF', 'EXPIRED'],
          },
          source: {
            type: 'string',
            enum: ['internal', 'external', 'crm', 'ALL'],
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#adadad',
              },
              rgb: {
                type: 'string',
                example: 'rgb(173,173,173)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#adadad',
              },
              rgb: {
                type: 'string',
                example: 'rgb(173,173,173)',
              },
            },
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#adadad',
              },
              rgb: {
                type: 'string',
                example: 'rgb(173,173,173)',
              },
            },
          },
          promoCode: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
          wallet: {
            type: 'string',
          },
          startDate: {
            type: 'string',
            format: 'date-time',
          },
          expirationDate: {
            type: 'string',
            format: 'date-time',
          },
          description: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
          },
          couponPictureUrl: {
            type: 'string',
          },
        },
      },
      CouponCustomer: {
        type: 'object',
        properties: {
          walletId: {
            type: 'string',
          },
          couponId: {
            type: 'string',
          },
          customerId: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
          },
          updatedAt: {
            type: 'string',
          },
          customerName: {
            type: 'string',
          },
          customer: {
            type: 'object',
          },
          barcode: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
          promoCode: {
            type: 'string',
          },
          expirationDate: {
            type: 'string',
          },
          device: {
            type: 'string',
          },
        },
      },
      Settings: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '5f7f9b9a4a9920007c9f623',
          },
          expiredOfferEmailMessage: {
            type: 'string',
            example: 'Votre offre est expirée',
          },
          newCouponNotificationMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newOfferNotificationMessage: {
            type: 'string',
            example: 'Vous avez reçu une nouvelle offre',
          },
          expiredOfferNotificationMessage: {
            type: 'string',
            example: 'Votre offre est expirée',
          },
          newAccountSMSMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau carte',
          },
          newEventSMSMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau event',
          },
          expiredOfferSMSMessage: {
            type: 'string',
            example: 'Votre offre est expirée',
          },
          newUpdateSMSMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          newCouponSMSMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newOfferSMSMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau offer',
          },
          enableNewUpdateEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewStorecardEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableStorecardReminderEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewStorecardSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableStorecardReminderSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewUpdateNotification: {
            type: 'boolean',
            example: true,
          },
          enableUpdateStoreCardSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableUpdateEventNotification: {
            type: 'boolean',
            example: true,
          },
          enableCouponEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableUpdateCouponEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponEmailMessageForExternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponEmailMessageForInternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponEmailMessageForCRMClients: {
            type: 'boolean',
            example: true,
          },
          enableCouponSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableUpdateCouponSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableExpiredCouponSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponSMSMessageForExternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponSMSMessageForInternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponSMSMessageForCRMClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponNotificationMessageForExternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponNotificationMessageForInternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponNotificationMessageForCRMClients: {
            type: 'boolean',
            example: true,
          },
          enableUpdateCouponNotificationMessage: {
            type: 'boolean',
            example: true,
          },
          enableUpdateEventEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewCouponNotificationMessage: {
            type: 'boolean',
            example: true,
          },
          enableOfferEmailMessage: {
            type: 'boolean',
            example: true,
          },
          showBarcode: {
            type: 'boolean',
            example: true,
          },
          enableExpiredOfferEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableOfferSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableExpiredOfferSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewOfferNotificationMessage: {
            type: 'boolean',
            example: true,
          },
          enableExpiredOfferNotificationMessage: {
            type: 'boolean',
            example: true,
          },
          apiKey: {
            type: 'string',
            example: '54984568',
          },
          communicationEmail: {
            type: 'object',
            properties: {
              auth: {
                type: 'object',
                properties: {
                  user: {
                    type: 'string',
                    format: 'nullable',
                  },
                  pass: {
                    type: 'string',
                    format: 'nullable',
                  },
                },
              },
              host: {
                type: 'string',
                format: 'nullable',
              },
              port: {
                type: 'string',
                format: 'nullable',
              },
            },
          },
          communicationChannels: {
            type: 'string',
            enum: ['phoneNumber', 'emailAdress', 'all'],
            example: 'all',
          },
          smsTitle: {
            type: 'string',
            example: 'ImpactArena',
          },
          emailingConfig: {
            type: 'string',
            example: 'SES',
          },
          offerEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          newAccountEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          couponEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          eventEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          flightEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          cinemaEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          hotelEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          boatEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          trainEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          busEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          storeCardUpdateEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          couponNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          eventNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          cinemaNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          flightNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          newUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          newUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          hotelNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          cinemaNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          eventNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          giftCardNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          emailMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newOfferEmailMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newEventEmailMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau event',
          },
          cinemaEmailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau billet cinema',
          },
          hotelEmailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau reservation',
          },
          transitEmailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage',
          },
          flightEmailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage',
          },
          newCouponEmailMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newEventNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau évenement.',
          },
          newFlightNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage.',
          },
          newTransitNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage.',
          },
          newHotelNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau reservation hotel.',
          },
          newCinemaNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de cinema.',
          },
          wallet: {
            type: 'string',
            example: '6372531ec5dcfa0007a695a8',
          },
          hasSMSAccount: {
            type: 'boolean',
            example: false,
          },
          smsCredits: {
            type: 'number',
            example: -1,
          },
          newStoreCardNotificationSubscriptionMessage: {
            type: 'string',
            example:
              'We will send only the most profitable as well as information about the loyalty program',
          },
          transitNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          transitNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          smsMessageRegistration: {
            type: 'string',
            example:
              'Welcome to the world of discounts and promotions. We will send only the most profitable as well as information about the loyalty program',
          },
        },
      },
      Event: {
        properties: {
          _id: {
            type: 'string',
            example: '6380a2b87c60100007a407ff',
          },
          security: {
            required: [
              'enableOneTimeUse',
              'disableIOSPassSharing',
              'disableMultipleHolders',
              'enableSecurityAnimation',
              'enableRotatingBarcode',
            ],
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
                example: false,
              },
              disableIOSPassSharing: {
                type: 'boolean',
                example: false,
              },
              disableMultipleHolders: {
                type: 'boolean',
                example: true,
              },
              enableSecurityAnimation: {
                type: 'boolean',
                example: true,
              },
              enableRotatingBarcode: {
                type: 'boolean',
                example: true,
              },
            },
            type: 'object',
          },
          barcodeType: {
            type: 'string',
            enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
          },
          subscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau évenement',
          },
          emailSubscriptionMessage: {
            type: 'string',
            example: "<p>Merci de vous être abonné à l'événement</p>",
          },
          status: {
            type: 'string',
            example: 'ACTIF',
          },
          address: {
            type: 'string',
            example: "Adresse d'emplacement*",
          },
          backgroundColor: {
            required: ['hex', 'rgb'],
            properties: {
              hex: {
                type: 'string',
                example: '#ffffff',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
            type: 'object',
          },
          contactPhone: {
            type: 'string',
            example: '+26541358',
          },
          date: {
            required: ['openingHour', 'closingHour', 'doorOpeningHour'],
            properties: {
              openingHour: {
                type: 'string',
                example: '2022-11-25T10:11:19.974Z',
              },
              closingHour: {
                type: 'string',
                example: '2022-11-25T10:11:19.974Z',
              },
              doorOpeningHour: {
                type: 'string',
                example: '2022-11-25T10:11:19.974Z',
              },
            },
            type: 'object',
          },
          email: {
            type: 'string',
            format: 'email',
            example: 'event@gmail.com',
          },
          foregroundColor: {
            required: ['hex', 'rgb'],
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
            type: 'object',
          },
          labelColor: {
            required: ['hex', 'rgb'],
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
            type: 'object',
          },
          locationName: {
            type: 'string',
            example: "Nom d'emplacement*",
          },
          name: {
            type: 'string',
            example: 'Nom ',
          },
          price: {
            type: 'number',
            example: 15,
          },
          terms: {
            type: 'string',
            example: 'Termes et conditions*',
          },
          website: {
            type: 'string',
            example: 'https://manager.bestwallet.astrolab-agency.com',
          },
          locations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6380a2b97c60100007a40801',
                },
                longitude: {
                  type: 'number',
                  example: 2.3125185928956062,
                },
                latitude: {
                  type: 'number',
                  example: 49.07575430649549,
                },
                relevantText: {
                  type: 'string',
                  example: '',
                },
              },
            },
          },
          wallet: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '629d005a34a9920007c9f623',
                },
                emailingConfig: {
                  type: 'string',
                  example: 'SES',
                },
                gainUnit: {
                  type: 'string',
                  example: '€',
                },
                displayWalletName: {
                  type: 'boolean',
                  example: true,
                },
                name: {
                  type: 'string',
                  example: 'Impact Arena',
                },
                businessPhone: {
                  type: 'string',
                  example: ' +33142013854 ',
                },
                servicePhone: {
                  type: 'string',
                  example: '5464844',
                },
                locations: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      _id: {
                        type: 'string',
                        example: '629d005a34a9920007c9f624',
                      },
                      longitude: {
                        type: 'number',
                        example: 2.3369557,
                      },
                      latitude: {
                        type: 'number',
                        example: 48.85062139999999,
                      },
                      relevantText: {
                        type: 'string',
                        example: 'dsqdqs',
                      },
                    },
                  },
                },
                labelColor: {
                  required: ['hex', 'rgb'],
                  properties: {
                    hex: {
                      type: 'string',
                      example: '#ffffff',
                    },
                    rgb: {
                      type: 'string',
                      example: 'rgb(255,255,255)',
                    },
                  },
                  type: 'object',
                },
                backgroundColor: {
                  required: ['hex', 'rgb'],
                  properties: {
                    hex: {
                      type: 'string',
                      example: '#adadad',
                    },
                    rgb: {
                      type: 'string',
                      example: 'rgb(173,173,173)',
                    },
                  },
                  type: 'object',
                },
                foregroundColor: {
                  required: ['hex', 'rgb'],
                  properties: {
                    hex: {
                      type: 'string',
                      example: '#ffffff',
                    },
                    rgb: {
                      type: 'string',
                      example: 'rgb(255,255,255)',
                    },
                  },
                  type: 'object',
                },
                additionalContacts: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      _id: {
                        type: 'string',
                        example: '6387240430c6330007db356a',
                      },
                      title: {
                        type: 'string',
                        example: '',
                      },
                      kind: {
                        type: 'string',
                        example: 'URL',
                      },
                      value: {
                        type: 'string',
                        example: '',
                      },
                    },
                  },
                },
                socialMedia: {
                  required: ['facebook', 'instagram', 'linkedin'],
                  properties: {
                    facebook: {
                      type: 'string',
                      example: '',
                    },
                    instagram: {
                      type: 'string',
                      example: 'https://new.fr',
                    },
                    linkedin: {
                      type: 'string',
                      example: '',
                    },
                  },
                  type: 'object',
                },
                website: {
                  type: 'string',
                  example: 'https://new.fr',
                },
                address: {
                  type: 'string',
                  example: '18 Rue de Tournon, 75006 Paris, France ',
                },
                openingHours: {
                  type: 'string',
                  example:
                    'Monday 07h30 - 02h\r\nTuesday 07h30 - 02h\r\nWednesday 07h30 - 02h\r\nThursday 07h30 - 02h\r\nFriday 07h30 - 02h\r\nSaturday 07h30 - 02h\r\nSunday 07h30 - 02h ',
                },
                descriptions: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      _id: {
                        type: 'string',
                        example: '629d005a34a9920007c9f625',
                      },
                      title: {
                        type: 'string',
                        example: 'description',
                      },
                      value: {
                        type: 'string',
                        example: 'description details',
                      },
                    },
                  },
                },
                identifierQr: {
                  type: 'string',
                  example: '5677',
                },
                identifier: {
                  type: 'string',
                  example: 'bad50e6bc4b0cde87a2a0a69',
                },
                __v: {
                  type: 'number',
                  example: 0,
                },
                validity: {
                  required: [
                    'expirationType',
                    'expirationDate',
                    'expirationAfterPeriod',
                  ],
                  properties: {
                    expirationType: {
                      type: 'string',
                      example: 'NO_EXPIRATION',
                    },
                  },
                  type: 'object',
                },
                barcodeType: {
                  type: 'string',
                  enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
                },
                updatedAt: {
                  type: 'string',
                  example: '2022-12-21T14:46:17.627Z',
                },
                hiddenFields: {
                  type: 'array',
                  items: {
                    type: 'string',
                    example: 'CREATION_DATE',
                  },
                },
                iosHeaderFields: {
                  required: [
                    'label',
                    'value',
                    'labelPersonnalizedText',
                    'valuePersonnalizedText',
                  ],
                  properties: {
                    label: {
                      type: 'string',
                      example: 'REWARDS',
                    },
                    value: {
                      type: 'string',
                      example: 'TYPE',
                    },
                    labelPersonnalizedText: {
                      type: 'string',
                      example: '',
                    },
                    valuePersonnalizedText: {
                      type: 'string',
                      example: '',
                    },
                  },
                  type: 'object',
                },
              },
            },
          },
          createdAt: {
            type: 'string',
            example: '2022-11-25T11:10:49.744Z',
          },
          updatedAt: {
            type: 'string',
            example: '2022-11-29T09:45:44.190Z',
          },
          __v: {
            type: 'number',
            example: 0,
          },
          strip: {
            type: 'string',
            example:
              'static/bad50e6bc4b0cde87a2a0a69/events/6380a2b87c60100007a407ff/images/strip.png',
          },
        },
        type: 'object',
      },
      EventCustomer: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '63b82506b49df2000751c9df',
          },
          passId: {
            type: 'string',
            example: '63c6704103194514c0d4de04',
          },
          createdAt: {
            type: 'string',
            example: '2023-01-17T09:54:09.825Z',
          },
          updatedAt: {
            type: 'string',
            example: '2023-01-17T09:54:09.825Z',
          },
          door: {
            type: 'string',
            example: '17B',
          },
          row: {
            type: 'string',
            example: '2',
          },
          chair: {
            type: 'string',
            example: '1',
          },
          ticketHolderName: {
            type: 'string',
            example: 'test tset',
          },
        },
      },
      Flight: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '6356be11389ee90007a3a011',
          },
          security: {
            type: 'object',
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
              },
              disableIOSPassSharing: {
                type: 'boolean',
              },
              disablePassLinkSharing: {
                type: 'boolean',
              },
              disableMultipleHolders: {
                type: 'boolean',
              },
              enableSecurityAnimation: {
                type: 'boolean',
              },
              enableRotatingBarcode: {
                type: 'boolean',
              },
            },
          },
          layovers: {
            type: 'array',
            items: {
              type: 'string',
              example: 'Mulhouse',
            },
          },
          customerServiceNumber: {
            type: 'string',
            example: '+330174466426',
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#303030',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          details: {
            type: 'string',
            example: 'Welcome to the airport',
          },
          origin: {
            type: 'object',
            properties: {
              airportIataCode: {
                type: 'string',
                example: 'LAX',
              },
              gate: {
                type: 'string',
                example: 'A1',
              },
              terminal: {
                type: 'string',
                example: '1',
              },
              airportName: {
                type: 'string',
                example: 'Ho Chi Minh City',
              },
            },
          },
          number: {
            type: 'number',
            example: '15',
          },
          carrierIataCode: {
            type: 'string',
            example: 'LX',
          },
          destination: {
            type: 'object',
            properties: {
              airportIataCode: {
                type: 'string',
                example: 'SFO',
              },
              gate: {
                type: 'string',
                example: 'c3',
              },
              terminal: {
                type: 'string',
                example: '2',
              },
              airportName: {
                type: 'string',
                example: 'Tokyo Haneda',
              },
            },
          },
          departureDateTime: {
            type: 'string',
            example: '2022-11-04T19:00:00.000Z',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#303030',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#F0F4FF',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          wallet: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '635160786ac48600084a195c',
              },
              validity: {
                type: 'object',
                properties: {
                  expirationType: {
                    type: 'string',
                    example: 'NO_EXPIRATION',
                  },
                  expirationDate: {
                    type: 'boolean',
                    format: 'nullable',
                  },
                  expirationAfterPeriod: {
                    type: 'boolean',
                    format: 'nullable',
                  },
                },
              },
              emailingConfig: {
                type: 'string',
                example: 'SES',
              },
              gainUnit: {
                type: 'string',
                example: 'EURO',
              },
              displayWalletName: {
                type: 'boolean',
              },
              name: {
                type: 'string',
                example: 'Best Coupon',
              },
              businessPhone: {
                type: 'string',
                example: '0696 72 78 44',
              },
              servicePhone: {
                type: 'string',
                example: '',
              },
              locations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '635160786ac48600084a195d',
                    },
                    longitude: {
                      type: 'number',
                      example: '-61.07022',
                    },
                    latitude: {
                      type: 'number',
                      example: '14.605802',
                    },
                    relevantText: {
                      type: 'string',
                      example: '',
                    },
                  },
                },
              },
              labelColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#4646f7',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(70,70,247)',
                  },
                },
              },
              backgroundColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#f0f4ff',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(240,244,255)',
                  },
                },
              },
              foregroundColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#303030',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(48,48,48)',
                  },
                },
              },
              additionalContacts: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '635160786ac48600084a195e',
                    },
                    title: {
                      type: 'string',
                      example: 'Caudalie',
                    },
                    kind: {
                      type: 'string',
                      example: 'EMAIL',
                    },
                    value: {
                      type: 'string',
                      example: 'philippe.kelsch@orange.fr',
                    },
                  },
                },
              },
              socialMedia: {
                type: 'object',
                properties: {
                  facebook: {
                    type: 'string',
                    example: 'https://www.facebook.com/Caudalie',
                  },
                  instagram: {
                    type: 'string',
                    example: '',
                  },
                  linkedin: {
                    type: 'string',
                    example: '',
                  },
                },
              },
              website: {
                type: 'string',
                example: '',
              },
              address: {
                type: 'string',
                example:
                  '67 Rue du Président Édouard Herriot, 69002 Lyon, France',
              },
              openingHours: {
                type: 'string',
                example: 'Lundi – Samedi 9H 18H30',
              },
              descriptions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '635160786ac48600084a195f',
                    },
                    title: {
                      type: 'string',
                      example: 'Caudalie Boutique Spa',
                    },
                    value: {
                      type: 'string',
                      example: 'HOMME, FEMME, ENFANT, BEBE',
                    },
                  },
                },
              },
              identifierQr: {
                type: 'string',
                example: '7287',
              },
              identifier: {
                type: 'string',
                example: '8c94118f2a9e7a96b01e32f4',
              },
              __v: {
                type: 'number',
                example: '0',
              },
              barcodeType: {
                type: 'string',
                example: 'CODE128',
              },
              updatedAt: {
                type: 'string',
                example: '2022-12-22T09:35:37.555Z',
              },
              hiddenFields: {
                type: 'array',
                items: {},
              },
              iosHeaderFields: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'REWARDS',
                  },
                  value: {
                    type: 'string',
                    example: 'REWARDS',
                  },
                },
              },
            },
          },
          locations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6363d64b52013d0007eb986d',
                },
                longitude: {
                  type: 'number',
                  example: '0',
                },
                latitude: {
                  type: 'number',
                  example: '0',
                },
              },
            },
          },
          createdAt: {
            type: 'string',
            example: '2022-10-24T16:32:18.440Z',
          },
          updatedAt: {
            type: 'string',
            example: '2022-11-03T15:14:52.283Z',
          },
          __v: {
            type: 'number',
            example: '0',
          },
          barcodeType: {
            type: 'string',
            enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
            example: 'QR',
          },
          flightId: {
            type: 'string',
            example: '6356be11389ee90007a3a011',
          },
          flightPictureUrl: {
            type: 'string',
            example:
              'static/8c94118f2a9e7a96b01e32f4/flights/6356be11389ee90007a3a011/images/strip.png',
          },
        },
      },
      Transit: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '6347d55ce8dde80007c83a3a',
          },
          subscriptionMessage: {
            type: 'string',
            example:
              'Cliquez sur le bouton ci-dessous pour enregistrer votre passe',
          },
          emailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage',
          },
          customerServiceNumber: {
            type: 'string',
            example: '+330174466426',
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          departureTime: {
            type: 'string',
            example: '16:20',
          },
          details: {
            type: 'string',
            example: 'Welcome aboard',
          },
          tarif: {
            type: 'string',
            example: '5 €',
          },
          arrivalTime: {
            type: 'string',
            example: '20:50',
          },
          terms: {
            type: 'string',
            example:
              'Please read the Terms of Use carefully before you start to use our services',
          },
          number: {
            type: 'number',
            example: '15',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          originName: {
            type: 'string',
            example: 'San Francisco',
          },
          destinationStationCode: {
            type: 'string',
            example: 'LA',
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          destinationName: {
            type: 'string',
            example: 'Los Angeles',
          },
          type: {
            type: 'string',
            example: 'bus',
          },
          originStationCode: {
            type: 'string',
            example: 'SFO',
          },
          wallet: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '6149faef9f08400007e90948',
              },
              gainUnit: {
                type: 'string',
                example: '€',
              },
              name: {
                type: 'string',
                example: 'fnac Spectacles',
              },
              businessPhone: {
                type: 'string',
                example: '33758934208',
              },
              servicePhone: {
                type: 'string',
                example: '33758934208',
              },
              locations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6149fb139f08400007e90981',
                    },
                    longitude: {
                      type: 'number',
                      example: '26',
                    },
                    latitude: {
                      type: 'number',
                      example: '58',
                    },
                    relevantText: {
                      type: 'string',
                      example: 'Dolor voluptatem Ad',
                    },
                  },
                },
              },
              labelColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#000000',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(0,0,0)',
                  },
                },
              },
              backgroundColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#726251',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(114,98,81)',
                  },
                },
              },
              foregroundColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#ffffff',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(255,255,255)',
                  },
                },
              },
              additionalContacts: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '636a2b7876a5030007d68555',
                    },
                    title: {
                      type: 'string',
                      example: '',
                    },
                    kind: {
                      type: 'string',
                      example: 'URL',
                    },
                    value: {
                      type: 'string',
                      example: '',
                    },
                  },
                },
              },
              socialMedia: {
                type: 'object',
                properties: {
                  facebook: {
                    type: 'string',
                    example: 'https://www.bekudoxiwijoka.ws',
                  },
                  instagram: {
                    type: 'string',
                    example: '',
                  },
                  linkedin: {
                    type: 'string',
                    example: '',
                  },
                },
              },
              website: {
                type: 'string',
                example: 'https://new.fr',
              },
              address: {
                type: 'string',
                example: 'lalaalaalal',
              },
              openingHours: {
                type: 'string',
                example: 'Molestiae perspiciat',
              },
              descriptions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6149fb139f08400007e90983',
                    },
                    title: {
                      type: 'string',
                      example: 'Veritatis mollitia q',
                    },
                    value: {
                      type: 'string',
                      example: 'Commodo aut ut esse',
                    },
                  },
                },
              },
              identifierQr: {
                type: 'string',
                example: '15439',
              },
              identifier: {
                type: 'string',
                example: 'd527a7223f2e544f5981acf6',
              },
              emailingConfig: {
                type: 'string',
                example: 'SES',
              },
              displayWalletName: {
                type: 'boolean',
              },
              validity: {
                type: 'object',
                properties: {
                  expirationType: {
                    type: 'string',
                    example: 'NO_EXPIRATION',
                  },
                  expirationDate: {
                    type: 'boolean',
                    format: 'nullable',
                  },
                  expirationAfterPeriod: {
                    type: 'boolean',
                    format: 'nullable',
                  },
                },
              },
              hiddenFields: {
                type: 'array',
                items: {},
              },
              iosHeaderFields: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'REWARDS',
                  },
                  value: {
                    type: 'string',
                    example: 'TYPE',
                  },
                  labelPersonnalizedText: {
                    type: 'string',
                    example: '',
                  },
                  valuePersonnalizedText: {
                    type: 'string',
                    example: '',
                  },
                },
              },
              updatedAt: {
                type: 'string',
                example: '2022-12-16T14:29:27.493Z',
              },
            },
          },
          locations: {
            type: 'array',
            items: {},
          },
          createdAt: {
            type: 'string',
            example: '2022-10-13T09:07:46.444Z',
          },
          updatedAt: {
            type: 'string',
            example: '2022-10-13T09:07:46.444Z',
          },
          __v: {
            type: 'number',
            example: '0',
          },
          transitId: {
            type: 'string',
            example: '6347d55ce8dde80007c83a3a',
          },
          transitPictureUrl: {
            type: 'string',
            example:
              'static/d527a7223f2e544f5981acf6/transits/6347d55ce8dde80007c83a3a/images/strip.png',
          },
          security: {
            required: [
              'enableOneTimeUse',
              'disableIOSPassSharing',
              'disableMultipleHolders',
              'enableSecurityAnimation',
              'enableRotatingBarcode',
            ],
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
                example: false,
              },
              disableIOSPassSharing: {
                type: 'boolean',
                example: false,
              },
              disableMultipleHolders: {
                type: 'boolean',
                example: true,
              },
              enableSecurityAnimation: {
                type: 'boolean',
                example: true,
              },
              enableRotatingBarcode: {
                type: 'boolean',
                example: true,
              },
              barcodeType: {
                type: 'string',
                enum: ['CODE128', 'PDF417', 'QR', 'AZTEC', 'NONE'],
              },
            },
            type: 'object',
          },
        },
      },
      Hotel: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '621deb72902e390007241b00',
          },
          subscriptionMessage: {
            type: 'string',
            example:
              'Cliquez sur le bouton ci-dessous pour enregistrer votre passe',
          },
          emailSubscriptionMessage: {
            type: 'string',
            example: "Vous avez une nouvelle réservation d'hôtel",
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#FFFFFF',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          name: {
            type: 'string',
            example: 'Hôtel de France',
          },
          terms: {
            type: 'string',
            example: 'terms',
          },
          contactPhone: {
            type: 'string',
            example: '+216 111 111',
          },
          type: {
            type: 'string',
            enum: [
              'single',
              'double',
              'triple',
              'quad',
              'queen',
              'king',
              'twin',
              'doubleDouble',
              'studio',
              'suite',
              'juniorSuite',
              'presidentSuite',
              'apartment',
              'connectingRoom',
              'murphyRoom',
              'accessibleRoom',
              'adjoiningtoom',
              'adjacentRoom',
              'villa',
            ],
          },
          email: {
            type: 'string',
            example: 'test@email.com',
          },
          barcodeType: {
            type: 'string',
            enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
            example: 'QR',
          },
          locations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '621deb73902e390007241b02',
                },
                longitude: {
                  type: 'number',
                  example: '2.3125185928956062',
                },
                latitude: {
                  type: 'number',
                  example: '49.07575430649549',
                },
              },
            },
          },
          address: {
            type: 'string',
            example: 'France',
          },
          wallet: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '6149fb139f08400007e90980',
              },
              gainUnit: {
                type: 'string',
                example: 'e',
              },
              name: {
                type: 'string',
                example: 'Sami',
              },
              businessPhone: {
                type: 'string',
                example: '+1 (269) 964-777',
              },
              servicePhone: {
                type: 'string',
                example: '+1 (277) 965-4475',
              },
              locations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6149fb139f08400007e90981',
                    },
                    longitude: {
                      type: 'number',
                      example: '26',
                    },
                    latitude: {
                      type: 'number',
                      example: '58',
                    },
                    relevantText: {
                      type: 'string',
                      example: 'Dolor voluptatem Ad',
                    },
                  },
                },
              },
              labelColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#000000',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(0,0,0)',
                  },
                },
              },
              backgroundColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#726252',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(114,98,82)',
                  },
                },
              },
              foregroundColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#ffffff',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(255,255,255)',
                  },
                },
              },
              additionalContacts: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6307205d4b08200008093807',
                    },
                    title: {
                      type: 'string',
                      example: '',
                    },
                    kind: {
                      type: 'string',
                      example: 'URL',
                    },
                    value: {
                      type: 'string',
                      example: '',
                    },
                  },
                },
              },
              socialMedia: {
                type: 'object',
                properties: {
                  facebook: {
                    type: 'string',
                    example: 'https://www.bekudoxiwijoka.ws',
                  },
                  instagram: {
                    type: 'string',
                    example: '',
                  },
                  linkedin: {
                    type: 'string',
                    example: '',
                  },
                },
              },
              website: {
                type: 'string',
                example: 'https://new.fr',
              },
              address: {
                type: 'string',
                example: 'lalaalaalal',
              },
              openingHours: {
                type: 'string',
                example: 'Molestiae perspiciat',
              },
              descriptions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6149fb139f08400007e90983',
                    },
                    title: {
                      type: 'string',
                      example: 'Veritatis mollitia q',
                    },
                    value: {
                      type: 'string',
                      example: 'Commodo aut ut esse',
                    },
                  },
                },
              },
              identifierQr: {
                type: 'string',
                example: '5439',
              },
              identifier: {
                type: 'string',
                example: '13a5102b51e3b30c6e0cd241',
              },
              __v: {
                type: 'number',
                example: '0',
              },
              emailingConfig: {
                type: 'string',
                example: 'SES',
              },
              displayWalletName: {
                type: 'boolean',
              },
              validity: {
                type: 'object',
                properties: {
                  expirationType: {
                    type: 'string',
                    example: 'AT_DATETIME',
                  },
                  expirationDate: {
                    type: 'string',
                    example: '2021-10-20T01:49:58.936Z',
                  },
                  expirationAfterPeriod: {
                    type: 'boolean',
                    format: 'nullable',
                  },
                },
              },
              hiddenFields: {
                type: 'array',
                items: {},
              },
              iosHeaderFields: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'REWARDS',
                  },
                  value: {
                    type: 'string',
                    example: 'TYPE',
                  },
                  labelPersonnalizedText: {
                    type: 'string',
                    example: '',
                  },
                  valuePersonnalizedText: {
                    type: 'string',
                    example: '',
                  },
                },
              },
            },
          },
          createdAt: {
            type: 'string',
            example: '2022-03-01T09:46:27.162Z',
          },
          updatedAt: {
            type: 'string',
            example: '2022-03-01T09:46:27.162Z',
          },
          number: {
            type: 'string',
            example: '22',
          },
          hotelId: {
            type: 'string',
            example: '621deb72902e390007241b00',
          },
          hotelPictureUrl: {
            type: 'string',
            example:
              'static/13a5102b51e3b30c6e0cd241/hotels/621deb72902e390007241b00/images/strip.png',
          },
        },
      },
      Cinema: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            example: '6212054aee1fb35904b46812',
          },
          subscriptionMessage: {
            type: 'string',
            example:
              'Cliquez sur le bouton ci-dessous pour enregistrer votre passe',
          },
          emailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de cinéma',
          },
          status: {
            type: 'string',
            example: 'ACTIF',
          },
          security: {
            type: 'object',
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
              },
              disableIOSPassSharing: {
                type: 'boolean',
              },
              disablePassLinkSharing: {
                type: 'boolean',
              },
              disableMultipleHolders: {
                type: 'boolean',
              },
              enableSecurityAnimation: {
                type: 'boolean',
              },
              enableRotatingBarcode: {
                type: 'boolean',
              },
            },
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          price: {
            type: 'integer',
            example: '20',
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#FFFFFF',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          date: {
            type: 'object',
            properties: {
              openingHour: {
                type: 'string',
                example: '2023-12-12T23:20:50.520Z',
              },
              closingHour: {
                type: 'string',
                example: '2023-12-12T23:20:50.520Z',
              },
              doorOpeningHour: {
                type: 'string',
                example: '2023-12-12T23:20:50.520Z',
              },
            },
          },
          name: {
            type: 'string',
            example: 'Cinema',
          },
          terms: {
            type: 'string',
            example: 'terms',
          },
          contactPhone: {
            type: 'string',
            example: '+216 111 111',
          },
          email: {
            type: 'string',
            example: 'contact@orgazone.fr',
          },
          website: {
            type: 'string',
            example: 'www.google.com',
          },
          address: {
            type: 'string',
            example: 'monastir',
          },
          locationName: {
            type: 'string',
            example: 'locationName',
          },
          wallet: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '6149fb139f08400007e90980',
              },
              gainUnit: {
                type: 'string',
                example: 'e',
              },
              name: {
                type: 'string',
                example: 'Sami',
              },
              businessPhone: {
                type: 'string',
                example: '+1 (269) 964-777',
              },
              servicePhone: {
                type: 'string',
                example: '+1 (277) 965-4475',
              },
              locations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6149fb139f08400007e90981',
                    },
                    longitude: {
                      type: 'integer',
                      format: 'int32',
                      example: '26',
                    },
                    latitude: {
                      type: 'integer',
                      format: 'int32',
                      example: '58',
                    },
                    relevantText: {
                      type: 'string',
                      example: 'Dolor voluptatem Ad',
                    },
                  },
                },
              },
              labelColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#000000',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(0,0,0)',
                  },
                },
              },
              backgroundColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#726252',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(114,98,82)',
                  },
                },
              },
              foregroundColor: {
                type: 'object',
                properties: {
                  hex: {
                    type: 'string',
                    example: '#ffffff',
                  },
                  rgb: {
                    type: 'string',
                    example: 'rgb(255,255,255)',
                  },
                },
              },
              additionalContacts: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6307205d4b08200008093807',
                    },
                    title: {
                      type: 'string',
                      example: '',
                    },
                    kind: {
                      type: 'string',
                      example: 'URL',
                    },
                    value: {
                      type: 'string',
                      example: '',
                    },
                  },
                },
              },
              barcodeType: {
                type: 'string',
                enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
              },
              socialMedia: {
                type: 'object',
                properties: {
                  facebook: {
                    type: 'string',
                    example: 'https://www.bekudoxiwijoka.ws',
                  },
                  instagram: {
                    type: 'string',
                    example: '',
                  },
                  linkedin: {
                    type: 'string',
                    example: '',
                  },
                },
              },
              website: {
                type: 'string',
                example: 'https://new.fr',
              },
              address: {
                type: 'string',
                example: 'lalaalaalal',
              },
              openingHours: {
                type: 'string',
                example: 'Molestiae perspiciat',
              },
              descriptions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6149fb139f08400007e90983',
                    },
                    title: {
                      type: 'string',
                      example: 'Veritatis mollitia q',
                    },
                    value: {
                      type: 'string',
                      example: 'Commodo aut ut esse',
                    },
                  },
                },
              },
              identifierQr: {
                type: 'string',
                example: '5439',
              },
              identifier: {
                type: 'string',
                example: '13a5102b51e3b30c6e0cd241',
              },
              __v: {
                type: 'integer',
                format: 'int32',
                example: '0',
              },
              emailingConfig: {
                type: 'string',
                example: 'SES',
              },
              displayWalletName: {
                type: 'boolean',
              },
              validity: {
                type: 'object',
                properties: {
                  expirationType: {
                    type: 'string',
                    example: 'AT_DATETIME',
                  },
                  expirationDate: {
                    type: 'string',
                    example: '2021-10-20T01:49:58.936Z',
                  },
                  expirationAfterPeriod: {
                    type: 'string',
                  },
                },
              },
              hiddenFields: {
                type: 'array',
                items: {},
              },
              iosHeaderFields: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    example: 'REWARDS',
                  },
                  value: {
                    type: 'string',
                    example: 'TYPE',
                  },
                  labelPersonnalizedText: {
                    type: 'string',
                    example: '',
                  },
                  valuePersonnalizedText: {
                    type: 'string',
                    example: '',
                  },
                },
              },
            },
          },
          createdAt: {
            type: 'string',
            example: '2022-02-20T09:09:31.005Z',
          },
          updatedAt: {
            type: 'string',
            example: '2022-02-20T09:09:31.005Z',
          },
          __v: {
            type: 'integer',
            format: 'int32',
            example: '0',
          },
          movieName: {
            type: 'string',
            example: 'spiderman',
          },
          cinemaId: {
            type: 'string',
            example: '6212054aee1fb35904b46812',
          },
          moviePictureUrl: {
            type: 'string',
            example:
              'static/13a5102b51e3b30c6e0cd241/cinemas/6212054aee1fb35904b46812/images/strip.png',
          },
        },
      },
      Customer: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
          },
          gain: {
            type: 'number',
          },
          type: {
            type: 'string',
          },
          phoneNumber: {
            type: 'string',
          },
          preview: {
            type: 'boolean',
            example: false,
          },
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          email: {
            type: 'string',
            format: 'email',
          },
          wallet: {
            type: 'string',
          },
          source: {
            type: 'string',
          },
          barcode: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
          },
        },
      },
      Operation: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
            example: '6464ae2aaf226b3028f146d9',
          },
          jobType: {
            type: 'string',
            example: 'CUSTOMERS_IMPORT',
          },
          status: {
            type: 'string',
            example: 'PENDING',
          },
          startTime: {
            type: 'string',
            format: 'date-time',
            example: '2023-05-17T10:36:26.725Z',
          },
          endTime: {
            type: 'string',
            format: 'date-time',
            example: '2023-05-17T10:36:26.725Z',
          },
          fileName: {
            type: 'string',
            example: '5000.csv',
          },
          numRecords: {
            type: 'integer',
            example: 5000,
          },
          numSuccessful: {
            type: 'integer',
            example: 5000,
          },
          numDuplicates: {
            type: 'integer',
            example: 0,
          },
          numInvalid: {
            type: 'integer',
            example: 0,
          },
          walletId: {
            type: 'string',
            format: 'uuid',
            example: '6464ae2aaf226b3028f146d9',
          },
        },
      },
      Sms_Statistics: {
        title: 'SMS Statistics',
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          data: {
            type: 'object',
            properties: {
              events: {
                type: 'number',
              },
              offers: {
                type: 'number',
              },
              coupons: {
                type: 'number',
              },
              newAccounts: {
                type: 'number',
              },
              creditsQuantity: {
                type: 'number',
              },
              total: {
                type: 'number',
              },
            },
          },
        },
      },
      Email_Statistics: {
        title: 'Email Statistics',
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          data: {
            type: 'object',
            properties: {
              events: {
                type: 'number',
              },
              offers: {
                type: 'number',
              },
              coupons: {
                type: 'number',
              },
              cinemas: {
                type: 'number',
              },
              flights: {
                type: 'number',
              },
              transits: {
                type: 'number',
              },
              hotels: {
                type: 'number',
              },
              passwordResets: {
                type: 'number',
              },
              walletUpdates: {
                type: 'number',
              },
              newAccounts: {
                type: 'number',
              },
              total: {
                type: 'number',
              },
            },
          },
        },
      },
      Customer_Statistics: {
        title: 'Customers Statistics',
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          data: {
            type: 'object',
            properties: {
              deletedAccountsiOS: {
                type: 'number',
              },
              deletedAccountsAndroid: {
                type: 'number',
              },
              actifAccountsiOS: {
                type: 'number',
              },
              actifAccountsAndroid: {
                type: 'number',
              },
              actifAccounts: {
                type: 'number',
              },
              InactifAccounts: {
                type: 'number',
              },
              extrnalSource: {
                type: 'number',
              },
              internalSource: {
                type: 'number',
              },
              crmSource: {
                type: 'number',
              },
              totalCustomers: {
                type: 'number',
              },
            },
          },
        },
      },
      createCinemaPayload: {
        title: 'Create Cinema Ticket',
        type: 'object',
        properties: {
          strip: {
            type: 'string',
            format: 'binary',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#FFFFFF',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          name: {
            type: 'string',
            default: 'Pathé Cinema',
          },
          date: {
            type: 'object',
            properties: {
              openingHour: {
                type: 'string',
                example: '2023-12-12T20:20:50.52Z',
              },
              closingHour: {
                type: 'string',
                example: '2023-12-12T22:20:50.52Z',
              },
              doorOpeningHour: {
                type: 'string',
                example: '2023-12-12T19:20:50.52Z',
              },
            },
          },
          terms: {
            type: 'string',
            default: 'terms',
          },
          email: {
            type: 'string',
            default: 'pathé@cinema.fr',
          },
          screen: {
            type: 'number',
            default: '2',
          },
          movieName: {
            default: 'final fantasy',
            type: 'string',
          },
          price: {
            type: 'string',
            default: '13 €',
          },
          rating: {
            default: 'PG-13',
            type: 'string',
          },
          locationName: {
            type: 'string',
            default: '76, rue de Lille 13400 AUBAGNE',
          },
          address: {
            type: 'string',
            default: '43, rue des Docks 69009 Lyon',
          },
          contactPhone: {
            type: 'string',
            default: '+330174466426',
          },
          website: {
            type: 'string',
            default: 'www.pathecinema.fr',
          },
          security: {
            type: 'object',
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
                example: 'false',
              },
              disableIOSPassSharing: {
                type: 'boolean',
                example: 'false',
              },
              disableMultipleHolders: {
                type: 'boolean',
                example: 'false',
              },
              enableSecurityAnimation: {
                type: 'boolean',
                example: 'false',
              },
              enableRotatingBarcode: {
                type: 'boolean',
                example: 'false',
              },
            },
          },
          barcodeType: {
            type: 'string',
            enum: ['CODE128', 'PDF417', 'QR', 'AZTEC', 'NONE'],
            default: 'CODE128',
          },
        },
      },
      customersCinemaTickets: {
        title: 'Movie ticket',
        type: 'object',
        properties: {
          passId: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
          },
          holderName: {
            type: 'string',
          },
          price: {
            type: 'string',
          },
          screen: {
            type: 'string',
          },
          movieName: {
            type: 'string',
          },
        },
      },
      createCouponPayload: {
        title: 'Create Coupon',
        properties: {
          expirationDate: {
            type: 'string',
            example: '2021-11-23',
          },
          description: {
            type: 'string',
            example: 'description',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#FFFFFF',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          source: {
            type: 'string',
            enum: ['internal', 'external', 'crm', 'ALL'],
            example: 'source',
          },
          status: {
            type: 'string',
            enum: ['ACTIF', 'INACTIF', 'EXPIRED'],
            example: 'status',
          },
          value: {
            type: 'string',
            example: '20%',
          },
          name: {
            type: 'string',
            example: 'Coupon',
          },
          promoCode: {
            type: 'string',
            example: 'promo123',
          },
          strip: {
            type: 'string',
            format: 'binary',
          },
          barcodeType: {
            type: 'string',
            enum: ['CODE128', 'PDF417', 'QR', 'AZTEC', 'NONE'],
            default: 'CODE128',
          },
        },
        type: 'object',
      },
      customersCoupons: {
        type: 'object',
        properties: {
          passId: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          _id: {
            type: 'string',
          },
          promoCode: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
          },
          updatedAt: {
            type: 'string',
          },
          source: {
            type: 'string',
          },
          phoneNumber: {
            type: 'string',
            format: 'nullable',
          },
          accountName: {
            type: 'string',
          },
          customerId: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
          expirationDate: {
            type: 'string',
          },
        },
      },
      createEventPayload: {
        title: 'Create/Update Event',
        type: 'object',
        properties: {
          strip: {
            type: 'string',
            format: 'binary',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#FFFFFF',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          locations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: '76, rue de Lille 13400 AUBAGNE',
                },
                longitude: {
                  type: 'number',
                  example: 2.3125185928956062,
                },
                latitude: {
                  type: 'number',
                  example: 49.07575430649549,
                },
                relevantText: {
                  type: 'string',
                  example: '',
                },
              },
            },
          },
          date: {
            type: 'object',
            properties: {
              openingHour: {
                type: 'string',
                example: '2023-12-12',
              },
              closingHour: {
                type: 'string',
                example: '2023-12-12',
              },
              doorOpeningHour: {
                type: 'string',
                example: '2023-12-12',
              },
            },
          },
          contactPhone: {
            type: 'string',
            example: '+330174466426',
          },
          website: {
            type: 'string',
            example: 'https://www.billetterie.elysee-montmartre.com',
          },
          locationName: {
            type: 'string',
            example: '76, rue de Lille 13400 AUBAGNE',
          },
          terms: {
            type: 'string',
            example: 'Seulement pour le Best',
          },
          name: {
            type: 'string',
            example: 'Élysée Montmartre',
          },
          email: {
            type: 'string',
            example: 'contact@orgazone.fr',
          },
          address: {
            type: 'string',
            example: '72 Blvd Marguerite Paris',
          },
          price: {
            type: 'number',
            example: '150',
          },
          security: {
            type: 'object',
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
                example: 'false',
              },
              disableIOSPassSharing: {
                type: 'boolean',
                example: 'false',
              },
              disableMultipleHolders: {
                type: 'boolean',
                example: 'false',
              },
              enableSecurityAnimation: {
                type: 'boolean',
                example: 'false',
              },
              enableRotatingBarcode: {
                type: 'boolean',
                example: 'false',
              },
            },
          },
          barcodeType: {
            type: 'string',
            enum: ['CODE128', 'PDF417', 'QR', 'AZTEC', 'NONE'],
            default: 'CODE128',
          },
        },
      },
      createHotelPayload: {
        title: 'Create Hotel',
        type: 'object',
        properties: {
          strip: {
            type: 'string',
            format: 'binary',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#FFFFFF',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          name: {
            type: 'string',
            default: 'Hôtel de France',
          },
          terms: {
            type: 'string',
            default: 'terms',
          },
          email: {
            type: 'string',
            default: 'hotel@hotelFrance.fr',
          },
          address: {
            type: 'string',
            default: 'France',
          },
          type: {
            type: 'string',
            enum: [
              'single',
              'double',
              'triple',
              'quad',
              'queen',
              'king',
              'twin',
              'doubleDouble',
              'studio',
              'suite',
              'juniorSuite',
              'presidentSuite',
              'apartment',
              'connectingRoom',
              'murphyRoom',
              'accessibleRoom',
              'adjoiningtoom',
              'adjacentRoom',
              'villa',
            ],
          },
          number: {
            type: 'number',
            default: '15',
          },
          contactPhone: {
            type: 'string',
            default: '+330174466426',
          },
          website: {
            type: 'string',
            default: 'www.hotelFrance.fr',
          },
          barcodeType: {
            type: 'string',
            enum: ['CODE128', 'PDF417', 'QR', 'AZTEC', 'NONE'],
            default: 'CODE128',
          },
        },
      },
      customersRoomsCards: {
        title: 'Room Card',
        type: 'object',
        properties: {
          classId: {
            type: 'string',
          },
          passId: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
          },
          holderName: {
            type: 'string',
          },
          customerId: {
            type: 'string',
          },
          checkin: {
            type: 'string',
          },
          checkout: {
            type: 'string',
          },
        },
      },
      createTransitPayload: {
        title: 'Create Transit',
        type: 'object',
        properties: {
          strip: {
            type: 'string',
            format: 'binary',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          type: {
            type: 'string',
            enum: ['bus', 'rail', 'tram', 'ferry', 'other'],
            default: 'bus',
          },
          number: {
            type: 'number',
            default: 15,
          },
          originStationCode: {
            default: 'SFO',
            type: 'string',
          },
          originName: {
            default: 'San Francisco',
            type: 'string',
          },
          destinationStationCode: {
            default: 'LA',
            type: 'string',
          },
          destinationName: {
            default: 'Los Angeles',
            type: 'string',
          },
          departureTime: {
            default: '16:20',
            type: 'string',
          },
          arrivalTime: {
            default: '20:50',
            type: 'string',
          },
          tarif: {
            default: '5 €',
            type: 'string',
          },
          details: {
            type: 'string',
            default: 'Welcome aboard',
          },
          terms: {
            type: 'string',
            default:
              'Please read the Terms of Use carefully before you start to use our services',
          },
          customerServiceNumber: {
            type: 'string',
            default: '+330174466426',
          },
          security: {
            type: 'object',
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
                example: 'false',
              },
              disableIOSPassSharing: {
                type: 'boolean',
                example: 'false',
              },
              disableMultipleHolders: {
                type: 'boolean',
                example: 'false',
              },
              enableSecurityAnimation: {
                type: 'boolean',
                example: 'false',
              },
              enableRotatingBarcode: {
                type: 'boolean',
                example: 'false',
              },
            },
          },
          barcodeType: {
            type: 'string',
            enum: ['CODE128', 'PDF417', 'QR', 'AZTEC', 'NONE'],
            default: 'CODE128',
          },
        },
      },
      updateTransitPayload: {
        title: 'Update Transit',
        type: 'object',
        properties: {
          strip: {
            type: 'string',
            format: 'binary',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          number: {
            type: 'number',
            default: 15,
          },
          originStationCode: {
            default: 'SFO',
            type: 'string',
          },
          originName: {
            default: 'San Francisco',
            type: 'string',
          },
          destinationStationCode: {
            default: 'LA',
            type: 'string',
          },
          destinationName: {
            default: 'Los Angeles',
            type: 'string',
          },
          departureTime: {
            default: '16:20',
            type: 'string',
          },
          arrivalTime: {
            default: '20:50',
            type: 'string',
          },
          tarif: {
            default: '5 €',
            type: 'string',
          },
          details: {
            type: 'string',
            default: 'Welcome aboard',
          },
          terms: {
            type: 'string',
            default:
              'Please read the Terms of Use carefully before you start to use our services',
          },
          customerServiceNumber: {
            type: 'string',
            default: '+330174466426',
          },
          security: {
            type: 'object',
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
                example: 'false',
              },
              disableIOSPassSharing: {
                type: 'boolean',
                example: 'false',
              },
              disableMultipleHolders: {
                type: 'boolean',
                example: 'false',
              },
              enableSecurityAnimation: {
                type: 'boolean',
                example: 'false',
              },
              enableRotatingBarcode: {
                type: 'boolean',
                example: 'false',
              },
            },
          },
          barcodeType: {
            type: 'string',
            enum: ['CODE128', 'PDF417', 'QR', 'AZTEC', 'NONE'],
            default: 'CODE128',
          },
        },
      },
      customersTransitTickets: {
        title: 'Transport ticket',
        type: 'object',
        properties: {
          classId: {
            type: 'string',
          },
          passId: {
            type: 'string',
          },
          createdAt: {
            type: 'string',
          },
          updatedAt: {
            type: 'string',
          },
          phoneNumber: {
            type: 'string',
          },
          passengerName: {
            type: 'string',
          },
          customerId: {
            type: 'string',
          },
          tripType: {
            type: 'string',
          },
          passengerType: {
            type: 'string',
          },
          arrivaldate: {
            type: 'string',
            format: 'date',
          },
          departureDate: {
            type: 'string',
            format: 'date',
          },
        },
      },
      createFlightPayload: {
        title: 'Create/Update offer',
        type: 'object',
        properties: {
          strip: {
            type: 'string',
            format: 'binary',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#FFFFFF',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#000000',
              },
              rgb: {
                type: 'string',
                example: 'rgb(0,0,0)',
              },
            },
          },
          customerServiceNumber: {
            type: 'string',
            example: '+330174466426',
          },
          departureDateTime: {
            type: 'string',
            format: 'date-time',
            default: '2022-01-06T06:40:35.000Z',
          },
          carrierIataCode: {
            type: 'string',
            default: 'LX',
          },
          number: {
            type: 'number',
            default: '15',
          },
          origin: {
            type: 'object',
            properties: {
              airportIataCode: {
                default: 'LAX',
                type: 'string',
              },
              gate: {
                default: 'A1',
                type: 'string',
              },
              terminal: {
                default: '1',
                type: 'string',
              },
              airportName: {
                default: 'Ho Chi Minh City',
                type: 'string',
              },
            },
          },
          destination: {
            type: 'object',
            properties: {
              airportIataCode: {
                default: 'SFO',
                type: 'string',
              },
              gate: {
                type: 'string',
                default: 'c3',
              },
              terminal: {
                type: 'string',
                default: '2',
              },
              airportName: {
                default: 'Tokyo Haneda',
                type: 'string',
              },
            },
          },
          details: {
            type: 'string',
            default: 'Welcome to the airport',
          },
          layovers: {
            type: 'array',
            items: {
              type: 'string',
              example: 'Mulhouse',
            },
          },
          security: {
            type: 'object',
            properties: {
              enableOneTimeUse: {
                type: 'boolean',
                example: 'false',
              },
              disableIOSPassSharing: {
                type: 'boolean',
                example: 'false',
              },
              disableMultipleHolders: {
                type: 'boolean',
                example: 'false',
              },
              enableSecurityAnimation: {
                type: 'boolean',
                example: 'false',
              },
              enableRotatingBarcode: {
                type: 'boolean',
                example: 'false',
              },
            },
          },
          barcodeType: {
            type: 'string',
            enum: ['CODE128', 'PDF417', 'QR', 'AZTEC', 'NONE'],
            default: 'CODE128',
          },
        },
      },
      createWalletPayload: {
        title: 'Create Wallet',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Impact Arena',
          },
          email: {
            type: 'string',
            example: 'email@test.com',
          },
          username: {
            type: 'string',
            example: 'username',
          },
          password: {
            type: 'string',
            example: 'password',
          },
          allowedPasses: {
            type: 'array',
            items: {
              type: 'string',
              example: 'Offer',
            },
          },
          usernameSMS: {
            type: 'string',
            example: 'username',
          },
          passwordSMS: {
            type: 'string',
            example: 'password',
          },
          businessPhone: {
            type: 'string',
            example: '+33142084254',
          },
          servicePhone: {
            type: 'string',
            example: '+33142013854',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#ffffff',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#adadad',
              },
              rgb: {
                type: 'string',
                example: 'rgb(173,173,173)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#ffffff',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          barcodeType: {
            type: 'string',
            enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
            example: 'QR',
          },
          expirationType: {
            type: 'string',
            enum: ['NO_EXPIRATION', 'AT_DATETIME', 'AFTER_PERIOD'],
            example: 'NO_EXPIRATION',
          },
          expirationDate: {
            type: 'string',
            example: '2022-10-13T01:49:58.936Z',
          },
          expirationAfterPeriod: {
            type: 'string',
            example: '4,MONTHS',
          },
          additionalContacts: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'PhoneNumber',
                },
                value: {
                  type: 'string',
                  example: '+33142084254',
                },
                kind: {
                  type: 'string',
                  enum: ['URL', 'PHONE', 'EMAIL'],
                  example: 'PHONE',
                },
              },
            },
          },
          socialMedia: {
            type: 'object',
            properties: {
              facebook: {
                type: 'string',
                example: 'https://www.facebook.com/impactarena',
              },
              instagram: {
                type: 'string',
                example: 'https://www.instagram.com/impactarena',
              },
              linkedin: {
                type: 'string',
                example: 'https://www.linkedin.com/impactarena',
              },
            },
          },
          website: {
            type: 'string',
            example: 'https://impactarena.com',
          },
          address: {
            type: 'string',
            example: '1 rue de la paix',
          },
          openingHours: {
            type: 'string',
            example: 'Lundi au vendredi de 9h à 18h',
          },
          descriptions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'Description',
                },
                value: {
                  type: 'string',
                  example: 'Impact Arena est une salle de sport située à Paris',
                },
              },
            },
          },
          identifierQr: {
            type: 'string',
            example: '5677',
          },
          identifier: {
            type: 'string',
            example: 'bad50e6bc4b0cde87a2a0a69',
          },
          emailingConfig: {
            type: 'string',
            enum: ['SES', 'SMTP'],
            example: 'SES',
          },
          displayWalletName: {
            type: 'boolean',
            example: true,
          },
          locations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: '76, rue de Lille 13400 AUBAGNE',
                },
                longitude: {
                  type: 'number',
                  example: 2.3125185928956062,
                },
                latitude: {
                  type: 'number',
                  example: 49.07575430649549,
                },
                relevantText: {
                  type: 'string',
                  example: '',
                },
              },
            },
          },
          programName: {
            type: 'string',
            example: 'Carte de Fidélité',
          },
          gainUnit: {
            type: 'string',
            enum: ['NONE', 'EURO', 'USD'],
            example: 'EURO',
          },
          logo: {
            type: 'string',
            format: 'binary',
          },
          icon: {
            type: 'string',
            format: 'binary',
          },
          strip: {
            type: 'string',
            format: 'binary',
          },
        },
      },
      updateWalletPayload: {
        title: 'Update Wallet',
        properties: {
          email: {
            type: 'string',
            example: 'email@test.com',
          },
          username: {
            type: 'string',
            example: 'username',
          },
          password: {
            type: 'string',
            example: 'password',
          },
          allowedPasses: {
            type: 'array',
            items: {
              type: 'string',
              example: 'Offer',
            },
          },
          usernameSMS: {
            type: 'string',
            example: 'username',
          },
          passwordSMS: {
            type: 'string',
            example: 'password',
          },
          distributionUpdateStrategy: {
            type: 'string',
            enum: ['UPDATE_ALL', 'NO_UPDATE'],
            example: 'NO_UPDATE',
          },
          name: {
            type: 'string',
            example: 'Impact Arena',
          },
          businessPhone: {
            type: 'string',
            example: '+33142084254',
          },
          servicePhone: {
            type: 'string',
            example: '+33142013854',
          },
          labelColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#ffffff',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          backgroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#adadad',
              },
              rgb: {
                type: 'string',
                example: 'rgb(173,173,173)',
              },
            },
          },
          foregroundColor: {
            type: 'object',
            properties: {
              hex: {
                type: 'string',
                example: '#ffffff',
              },
              rgb: {
                type: 'string',
                example: 'rgb(255,255,255)',
              },
            },
          },
          programName: {
            type: 'string',
            example: 'Carte de Fidélité',
          },
          barcodeType: {
            type: 'string',
            enum: ['QR', 'CODE128', 'PDF417', 'AZTEC', 'NONE'],
            example: 'QR',
          },

          expirationType: {
            type: 'string',
            enum: ['NO_EXPIRATION', 'AT_DATETIME', 'AFTER_PERIOD'],
            example: 'NO_EXPIRATION',
          },
          expirationDate: {
            type: 'string',
            example: '2022-10-13T01:49:58.936Z',
          },
          expirationAfterPeriod: {
            type: 'string',
            example: '4,MONTHS',
          },
          hiddenFields: {
            type: 'array',
            items: {
              type: 'string',
              example: 'CREATION_DATE',
            },
          },
          iosHeaderFields: {
            type: 'object',
            properties: {
              label: {
                type: 'string',
                enum: ['TYPE', 'REWARDS', 'FULLNAME', 'TEXT', 'DISABLED'],
                example: 'FULLNAME',
              },
              value: {
                type: 'string',
                enum: ['TYPE', 'REWARDS', 'FULLNAME', 'TEXT', 'DISABLED'],
                example: 'REWARDS',
              },
              labelPersonnalizedText: {
                type: 'string',
                example: 'default',
              },
              valuePersonnalizedText: {
                type: 'string',
                example: 'default',
              },
            },
          },
          additionalContacts: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'PhoneNumber',
                },
                value: {
                  type: 'string',
                  example: '+33142084254',
                },
                kind: {
                  type: 'string',
                  enum: ['URL', 'PHONE', 'EMAIL'],
                  example: 'PHONE',
                },
              },
            },
          },
          socialMedia: {
            type: 'object',
            properties: {
              facebook: {
                type: 'string',
                example: 'https://www.facebook.com/impactarena',
              },
              instagram: {
                type: 'string',
                example: 'https://www.instagram.com/impactarena',
              },
              linkedin: {
                type: 'string',
                example: 'https://www.linkedin.com/impactarena',
              },
            },
          },
          website: {
            type: 'string',
            example: 'https://impactarena.com',
          },
          address: {
            type: 'string',
            example: '1 rue de la paix',
          },
          openingHours: {
            type: 'string',
            example: 'Lundi au vendredi de 9h à 18h',
          },
          descriptions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'Description',
                },
                value: {
                  type: 'string',
                  example: 'Impact Arena est une salle de sport située à Paris',
                },
              },
            },
          },
          emailingConfig: {
            type: 'string',
            enum: ['SES', 'SMTP'],
            example: 'SES',
          },
          displayWalletName: {
            type: 'boolean',
            example: true,
          },
          locations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: '76, rue de Lille 13400 AUBAGNE',
                },
                longitude: {
                  type: 'number',
                  example: 2.3125185928956062,
                },
                latitude: {
                  type: 'number',
                  example: 49.07575430649549,
                },
                relevantText: {
                  type: 'string',
                  example: '',
                },
              },
            },
          },
          gainUnit: {
            type: 'string',
            enum: ['POINTS', 'EURO', 'USD'],
            example: 'EURO',
          },
          logo: {
            type: 'string',
            format: 'binary',
          },
          icon: {
            type: 'string',
            format: 'binary',
          },
          strip: {
            type: 'string',
            format: 'binary',
          },
        },
        type: 'object',
      },
      updateSettingsPayload: {
        title: 'Create/Update Settings',
        properties: {
          expiredOfferEmailMessage: {
            type: 'string',
            example: 'Votre offre est expirée',
          },
          communicationEmail: {
            type: 'object',
            properties: {
              auth: {
                type: 'object',
                properties: {
                  user: {
                    type: 'string',
                    format: 'nullable',
                  },
                  pass: {
                    type: 'string',
                    format: 'nullable',
                  },
                },
              },
              host: {
                type: 'string',
                format: 'nullable',
              },
              port: {
                type: 'string',
                format: 'nullable',
              },
            },
          },
          newCouponNotificationMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          expiredOfferNotificationMessage: {
            type: 'string',
            example: 'Votre offre est expirée',
          },
          newAccountSMSMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau carte',
          },
          newEventSMSMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau event',
          },
          expiredOfferSMSMessage: {
            type: 'string',
            example: 'Votre offre est expirée',
          },
          newUpdateSMSMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          newCouponSMSMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newOfferSMSMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau offer',
          },
          enableNewUpdateEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewStorecardEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableStorecardReminderEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewStorecardSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableStorecardReminderSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewUpdateNotification: {
            type: 'boolean',
            example: true,
          },
          enableUpdateEventNotification: {
            type: 'boolean',
            example: true,
          },
          enableCouponEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableUpdateCouponEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponEmailMessageForExternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponEmailMessageForInternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponEmailMessageForCRMClients: {
            type: 'boolean',
            example: true,
          },
          enableCouponSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableUpdateCouponSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableExpiredCouponSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponSMSMessageForExternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponSMSMessageForInternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponSMSMessageForCRMClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponNotificationMessageForExternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponNotificationMessageForInternalClients: {
            type: 'boolean',
            example: true,
          },
          enableWelcomeCouponNotificationMessageForCRMClients: {
            type: 'boolean',
            example: true,
          },
          enableUpdateCouponNotificationMessage: {
            type: 'boolean',
            example: true,
          },
          enableUpdateEventEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewCouponNotificationMessage: {
            type: 'boolean',
            example: true,
          },
          enableOfferEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableExpiredOfferEmailMessage: {
            type: 'boolean',
            example: true,
          },
          enableOfferSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableExpiredOfferSMSMessage: {
            type: 'boolean',
            example: true,
          },
          enableNewOfferNotificationMessage: {
            type: 'boolean',
            example: true,
          },
          enableExpiredOfferNotificationMessage: {
            type: 'boolean',
            example: true,
          },
          communicationChannels: {
            type: 'string',
            enum: ['phoneNumber', 'emailAdress', 'all'],
            example: 'all',
          },
          smsTitle: {
            type: 'string',
            example: 'ImpactArena',
          },
          emailingConfig: {
            type: 'string',
            example: 'SES',
          },
          offerEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          newAccountEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          couponEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          eventEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          flightEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          cinemaEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          hotelEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          boatEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          trainEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          busEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          storeCardUpdateEmailHtmlCode: {
            type: 'string',
            example: 'HTML CODE',
          },
          couponNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          eventNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          cinemaNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          flightNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          newUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          hotelNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          cinemaNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          eventNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          giftCardNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          emailMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newOfferEmailMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newEventEmailMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau event',
          },
          cinemaEmailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau billet cinema',
          },
          hotelEmailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau reservation',
          },
          transitEmailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage',
          },
          flightEmailSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage',
          },
          newCouponEmailMessage: {
            type: 'string',
            example: 'Vous avez reçu un nouveau coupon',
          },
          newEventNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau évenement.',
          },
          newFlightNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage.',
          },
          newTransitNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de voyage.',
          },
          newHotelNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau reservation hotel.',
          },
          newCinemaNotificationSubscriptionMessage: {
            type: 'string',
            example: 'Vous avez un nouveau billet de cinema.',
          },
          newStoreCardNotificationSubscriptionMessage: {
            type: 'string',
            example:
              'We will send only the most profitable as well as information about the loyalty program',
          },
          transitNewUpdateNotificationMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          newOfferNotificationMessage: {
            type: 'string',
            example: 'Vous avez reçu une nouvelle offre',
          },
          transitNewUpdateEmailMessage: {
            type: 'string',
            example: 'Vous avez une nouvelle mise à jour.',
          },
          smsMessageRegistration: {
            type: 'string',
            example:
              'Welcome to the world of discounts and promotions. We will send only the most profitable as well as information about the loyalty program',
          },
        },
        type: 'object',
      },
    },
    securitySchemes: {
      api_key: {
        type: 'apiKey',
        name: 'orgazone',
        in: 'header',
      },
      bearerAuth: {
        type: 'http',
        bearerFormat: 'JWT',
        scheme: 'bearer',
      },
    },
    parameters: {
      AcceptLanguageHeader: {
        name: 'Accept-Language',
        in: 'header',
        description: 'The language of the client',
        required: false,
        schema: {
          type: 'string',
          enum: ['en', 'fr'],
          default: 'en',
        },
      },
    },
  },
};
