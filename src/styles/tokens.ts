// Design System Tokens
export const colors = {
  // Status colors
  statusAvailable: '#10B981',
  statusAvailableBg: 'rgba(16, 185, 129, 0.1)',
  statusBusy: '#F59E0B',
  statusBusyBg: 'rgba(245, 158, 11, 0.1)',
  statusBreak: '#3B82F6',
  statusBreakBg: 'rgba(59, 130, 246, 0.1)',
  statusOffline: '#6B7280',
  statusOfflineBg: 'rgba(107, 114, 128, 0.1)',
  
  // UI colors
  primary600: '#2563EB',
  primary700: '#1D4ED8',
  primary50: '#EFF6FF',
  success600: '#16A34A',
  error600: '#DC2626',
  error50: '#FEF2F2',
  warning600: '#EA580C',
  warning50: '#FEF3C7',
  info600: '#0284C7',
  
  // Neutral colors
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray900: '#111827',
  
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
} as const;

export const typography = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  pill: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
  md: '0 4px 12px rgba(0, 0, 0, 0.12)',
  lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
} as const;

export type Status = 'available' | 'busy' | 'break' | 'offline';

export const statusConfig = {
  available: {
    label: 'Available',
    color: colors.statusAvailable,
    bgColor: colors.statusAvailableBg,
    icon: '🟢',
  },
  busy: {
    label: 'Busy',
    color: colors.statusBusy,
    bgColor: colors.statusBusyBg,
    icon: '🟠',
  },
  break: {
    label: 'Break',
    color: colors.statusBreak,
    bgColor: colors.statusBreakBg,
    icon: '🔵',
  },
  offline: {
    label: 'Offline',
    color: colors.statusOffline,
    bgColor: colors.statusOfflineBg,
    icon: '⚫',
  },
} as const;
