/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAVERMAPS_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}