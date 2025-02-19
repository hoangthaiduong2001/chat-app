export interface CAlertDialogProps {
  value: boolean;
  label: string;
  title: string;
  onSubmit: () => void;
  setValue: (value: boolean) => void;
}
