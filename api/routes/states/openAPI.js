const {
  requiresAuth,
  schema: { errorToken, jsonResponse }
} = require('../openAPI/helpers');

const openAPI = {
  '/states': {
    get: {
      tags: ['States, territories, and districts'],
      summary: `Gets information about the current user's state/territory/district`,
      description: `Get information about the users's state, territory, or district`,
      responses: {
        200: {
          description: 'Information about the state, territory, or district',
          content: jsonResponse({ $ref: '#/components/schemas/state' })
        },
        401: {
          description: 'User does not have access to any state',
          content: errorToken
        }
      }
    },
    put: {
      tags: ['States, territories, and districts'],
      summary: `Sets information about the current user's state/territory/district`,
      description: `Update information about the users's state, territory, or district`,
      requestBody: {
        description:
          'The new state information.  Any extraneous fields will be discarded.',
        content: jsonResponse({ $ref: '#/components/schemas/state' })
      },
      responses: {
        200: {
          description:
            'Information about the state, territory, or district was successfully updated. Returns the full, updated state object',
          content: jsonResponse({ $ref: '#/components/schemas/state' })
        },
        400: {
          description: 'The request was invalid',
          content: errorToken
        },
        401: {
          description: 'User does not have access to any state',
          content: errorToken
        }
      }
    }
  },
  '/states/{id}': {
    get: {
      tags: ['States, territories, and districts'],
      summary: 'Gets information about a specific state/territory/district',
      description:
        'Get information about a specific state, territory, or district',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description:
            'The ID (2-letter abbreviation, lowercase) of the state, territory, or district to fetch',
          required: true,
          schema: {
            type: 'integer'
          }
        }
      ],
      responses: {
        200: {
          description: 'Information about the state, territory, or district',
          content: jsonResponse({ $ref: '#/components/schemas/state' })
        },
        404: {
          description:
            'The requested ID does not match any known states, territories, or districts'
        }
      }
    }
  }
};

module.exports = requiresAuth(openAPI, { has401: false });
