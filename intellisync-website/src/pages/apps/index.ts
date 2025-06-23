import { APPS } from '../store/StorePage';

export function getAppBySlug(slug: string) {
  return APPS.find(app => app.slug === slug);
}

export function getAllAppSlugs() {
  return APPS.map(app => ({
    params: {
      slug: app.slug
    }
  }));
}
