export const AD_BUTTON_VARIANTS = ['primary', 'secondary', 'alternate'] as const;
export type AdButtonVariantType = (typeof AD_BUTTON_VARIANTS)[number];

export const AD_BUTTON_SIZES = ['small', 'medium', 'large'] as const;
export type AdButtonSizeType = (typeof AD_BUTTON_SIZES)[number];
