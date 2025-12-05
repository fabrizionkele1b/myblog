import type { Schema, Struct } from '@strapi/strapi';

export interface ArticlesKeywords extends Struct.ComponentSchema {
  collectionName: 'components_articles_keywords';
  info: {
    displayName: 'keywords';
  };
  attributes: {};
}

export interface AuthorSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_author_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    Facebook: Schema.Attribute.String;
    Instagram: Schema.Attribute.String;
    LinkedIn: Schema.Attribute.String;
    Twitter: Schema.Attribute.String;
    Youtube: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'articles.keywords': ArticlesKeywords;
      'author.social-links': AuthorSocialLinks;
    }
  }
}
