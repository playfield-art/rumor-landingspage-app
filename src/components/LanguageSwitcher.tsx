import { Button, Stack } from '@mui/material';

type LanguageSwitcherProps = {
  onChange: (language: string) => void;
}

export const LanguageSwitcher = ({ onChange }: LanguageSwitcherProps) => {
  return (
    <Stack direction="row">
      <Button variant='language' sx={{marginRight: 2}} onClick={() => onChange('en')}>EN</Button>
      <Button variant='language' onClick={() => onChange('nl')}>NL</Button>
    </Stack>
  )
}