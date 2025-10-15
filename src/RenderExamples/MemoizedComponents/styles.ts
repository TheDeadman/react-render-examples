import { SxProps, Theme } from '@mui/material/styles';

type Override = Record<string, unknown>;

export const memoizedPalette = {
    cardBackground: '#1a1a1a',
    cardHover: '#2a2a2a',
    panelBackground: '#121212',
    subtleBorder: '#555',
    mutedText: '#bbb'
};

const baseCard: SxProps<Theme> = {
    p: 2,
    m: 1,
    borderRadius: 2,
    backgroundColor: memoizedPalette.cardBackground,
    '&:hover': {
        backgroundColor: memoizedPalette.cardHover
    }
};

export const createCardStyles = (accentColor: string, overrides: Override = {}): SxProps<Theme> => ({
    ...baseCard,
    border: `2px solid ${accentColor}`,
    ...overrides
});

export const createTitleStyles = (accentColor: string, overrides: Override = {}): SxProps<Theme> => ({
    color: accentColor,
    fontWeight: 'bold',
    ...overrides
});

export const infoTextStyles: SxProps<Theme> = {
    color: memoizedPalette.mutedText,
    mb: 1
};

export const createCaptionStyles = (color: string, overrides: Override = {}): SxProps<Theme> => ({
    color,
    fontStyle: 'italic',
    ...overrides
});

export const createButtonStyles = (
    accentColor: string,
    hoverColor?: string,
    overrides: Override = {}
): SxProps<Theme> => ({
    mt: 1,
    backgroundColor: accentColor,
    '&:hover': {
        backgroundColor: hoverColor ?? accentColor
    },
    ...overrides
});

export const createTextFieldStyles = (accentColor: string, overrides: Override = {}): SxProps<Theme> => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#2a2a2a',
        '& fieldset': {
            borderColor: memoizedPalette.subtleBorder
        },
        '&:hover fieldset': {
            borderColor: accentColor
        },
        '&.Mui-focused fieldset': {
            borderColor: accentColor
        }
    },
    '& .MuiInputLabel-root': {
        color: accentColor,
        '&.Mui-focused': {
            color: accentColor
        }
    },
    ...overrides
});

const baseLabel: SxProps<Theme> = {
    position: 'absolute',
    top: -10,
    left: 10,
    color: 'white',
    px: 1,
    py: 0.5,
    borderRadius: 1,
    fontSize: '0.75rem',
    fontWeight: 'bold',
    zIndex: 1
};

export const createLabelStyles = (backgroundColor: string, overrides: Override = {}): SxProps<Theme> => ({
    ...baseLabel,
    backgroundColor,
    ...overrides
});

export const legendContainerStyles: SxProps<Theme> = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    p: 2,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 1,
    mb: 2
};

export const legendItemStyles: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5
};

export const legendSwatchStyles = (backgroundColor: string): SxProps<Theme> => ({
    width: 16,
    height: 16,
    backgroundColor,
    borderRadius: 1
});
