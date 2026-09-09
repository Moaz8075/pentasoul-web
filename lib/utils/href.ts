export function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/.test(href);
}
