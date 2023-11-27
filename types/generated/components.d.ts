import type { Schema, Attribute } from '@strapi/strapi';

export interface PeopleContribuitor extends Schema.Component {
  collectionName: 'components_people_contribuitors';
  info: {
    displayName: 'Contribuitor';
    icon: 'user';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    Github: Attribute.String;
    Profile_picture: Attribute.Media;
    Relationship: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Mentor',
          'Colleague/Co-worker',
          'Supervisor/Manager',
          'Networking Contact',
          'Client/Customer',
          'Business Partner',
          'Collaborator',
          'Mentee',
          'Industry Peers',
          'Advisor/Consultant',
          'Family - Spouse/Partner',
          'Family - Parent/Child',
          'Family - Sibling',
          'Friend',
          'Roommate/Housemate',
          'Neighbor',
          'Classmate/Schoolmate',
          'Club or Hobby Group',
          'Long-Distance Friend/Relationship',
          'Mentor/Mentee',
          'Coach/Trainee',
          'Life Partner'
        ]
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'people.contribuitor': PeopleContribuitor;
    }
  }
}
