import { type AccountAssociation } from '@farcaster/miniapp-core/src/manifest';

/**
 * ============================================================
 * Application Constants & Configuration
 * ============================================================
 * ⚠️ This file is critical for Farcaster mini app correctness.
 * All URLs MUST be absolute and NEVER undefined.
 * ============================================================
 */

/* ------------------------------------------------------------
 * App Base URL (MOST IMPORTANT)
 * ------------------------------------------------------------ */
export const APP_URL: string =
  process.env.NEXT_PUBLIC_APP_URL ??
  'https://publish-testing.vercel.app';

/* ------------------------------------------------------------
 * App Identity
 * ------------------------------------------------------------ */
export const APP_NAME: string = 'publish app';
export const APP_DESCRIPTION: string = 'publish app';
export const APP_PRIMARY_CATEGORY: string = 'games';
export const APP_TAGS: string[] = ['public', 'app'];

/* ------------------------------------------------------------
 * Asset URLs (derived safely from APP_URL)
 * ------------------------------------------------------------ */
export const APP_ICON_URL: string = `${APP_URL}/icon.png`;
export const APP_OG_IMAGE_URL: string = `${APP_URL}/api/opengraph-image`;
export const APP_SPLASH_URL: string = `${APP_URL}/splash.png`;
export const APP_SPLASH_BACKGROUND_COLOR: string = '#f7f7f7';

/* ------------------------------------------------------------
 * UI Configuration
 * ------------------------------------------------------------ */
export const APP_BUTTON_TEXT: string = 'public';

/* ------------------------------------------------------------
 * Farcaster Account Association
 * (leave undefined unless you have signed payload)
 * ------------------------------------------------------------ */
export const APP_ACCOUNT_ASSOCIATION: AccountAssociation | undefined =
  undefined;

/* ------------------------------------------------------------
 * Neynar Webhook Configuration
 * ------------------------------------------------------------ */
export const APP_WEBHOOK_URL: string =
  process.env.NEYNAR_API_KEY && process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID
    ? `https://api.neynar.com/f/app/${process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID}/event`
    : `${APP_URL}/api/webhook`;

/* ------------------------------------------------------------
 * Feature Flags
 * ------------------------------------------------------------ */
export const USE_WALLET: boolean = true;
export const ANALYTICS_ENABLED: boolean = true;

/* ------------------------------------------------------------
 * Chain Requirements (optional)
 * ------------------------------------------------------------ */
export const APP_REQUIRED_CHAINS: string[] = [];

/* ------------------------------------------------------------
 * Return URL (optional)
 * ------------------------------------------------------------ */
export const RETURN_URL: string | undefined = undefined;

/* ------------------------------------------------------------
 * DO NOT MODIFY BELOW (Farcaster Spec)
 * ------------------------------------------------------------ */
export const SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN = {
  name: 'Farcaster SignedKeyRequestValidator',
  version: '1',
  chainId: 10,
  verifyingContract:
    '0x00000000fc700472606ed4fa22623acf62c60553' as `0x${string}`,
};

export const SIGNED_KEY_REQUEST_TYPE = [
  { name: 'requestFid', type: 'uint256' },
  { name: 'key', type: 'bytes' },
  { name: 'deadline', type: 'uint256' },
];
