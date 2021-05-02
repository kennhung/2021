import { SightState } from './sight';

export interface AppState {
  mode: AppMode;
  device: DeviceType;
  event: ConfEvent;
  sight: SightState;
  theme: ThemeType;
  isPopup: boolean;
  popupContent: string;
  popupOffsetTop: number;
  validPopupTypes: Array<keyof typeof PopupType>;
}

export interface ConfEvent {
  name: string;
  icon: string;
}

export enum AppMode {
  WEB = 'web',
  APP = 'app'
}

export enum DeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile'
}

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
  RAINBOW_LIGHT = 'rainbow-light',
  RAINBOW_DARK = 'rainbow-dark'
}

export enum PopupType {
  ANNOUNCEMENT = 'announcement',
  SUBMIT_INFO = 'submitInfo',
  OPEN_SUBMIT = 'openSubmit',
  LOUDLY = 'loudly'
}
