import { HttpStatus } from '@nestjs/common';

export const ERROR_MESSAGES = {
  common: {
    // success messages
    SUCCESSFUL: {
      message: 'SUCCESSFUL',
      status: HttpStatus.OK,
      code: 'SUCCESSFUL'
    },
    CREATED: {
      message: 'SUCCESSFUL',
      status: HttpStatus.CREATED,
      code: 'CREATED'
    },

    // error messages
    UNAUTHORIZED_ACCESS_DENIED: {
      message: 'UNAUTHORIZED_ACCESS_DENIED',
      status: HttpStatus.UNAUTHORIZED,
      code: 'UNAUTHORIZED_ACCESS_DENIED'
    },
    FORBIDDEN: {
      message: 'FORBIDDEN',
      status: HttpStatus.FORBIDDEN,
      code: 'FORBIDDEN'
    },
    BAD_REQUEST: {
      message: 'BAD_REQUEST',
      status: HttpStatus.BAD_REQUEST,
      code: 'BAD_REQUEST'
    },
    NOT_FOUND: {
      message: 'NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'NOT_FOUND'
    },
    INTERNAL_SERVER_ERROR: {
      message: 'INTERNAL_SERVER_ERROR',
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'INTERNAL_SERVER_ERROR'
    },
    PERMISSION_DENIED: {
      message: 'PERMISSION_DENIED',
      status: HttpStatus.FORBIDDEN,
      code: 'PERMISSION_DENIED'
    },
    INVALID_HASHCODE: {
      message: 'INVALID_HASHCODE',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_HASHCODE'
    },
    INVALID_REQUEST_DATA: {
      message: 'INVALID_REQUEST_DATA',
      status: HttpStatus.BAD_REQUEST,
      code: 'VALIDATION_ERROR'
    }
  },
  auth: {
    INVALID_CREDENTIALS: {
      message: 'INVALID_CREDENTIALS',
      status: HttpStatus.UNAUTHORIZED,
      code: 'INVALID_CREDENTIALS'
    },
    USER_NOT_ACTIVE: {
      message: 'USER_NOT_ACTIVE',
      status: HttpStatus.UNAUTHORIZED,
      code: 'USER_NOT_ACTIVE'
    },
    INVALID_TOKEN: {
      message: 'INVALID_TOKEN',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_TOKEN'
    },
    INVALID_TOKEN_TYPE: {
      message: 'INVALID_TOKEN_TYPE',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_TOKEN_TYPE'
    },
    TOKEN_REVOKED: {
      message: 'TOKEN_REVOKED',
      status: HttpStatus.UNAUTHORIZED,
      code: 'TOKEN_REVOKED'
    },
    AUTHORIZATION_HEADER_REQUIRED: {
      message: 'AUTHORIZATION_HEADER_REQUIRED',
      status: HttpStatus.UNAUTHORIZED,
      code: 'AUTHORIZATION_HEADER_REQUIRED'
    },
    INVALID_AUTHORIZATION_FORMAT: {
      message: 'INVALID_AUTHORIZATION_FORMAT',
      status: HttpStatus.UNAUTHORIZED,
      code: 'INVALID_AUTHORIZATION_FORMAT'
    },
    PASSWORD_MISMATCH: {
      message: 'PASSWORD_MISMATCH',
      status: HttpStatus.BAD_REQUEST,
      code: 'PASSWORD_MISMATCH'
    },
    EMAIL_ALREADY_EXISTS: {
      message: 'EMAIL_ALREADY_EXISTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'EMAIL_ALREADY_EXISTS'
    },
    INVALID_CODE: {
      message: 'INVALID_CODE',
      status: HttpStatus.UNAUTHORIZED,
      code: 'INVALID_CODE'
    },
    INVALID_OR_EXPIRED_AUTH_CODE: {
      message: 'INVALID_OR_EXPIRED_AUTH_CODE',
      status: HttpStatus.UNAUTHORIZED,
      code: 'INVALID_OR_EXPIRED_AUTH_CODE'
    },
    CODE_INVALID_LENGTH: {
      message: 'CODE_INVALID_LENGTH',
      status: HttpStatus.BAD_REQUEST,
      code: 'CODE_INVALID_LENGTH'
    },
    ACCOUNT_TEMPORARILY_BLOCKED: {
      message: 'ACCOUNT_TEMPORARILY_BLOCKED',
      status: HttpStatus.LOCKED,
      code: 'ACCOUNT_TEMPORARILY_BLOCKED'
    },
    ACCOUNT_PERMANENTLY_BLOCKED: {
      message: 'ACCOUNT_PERMANENTLY_BLOCKED',
      status: HttpStatus.LOCKED,
      code: 'ACCOUNT_PERMANENTLY_BLOCKED'
    },
    PASSWORD_MISSING_REQUIREMENTS: {
      message: 'PASSWORD_MISSING_REQUIREMENTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'PASSWORD_MISSING_REQUIREMENTS'
    },
    EMAIL_NOT_FOUND: {
      message: 'EMAIL_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'EMAIL_NOT_FOUND'
    },
    USER_NOT_FOUND: {
      message: 'USER_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'USER_NOT_FOUND'
    },
    INVALID_PASSWORD: {
      message: 'INVALID_PASSWORD',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_PASSWORD'
    }
  },
  user: {
    // error messages
    USER_NOT_FOUND: {
      message: 'USER_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'USER_NOT_FOUND'
    },
    EMAIL_ALREADY_EXISTS: {
      message: 'EMAIL_ALREADY_EXISTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'EMAIL_ALREADY_EXISTS'
    },
    INVALID_PASSWORD_FORMAT: {
      message: 'INVALID_PASSWORD_FORMAT',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_PASSWORD_FORMAT'
    },
    PASSWORD_MISSING_REQUIREMENTS: {
      message: 'PASSWORD_MISSING_REQUIREMENTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'PASSWORD_MISSING_REQUIREMENTS'
    },

    // success messages
    USER_CREATED_SUCCESSFULLY: {
      message: 'USER_CREATED_SUCCESSFULLY',
      status: HttpStatus.CREATED,
      code: 'USER_CREATED_SUCCESSFULLY'
    },
    USER_UPDATED_SUCCESSFULLY: {
      message: 'USER_UPDATED_SUCCESSFULLY',
      status: HttpStatus.OK,
      code: 'USER_UPDATED_SUCCESSFULLY'
    },
    USER_DELETED_SUCCESSFULLY: {
      message: 'USER_DELETED_SUCCESSFULLY',
      status: HttpStatus.OK,
      code: 'USER_DELETED_SUCCESSFULLY'
    },
    USERS_RETRIEVED_SUCCESSFULLY: {
      message: 'USERS_RETRIEVED_SUCCESSFULLY',
      status: HttpStatus.OK,
      code: 'USERS_RETRIEVED_SUCCESSFULLY'
    },
    USER_RETRIEVED_SUCCESSFULLY: {
      message: 'USER_RETRIEVED_SUCCESSFULLY',
      status: HttpStatus.OK,
      code: 'USER_RETRIEVED_SUCCESSFULLY'
    }
  },
  project: {
    INVALID_NAME_LENGTH: {
      message: 'INVALID_NAME_LENGTH',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_NAME_LENGTH'
    },
    INVALID_END_DATE: {
      message: 'INVALID_END_DATE',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_END_DATE'
    },
    MEMBERS_DUPLICATED: {
      message: 'MEMBERS_DUPLICATED',
      status: HttpStatus.BAD_REQUEST,
      code: 'MEMBERS_DUPLICATED'
    },
    PROJECT_NAME_ALREADY_EXISTS: {
      message: 'PROJECT_NAME_ALREADY_EXISTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'PROJECT_NAME_ALREADY_EXISTS'
    },
    INVALID_MEMBER: {
      message: 'INVALID_MEMBER',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_MEMBER'
    },
    ROLE_NO_DEFAULT_PERMISSIONS: {
      message: 'ROLE_NO_DEFAULT_PERMISSIONS',
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'ROLE_NO_DEFAULT_PERMISSIONS'
    },
    USER_NOT_PROJECT_OWNER: {
      message: 'USER_NOT_PROJECT_OWNER',
      status: HttpStatus.FORBIDDEN,
      code: 'USER_NOT_PROJECT_OWNER'
    },
    PROJECT_NOT_FOUND: {
      message: 'PROJECT_NOT_FOUND',
      status: HttpStatus.BAD_REQUEST,
      code: 'PROJECT_NOT_FOUND'
    },
    PROJECT_MISSING_REQUIRED_FIELDS: {
      message: 'PROJECT_MISSING_REQUIRED_FIELDS',
      status: HttpStatus.BAD_REQUEST,
      code: 'PROJECT_MISSING_REQUIRED_FIELDS'
    },
    INVALID_STATUS: {
      message: 'INVALID_STATUS',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_STATUS'
    },
    USER_NOT_FOUND: {
      message: 'USER_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'USER_NOT_FOUND'
    },
    INVALID_INVITATION: {
      message: 'INVALID_INVITATION',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_INVITATION'
    },
    EXPIRED_INVITATION: {
      message: 'EXPIRED_INVITATION',
      status: HttpStatus.BAD_REQUEST,
      code: 'EXPIRED_INVITATION'
    },
    INVITATION_ALREADY_ACCEPTED: {
      message: 'INVITATION_ALREADY_ACCEPTED',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVITATION_ALREADY_ACCEPTED'
    },
    INVITATION_ALREADY_REJECTED: {
      message: 'INVITATION_ALREADY_REJECTED',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVITATION_ALREADY_REJECTED'
    },
    USER_NOT_PROJECT_MEMBER: {
      message: 'USER_NOT_PROJECT_MEMBER',
      status: HttpStatus.BAD_REQUEST,
      code: 'USER_NOT_PROJECT_MEMBER'
    }
  },
  task: {
    INVALID_NAME_LENGTH: {
      message: 'INVALID_NAME_LENGTH',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_NAME_LENGTH'
    },
    INVALID_END_DATE: {
      message: 'INVALID_END_DATE',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_END_DATE'
    },
    ASSIGNEE_NOT_PROJECT_MEMBER: {
      message: 'ASSIGNEE_NOT_PROJECT_MEMBER',
      status: HttpStatus.BAD_REQUEST,
      code: 'ASSIGNEE_NOT_PROJECT_MEMBER'
    },
    PARENT_TASK_NOT_FOUND: {
      message: 'PARENT_TASK_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'PARENT_TASK_NOT_FOUND'
    },
    INVALID_TAGS: {
      message: 'INVALID_TAGS',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_TAGS'
    },
    TASK_NOT_FOUND: {
      message: 'TASK_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'TASK_NOT_FOUND'
    },
    TASK_TITLE_ALREADY_EXISTS: {
      message: 'TASK_TITLE_ALREADY_EXISTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'TASK_TITLE_ALREADY_EXISTS'
    },
    CANNOT_UPDATE_TITLE: {
      message: 'CANNOT_UPDATE_TITLE',
      status: HttpStatus.BAD_REQUEST,
      code: 'CANNOT_UPDATE_TITLE'
    }
  },
  role: {
    INVALID_ROLE: {
      message: 'INVALID_ROLE',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_ROLE'
    }
  },
  permission: {
    INVALID_PERMISSION: {
      message: 'INVALID_PERMISSION',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_PERMISSION'
    },
    DEFAULT_PERMISSIONS_NOT_FOUND: {
      message: 'DEFAULT_PERMISSIONS_NOT_FOUND',
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'DEFAULT_PERMISSIONS_NOT_FOUND'
    }
  },
  attachment: {
    INVALID_FILE_PATH: {
      message: 'INVALID_FILE_PATH',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_FILE_PATH'
    },
    NOT_FOUND: {
      message: 'NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'NOT_FOUND'
    }
  },
  risk: {
    INVALID_DUE_DATE: {
      message: 'INVALID_DUE_DATE',
      status: HttpStatus.BAD_REQUEST,
      code: 'INVALID_DUE_DATE'
    },
    RISK_TITLE_ALREADY_EXISTS: {
      message: 'RISK_TITLE_ALREADY_EXISTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'RISK_TITLE_ALREADY_EXISTS'
    },
    RISK_NOT_FOUND: {
      message: 'RISK_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'RISK_NOT_FOUND'
    }
  },
  issue: {
    ISSUE_TITLE_ALREADY_EXISTS: {
      message: 'ISSUE_TITLE_ALREADY_EXISTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'ISSUE_TITLE_ALREADY_EXISTS'
    },
    ISSUE_NOT_FOUND: {
      message: 'ISSUE_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'ISSUE_NOT_FOUND'
    }
  },
  wiki: {
    WIKI_TITLE_ALREADY_EXISTS: {
      message: 'WIKI_TITLE_ALREADY_EXISTS',
      status: HttpStatus.BAD_REQUEST,
      code: 'WIKI_TITLE_ALREADY_EXISTS'
    },
    WIKI_NOT_FOUND: {
      message: 'WIKI_NOT_FOUND',
      status: HttpStatus.NOT_FOUND,
      code: 'WIKI_NOT_FOUND'
    }
  }
};
