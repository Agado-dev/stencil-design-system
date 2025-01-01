export const AD_LINK_TYPES = ['default', 'external'] as const;
export type AdLinkType = (typeof AD_LINK_TYPES)[number];
